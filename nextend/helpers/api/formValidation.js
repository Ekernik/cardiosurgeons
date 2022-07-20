import { readFile, updateDataFile } from './fileActions';

export function checkIfSpam(id, res, newAppointment) {
  const data = readFile('appointments.json');

  let ipCount = 0;

  data.forEach(appointment => {
    appointment.id === id ? ipCount++ : null;
  });

  if (ipCount >= 3) {
    console.log('Слишком много запросов за сутки с Вашего IP');

    updateDataFile('appointments-spam.json', {
      ...newAppointment,
      reason: 'Слишком много запросов за сутки с одного IP',
    });

    res.status(429).json({
      message: 'Слишком много запросов за сутки с Вашего IP',
      code: 429,
    });

    return true;
  }

  return false;
}

export function checkEmail(email, res) {
  if (typeof email != 'string') {
    console.log('Неверный тип поля email');

    res.status(422).json({
      message: 'Неверный тип поля email',
      code: 422,
    });

    return false;
  }

  if (email.length != 0 && (!email.includes('@') || !email.includes('.'))) {
    console.log('Неверный формат email: ' + email);

    res.status(422).json({
      message: 'Неверный формат email',
      code: 422,
    });

    return false;
  }

  return true;
}

export function checkName(name, res) {
  if (!name) {
    console.log('Пустое поле name');

    res.status(422).json({
      message: 'Пустое поле name',
      code: 422,
    });

    return false;
  }

  if (name.length < 6) {
    console.log('Слишком короткое имя: ' + name);

    res.status(422).json({
      message: 'Слишком короткое имя',
      code: 422,
    });

    return false;
  }

  return true;
}

export function checkPhone(phone, res) {
  if (!phone) {
    console.log('Пустое поле phone');

    res.status(422).json({
      message: 'Пустое поле phone',
      code: 422,
    });

    return false;
  }

  if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i.test(phone)) {
    console.log('Неправильный формат номера: ' + phone);

    res.status(422).json({
      message: 'Неправильный формат номера',
      code: 422,
    });

    return false;
  }

  return true;
}

export function checkMessage(message, res) {
  if (typeof message != 'string') {
    console.log('Неверный тип сообщения');

    res.status(422).json({
      message: 'Неверный тип сообщения',
      code: 422,
    });

    return false;
  }

  if (message.length > 300) {
    console.log('Слишком длинное сообщение');

    res.status(422).json({
      message: 'Слишком длинное сообщение',
      code: 422,
    });

    return false;
  }

  return true;
}
