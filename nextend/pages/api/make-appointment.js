import {
  checkEmail,
  checkIfSpam,
  checkName,
  checkPhone,
  checkMessage,
} from '../../helpers/api/formValidation';

import {
  getReadableDate,
  getReadableOrigin,
} from '../../helpers/api/transformData';

import { updateDataFile } from '../../helpers/api/fileActions';

async function sendTelegram(event) {
  const API_KEY = process.env.TELEGRAM_KEY;
  const NIKITA_ID = process.env.NIKITA_ID;
  const MARIANNA_ID = process.env.MARIANNA_ID;
  const text = `
Дата:      ${getReadableDate(event.date)}%0A
Откуда:        ${event.linkOrigin}%0A
Имя:             ${event.name}%0A
Телефон:    ${event.phone}%0A
Email:           ${event.email}%0A
Сообщение:%0A
    ${event.message}`;

  const NIKITA_LINK = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${NIKITA_ID}&text=${text}`;
  const MARIANNA_LINK = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${MARIANNA_ID}&text=${text}`;
  await fetch(NIKITA_LINK).catch(err => console.log(err));
  // await fetch(MARIANNA_LINK).catch(err => console.log(err));
}

function makeAppointment(req, res) {
  if (req.method === 'POST') {
    const ip = req.socket.remoteAddress;
    const fullDate = new Date();
    const id = `${fullDate.getFullYear()}-${fullDate.getMonth()}-${fullDate.getDate()}===${ip}`;
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    const linkOrigin = req.body.linkOrigin;

    const newAppointment = {
      id: id,
      date: fullDate.toISOString(),
      name: name,
      email: email,
      phone: phone,
      message: message,
      ip: ip,
      linkOrigin: getReadableOrigin(linkOrigin),
    };

    if (!checkEmail(email, res)) return;
    if (!checkName(name, res)) return;
    if (!checkPhone(phone, res)) return;
    if (!checkMessage(message, res)) return;
    if (!!checkIfSpam(id, res, newAppointment)) return;

    sendTelegram(newAppointment);
    updateDataFile('appointments.json', newAppointment);

    return res
      .status(201)
      .json({ message: 'Успешная запись на прием', code: 201 });
  }
  if (req.method === 'GET') {
    res.status(200).json({ code: 200, status: 'Connected' });
  }
}

export default makeAppointment;
