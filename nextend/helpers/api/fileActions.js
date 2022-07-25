import fs from 'fs';
import path from 'path';

export function readFile(filename) {
  const filePath = path.join(process.cwd(), 'data', filename);
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
}

export function updateDataFile(filename, newObject) {
  const filePath = path.join(process.cwd(), 'data', filename);
  const data = readFile(filename);
  data.push(newObject);
  fs.writeFileSync(filePath, JSON.stringify(data));
}
