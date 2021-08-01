const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

function auth(req, res, next) {
    try {
        const token = req.header.authorization.split(" ")[1];
        const decodeToken = jwt.verify(token, JWT_SECRET);
        req.userData = decodeToken;
        next();
    } catch(e) {
        return res.status(401).json({
            message: "Invalid or Expired Token ...",
            error : e
        });    
    }
}

module.exports = {
    auth : auth
}