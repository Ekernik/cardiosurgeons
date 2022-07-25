import {
  checkEmail,
  checkIfSpam,
  checkName,
  checkPhone,
  checkMessage,
} from '../../helpers/api/formValidation';

import { getReadableOrigin } from '../../helpers/api/transformData';

import { updateDataFile } from '../../helpers/api/fileActions';

import { sendTelegram } from '../../helpers/api/telegranAction';

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

    if (!checkEmail(newAppointment, res)) return;
    if (!checkName(newAppointment, res)) return;
    if (!checkPhone(newAppointment, res)) return;
    if (!checkMessage(newAppointment, res)) return;
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
