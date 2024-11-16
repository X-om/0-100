const jwt = require('jsonwebtoken');
const jwtPassword = "OM@Asmita2208/2506"; 

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  try {
    const decoded = jwt.verify(token, jwtPassword);
    req.user = decoded;  
    console.log(req.user);
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = { authMiddleware };
