const asyncHandler = async (requestHandler) => (req, res, next) => {
    
    return Promise.resolve(requestHandler(req, res, next).catch((err) => console.log(err)));


}

export { asyncHandler };