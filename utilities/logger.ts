import { createLogger, format, transports } from 'winston';
import * as fs from 'fs';
import * as path from 'path';

const logDir = 'logs';
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const timestamp = new Date().toISOString().replace(/T/, '_').replace(/:/g, '-').replace(/\..+/, '');
const logFormat = format.printf(({ level, message, timestamp }) => {
  return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
});

const logger = createLogger({
  level: 'debug',
  exitOnError: false,
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format((info) => {
      const allowedLevels = ['debug', 'info', 'warn'];
      return allowedLevels.includes(info.level) ? info : false;
    })(),
    logFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(logDir, `testRun_${timestamp}.log`),
    }),
  ],
});

export { logger };
export default logger;

/**
 * Gracefully flush and close all logger transports.
 * Used in globalSettings/globalTeardown.ts
 */
export async function flushLogs(): Promise<void> {
  return new Promise((resolve, reject) => {
    logger.on('finish', resolve);
    logger.on('error', reject);
    logger.end();
  });
}
