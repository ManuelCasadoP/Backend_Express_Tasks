export function errorsHandler (error, request, response, next) {
    if (response.headersSent) {
        return next(error);
    }
    console.error("Main error handler:", error.stack);
    response.status(500).send(`<b>Algo ha funcionado mal...<br>${error}</b>`);
};