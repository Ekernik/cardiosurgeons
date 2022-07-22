export function getReadableDate(date) {
  const d = new Date(date);
  return `
      ${d.toLocaleDateString()}
      ${d.toLocaleTimeString()}
    `;
}

export function getReadableOrigin(link) {
  let return_string;
  if (link.length === 1) return 'Главная страница';
  if (link.includes('arzamas')) return_string = 'Арзамас';
  if (link.includes('bryansk')) return_string = 'Брянск';
  if (link.includes('cherepovets')) return_string = 'Череповец';
  if (link.includes('cherkessk')) return_string = 'Черкесск';
  if (link.includes('hasavyurt')) return_string = 'Хасавюрт';
  if (link.includes('kostroma')) return_string = 'Кострома';
  if (link.includes('lipeck')) return_string = 'Липецк';
  if (link.includes('nizhniy-novgorod')) return_string = 'Нижний Новгород';
  if (link.includes('saransk')) return_string = 'Саранск';
  if (link.includes('shahti')) return_string = 'Шахты';
  if (link.includes('sortavala')) return_string = 'Сортавала';
  if (link.includes('oskol')) return_string = 'Старый Оскол';
  if (link.includes('stavropol')) return_string = 'Ставрополь';
  if (link.includes('velikie_luki')) return_string = 'Великие Луки';
  if (link.includes('vladimir')) return_string = 'Владимир';
  if (link.includes('volhov')) return_string = 'Волхов';
  if (link.includes('zheleznogorsk')) return_string = 'Железногорск';

  return (return_string += ` ${link.slice(-10)}`);
}
