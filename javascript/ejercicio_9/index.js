const winston = require('winston');

const logger = winston.createLogger({
    level: 'silly',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    ],
});

logger.info("Hola esto es un mensaje informativo")
logger.debug("Esto es un mensaje de debug")
logger.warn("Esto es un mensaje de advertencia")
logger.error("Esto es un error")

function showError() {
    throw new Error("showError function");
}

try {
    showError();
} catch (e) {
    logger.log("error", e.toString());
}
