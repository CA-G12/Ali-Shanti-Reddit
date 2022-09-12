/* eslint-disable consistent-return */
const { verify } = require("jsonwebtoken");

const userData = (request, response) => {
  if (request.cookies.token) {
    const { token } = request.cookies;

    return verify(token, process.env.SECRET_KEY, (err, verifyCookies) => {
      if (err) return response.redirect("/");
      request.id = verifyCookies.id;
      response.json({
        id: verifyCookies.id,
        userName: request.cookies.userName,
      });
    });
  }
};

module.exports = userData;
