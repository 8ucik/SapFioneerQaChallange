import { flushLogs } from '../utilities/logger';
import * as fs from 'fs';
import * as path from 'path';

export default async () => {
  await flushLogs();

  const logDir = path.resolve(__dirname, '../logs');
  if (!fs.existsSync(logDir)) return;

  const files = fs.readdirSync(logDir);

  for (const file of files) {
    const filePath = path.join(logDir, file);
    const stats = fs.statSync(filePath);
    if (stats.size === 0) {
      fs.unlinkSync(filePath);
    }
  }
};
