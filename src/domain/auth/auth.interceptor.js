const authService = require("./auth.service");

const authIntecept = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send("No token provided!");
  }

  const authorizationHeaderValue = authorization.split(" ");
  const [bearer, token] = authorizationHeaderValue;
  if (!/Bearer/i.test(bearer)) {
    return res.status(401).send("Token malformed!");
  }

  if (!authService.isValidToken(token)) {
    return res.status(401).send("Invalid token!");
  }
  next();
};

module.exports = authIntecept;
