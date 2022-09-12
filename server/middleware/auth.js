const { verify } = require("jsonwebtoken");

const auth = (request, response, next) => {
  const { token } = request.cookies;
  verify(token, process.env.SECRET_KEY, (err, verifyCookies) => {
    if (err) response.status(401).redirect("/");
    request.id = verifyCookies.id;
    return next();
  });
};

module.exports = auth;
