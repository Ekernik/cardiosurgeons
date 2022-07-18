import fs from 'fs';
import path from 'path';

function isSpam(id) {
  const data = readFile('appointments.json');

  let ipCount = 0;

  data.forEach(appointment => {
    appointment.id === id ? ipCount++ : null;
  });

  return ipCount > 3;
}

function readFile(filename) {
  const filePath = path.join(process.cwd(), 'data', filename);
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}

function updateDataFile(filename, newObject) {
  const filePath = path.join(process.cwd(), 'data', filename);
  const data = readFile(filename);
  data.push(newObject);
  fs.writeFileSync(filePath, JSON.stringify(data));
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
      linkOrigin: linkOrigin,
    };

    if (isSpam(id)) {
      updateDataFile('appointments-spam.json', {
        ...newAppointment,
        reason: 'Слишком много запросов за сутки с одного IP',
      });

      return res.status(429).json({
        message: 'Слишком много запросов за сутки с Вашего IP',
        code: 429,
      });
    }

    updateDataFile('appointments.json', newAppointment);

    return res
      .status(201)
      .json({ message: 'Успешная запись на прием', code: 201 });
  } else {
    return res.status(200).json({ message: 'Form submitted' });
  }
}

export default makeAppointment;
