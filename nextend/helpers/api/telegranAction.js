import { getReadableDate } from './transformData';

const API_KEY = process.env.TELEGRAM_KEY;
const NIKITA_ID = process.env.NIKITA_ID;
const MARIANNA_ID = process.env.MARIANNA_ID;

const NIKITA_LINK = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${NIKITA_ID}`;
const MARIANNA_LINK = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${MARIANNA_ID}`;

export async function sendTelegram(event) {
  const text = `
Дата:      ${getReadableDate(event.date)}%0A
Откуда:        ${event.linkOrigin}%0A
Имя:             ${event.name}%0A
Телефон:    ${event.phone}%0A
Email:           ${event.email}%0A
Сообщение:%0A
    ${event.message}`;

  await fetch(NIKITA_LINK + `&text=${text}`).catch(err => console.log(err));
  await fetch(MARIANNA_LINK + `&text=${text}`).catch(err => console.log(err));
}

export async function sendSpamTelegram(event) {
  const text = `
===== SPAM START ===== %0A
"id": ${event.id} %0A
"date": ${event.date} %0A
"name": ${event.name} %0A
"email": ${event.email} %0A
"phone": ${event.phone} %0A
"message": ${event.message} %0A
"ip": ${event.ip} %0A
"linkOrigin": ${event.linkOrigin} %0A
"reason": ${event.reason} %0A
"code": ${event.code} %0A
===== SPAM OVER =====`;

  await fetch(NIKITA_LINK + `&text=${text}`).catch(err => console.log(err));
}
