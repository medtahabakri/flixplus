const User = require('../models/User')
const Role = require('../models/Role')
const jwt = require('jsonwebtoken');
const joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');

const loginSchema = joi.object({
    email : joi.string().required(),
    password : joi.string().min(6).required(),
})

const registerSchema = joi.object({
    edit_user : joi.optional(),
    phone : joi.string().length(10).required(),
    email : joi.string().email().required(),
    first_name : joi.string().min(4).required(),
    last_name : joi.string().required(),
    password : joi.string().min(6).required(),
    confirm_password : joi.string().min(6).required(),
})

exports.register = async (req, res) => {
    console.log(req.body);
    
    const {error} = registerSchema.validate(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }else{
        try {
            if(req.body.edit_user){
                const salt = await bcrypt.genSalt(8);
                const hashedPass = await bcrypt.hash(req.body.password, salt);
                
                let resp = await User().where({id:req.body.edit_user}).update({
                    role_id : 2,
                    nom: req.body.last_name,
                    prenom: req.body.first_name,
                    phone: req.body.phone,
                    email: req.body.email,
                    password: hashedPass,
                    enabled: 1,
                    birth_day: new Date(),
                });
                response = { hash : hashedPass , id : resp};
                return res.json(response);
            }else{
                let phone_exists = await User().select().where({phone: req.body.phone});
                if(phone_exists.length > 0){
                    return res.status(404).send('Phone Number already exists !');
                }else{
                    let email_exists = await User().select().where({email: req.body.email});
                    if(email_exists.length > 0){
                        return res.status(404).send('Email already exists !');
                    }else{
                        const salt = await bcrypt.genSalt(8);
                        const hashedPass = await bcrypt.hash(req.body.password, salt);
                        
                        let returned_id = await User().insert({
                            role_id : 2,
                            nom: req.body.last_name,
                            prenom: req.body.first_name,
                            phone: req.body.phone,
                            email: req.body.email,
                            password: hashedPass,
                            enabled: 1,
                            birth_day: new Date(),
                        })
                
                        response = { hash : hashedPass , id : returned_id};
                        return res.json(response);
                    }
                }
            }
    
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
};

exports.login = async (req, res) => {
    console.log(req.body.email);
    
    const {error} = loginSchema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    try {
        let result = await User().select(['id','role_id','nom','prenom' , 'password' ,'phone','email','enabled']).where({email: req.body.email}).then((row) => { return row[0] });
        if(result&&result.enabled){
           const passwordValid = await bcrypt.compare(req.body.password,result.password);
           console.log(req.body.password , result.password);
            if(!passwordValid) return res.status(400).send('password incorrect');

            let role = await Role().select(['id','label','alias']).where({id: result.role_id}).then((row) => { return row[0] });
            result.role = role;
            const token = jwt.sign({_id: result.id},process.env.JWT_TOKEN);
            const response = {
                token: token,
                user: result
            };
            return res.json(response);
       }else{
            return res.status(404).send('User Not Found');
       }
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getAuth = async (req, res) => {
    try{
        const token = req.header('Authorization');
        return res.json({
            token: token,
            user: req.user
        });
    }catch(err){
        return res.status(400).send('Invalide Token');
    }

};