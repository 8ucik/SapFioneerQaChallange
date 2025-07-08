import * as fs from 'fs';
import * as path from 'path';
import { flushLogs } from '../utilities/logger';

export default async () => {
  await flushLogs();
  const logDir = path.resolve(__dirname, '../logs');
  if (!fs.existsSync(logDir)) return;
  const files = fs.readdirSync(logDir).filter((f) => f.endsWith('.log'));

  if (files.length === 0) return;
  const endTimestamp = new Date()
    .toISOString()
    .replace(/T/, '_')
    .replace(/:/g, '-')
    .replace(/\..+/, '');

  const combinedFilename = path.join(logDir, `TestRun_FinalReport_${endTimestamp}.log`);
  let combinedContent = '';

  for (const file of files) {
    const filePath = path.join(logDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    combinedContent += content + '\n';
  }

  fs.writeFileSync(combinedFilename, combinedContent);
  for (const file of files) {
    const filePath = path.join(logDir, file);
    fs.unlinkSync(filePath);
  }
};
