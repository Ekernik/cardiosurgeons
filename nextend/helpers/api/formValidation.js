import { readFile, updateDataFile } from './fileActions';
import { sendSpamTelegram } from './telegranAction';

function logAndRespond(newAppointment, res, message, code) {
  console.log(message);

  const appointment = {
    ...newAppointment,
    reason: message,
    code: code,
  };

  updateDataFile('appointments-spam.json', appointment);

  sendSpamTelegram(appointment);

  res.status(code).json({
    message: message,
    code: code,
  });
}

export function checkIfSpam(id, res, newAppointment) {
  const data = readFile('appointments.json');

  let ipCount = 0;

  data.forEach(appointment => {
    appointment.id === id ? ipCount++ : null;
  });

  if (ipCount >= 3) {
    logAndRespond(
      newAppointment,
      res,
      'Слишком много запросов за сутки с Вашего IP',
      429,
    );

    return true;
  }

  return false;
}

export function checkEmail(newAppointment, res) {
  if (typeof newAppointment.email != 'string') {
    logAndRespond(newAppointment, res, 'Неверный тип поля email', 422);

    return false;
  }

  if (
    newAppointment.email.length != 0 &&
    (!newAppointment.email.includes('@') || !newAppointment.email.includes('.'))
  ) {
    logAndRespond(newAppointment, res, 'Неверный формат email', 422);

    return false;
  }

  return true;
}

export function checkName(newAppointment, res) {
  if (!newAppointment.name) {
    logAndRespond(newAppointment, res, 'Пустое поле name', 422);

    return false;
  }

  if (newAppointment.name.length < 6) {
    logAndRespond(newAppointment, res, 'Слишком короткое поле name', 422);

    return false;
  }

  return true;
}

export function checkPhone(newAppointment, res) {
  if (!newAppointment.phone) {
    logAndRespond(newAppointment, res, 'Пустое поле phone', 422);

    return false;
  }

  if (
    !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i.test(
      newAppointment.phone,
    )
  ) {
    logAndRespond(newAppointment, res, 'Неправильный формат номера', 422);

    return false;
  }

  return true;
}

export function checkMessage(newAppointment, res) {
  if (typeof newAppointment.message != 'string') {
    logAndRespond(newAppointment, res, 'Неверный тип сообщения', 422);

    return false;
  }

  if (newAppointment.message.length > 1000) {
    logAndRespond(newAppointment, res, 'Слишком длинное сообщение', 422);

    return false;
  }

  return true;
}
