const jwt = require("jsonwebtoken");
//Model

const authenticate = async (req, res, next) => {
  const token = req.header("x-sh-auth");
  if (!token) {
    res.status(401).json({
      code: 401,
      message: "Access denied .... No token Provided",
    });
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.token = token;
      req.user = decoded;
     
      next();
    } catch (ex) {
      //console.log(ex,"Invalid Token")
      res.status(401).json({
        code: 401,
        message: "Invalid Token",
      });
    }
  }
};

module.exports = { authenticate };
