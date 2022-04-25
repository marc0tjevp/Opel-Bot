import { createLogger, format, transports } from "winston";
const { combine, timestamp, colorize, printf } = format;

const customFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] [${level}] ${message}`;
});

const simpleLogger = () => {
  return createLogger({
    level: "info",
    format: combine(
      colorize(),
      timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      customFormat
    ),
    transports: [
      new transports.Console(),
      new transports.File({ filename: "info.log", level: "info" }),
    ],
  });
};

export default simpleLogger;
