export function getReadableDate(date) {
  const d = new Date(date);
  return `
      ${d.toLocaleDateString()}
      ${d.toLocaleTimeString()}
    `;
}

export function getReadableOrigin(link) {
  let return_string;
  if (link.includes('cherepovets')) return_string = 'Череповец';

  return (return_string += ` ${link.slice(-10)}`);
}
