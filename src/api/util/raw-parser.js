import logger from "../../logger/index.js";

export default async function rawParser(req, res, next) {
  let rawData = "";
  req.on("data", function (chunk) {
    rawData += chunk;
  });
  req.on("end", function () {
    logger.info(`Received raw request: ${rawData}`);
  });
  next();
}
