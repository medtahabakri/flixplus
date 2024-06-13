const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Role = require('../models/Role');

module.exports = async function(req, res, next){
    let bearertoken = req.header('Authorization');

    if(!bearertoken) return res.status(401).send('Access Denied');

    bearertoken = bearertoken.split(' ');

    if(bearertoken.length == 1) return res.status(401).send('Access Denied');

    const token = bearertoken[1];

    try{
        const verified = jwt.verify(token , process.env.JWT_TOKEN);

        const result = await User().select().where({id: verified._id}).then((row) => { return row[0] });

        if(!result)
        return res.status(401).send('Access Denied');

        let role = await Role().select(['id','label','alias']).where({id: result.role_id}).then((row) => { return row[0] });
        result.role = role;

        req.user = result;

        return next();
    }catch(err){
        return res.status(400).send(err.message);
    }

    return res.status(400).send('An Unexpected problem has acquired');
}