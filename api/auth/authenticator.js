const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if(authorization){
        const secret = process.env.JWT_SECRET || 'This is a secret';

        jwt.verify(authorization, secret, (error, decodedToken) => {
            if(error){
                console.log(error);
                res.status(401).json({ message: 'Invalid Token' })
            }else{
                req.token = decodedToken;
                next();
            }
        })
    }else{
        res.status(400).json({ message: 'You shall not pass (JWT Middleware)' });
    }
}