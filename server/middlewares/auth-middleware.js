const ApiError = require("../exeptions/api-error");
const tokenService = require("../service/token-service");

module.exports = (req, res, next) => { 
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) {
      return next(ApiError.UnauthorisedError());
    }
    const accessToken = authorizationHeader.split(" ")[1];

    if (!accessToken) {
      return next(ApiError.UnauthorisedError());
    }
    const userData = tokenService.validateAccessToken(accessToken);

    if (!userData) {
      return next(ApiError.UnauthorisedError());
    }
    req.user = userData;
    next();
  } catch (e) {
    return next(ApiError.UnauthorisedError());
  }
};
