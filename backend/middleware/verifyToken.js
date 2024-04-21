const jwt = require('jsonwebtoken');
const User = require('../models/User')

module.exports = async function(req, res, next){
    const token = req.header('auth-token');

    if(!token) return res.status(401).send('Access Denied');

    try{
        const verified = jwt.verify(token , process.env.JWT_TOKEN);

        const result = await User.select().where({id: verified._id}).then((row) => { return row[0] });

        if(!result)
        return res.status(401).send('Access Denied');

        req.user = result;

        return next();
    }catch(err){
        return res.status(400).send('Invalid Token');
    }

    return res.status(400).send('An Unexpected problem has acquired');
}