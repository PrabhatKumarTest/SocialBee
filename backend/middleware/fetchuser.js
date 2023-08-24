const jwt = require("jsonwebtoken");

const fetchUser = async (req, res, next) => {
    try {
        const token = await req.header("jwtToken");
        if (!token) {
          return res.status(401).send("User not found");
        }
      
          const userFromToken = await jwt.verify(token, process.env.JWT_PVT_KEY);
          req.user = await userFromToken.user;
          next();
        
    } catch (error) {
        res.status(500).send(error)
    }
};

module.exports = fetchUser;
