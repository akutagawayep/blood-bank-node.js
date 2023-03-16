const jwt = require("jsonwebtoken");
const TokenModel = require("../models/token-model");
const tokenModel = require("../models/token-model");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, `${process.env.JWT_ACCESS_TOKEN}`, {
      expiresIn: "20m",
    });
    const refreshToken = jwt.sign(payload, `${process.env.JWT_REFRESH_TOKEN}`, {
      expiresIn: "30d",
    });

    return { accessToken, refreshToken };
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, `${process.env.JWT_ACCESS_TOKEN}`);
      return userData; 
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, `${process.env.JWT_REFRESH_TOKEN}`);
      return userData;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await TokenModel.findOne({ user: userId });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }

    const token = await TokenModel.create({ user: userId, refreshToken });

    return token;
  }

  async removeToken(refreshToken) {
    const tokenData = await tokenModel.deleteOne({ refreshToken });
    return tokenData;
  }

  async findToken(refreshToken) {
    const tokenData = await tokenModel.findOne({ refreshToken });
    return tokenData;
  }
}

module.exports = new TokenService();
