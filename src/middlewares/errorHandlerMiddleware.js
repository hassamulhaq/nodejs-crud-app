
const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err.stack)
    res.status(500).json({
        status: 500,
        message: 'Something went wrong',
        errors: err.message
    })
};

export default errorHandlerMiddleware;