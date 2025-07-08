import { createLogger, format, transports } from 'winston';
import * as fs from 'fs';
import * as path from 'path';

const timestamp = new Date().toISOString().replace(/T/, '_').replace(/:/g, '-').replace(/\..+/, '');

const logDir = 'logs';
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logFormat = format.printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
});

export const logger = createLogger({
  level: 'debug',
  format: format.combine(format.timestamp({ format: 'YYYY-MM-DD-HH:mm:ss' }), logFormat),
  transports: [
    new transports.Console({ level: 'debug' }),
    new transports.File({
      filename: path.join(logDir, `${timestamp}_debug.log`),
      level: 'debug',
    }),
    new transports.File({
      filename: path.join(logDir, `${timestamp}_info.log`),
      level: 'info',
    }),
    new transports.File({
      filename: path.join(logDir, `${timestamp}_warn.log`),
      level: 'warn',
    }),
  ],
});

export default logger;
