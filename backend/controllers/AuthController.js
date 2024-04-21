const User = require('../models/User')
const jwt = require('jsonwebtoken');
const joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');

const loginSchema = joi.object({
    email : joi.string().length(10).required(),
    password : joi.string().min(6).alphanum().required(),
})

const registerSchema = joi.object({
    phone : joi.string().length(10).required(),
    email : joi.string().email().required(),
    nom : joi.string().min(4).required(),
    prenom : joi.string().required(),
    password : joi.string().min(6).alphanum().required(),
})

exports.login = async (req, res) => {
    console.log(req.body.email);
    
    const {error} = loginSchema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    try {
        let result = await User.select(['id','nom','prenom' , 'password' ,'phone','email','enabled']).where({email: req.body.email}).then((row) => { return row[0] });
        if(result&&result.enabled){
           const passwordValid = await bcrypt.compare(req.body.password,result.password);
           console.log(req.body.password , result.password);
            if(!passwordValid) return res.status(400).send('password incorrect');

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

// exports.register = async (req, res) => {
//     console.log(req.body);
    
//     const {error} = registerSchema.validate(req.body);
//     if(error){
//         return res.status(400).send(error.details[0].message);
//     }else{
//         try {
//             let phone_exists = await User.select().where({phone: req.body.phone}).then((row) => { return row[0] });

//             if(phone_exists){
//                 return res.status(404).send('Phone Number already exists !');
//             }else{
//                 let email_exists = await User.select().where({email: req.body.email}).then((row) => { return row[0] });
//                 if(email_exists){
//                     return res.status(404).send('Email already exists !');
//                 }else{
//                     const salt = await bcrypt.genSalt(8);
//                     const hashedPass = await bcrypt.hash(req.body.password, salt);
                    
//                     let returned_id = await User.insert({
//                         nom: req.body.nom,
//                         prenom: req.body.prenom,
//                         phone: req.body.phone,
//                         email: req.body.email,
//                         password: hashedPass,
//                         enabled: 1,
//                     })
            
//                     response = { hash : hashedPass , id : returned_id};
//                     return res.json(response);
//                 }

//             }
    
//         } catch (err) {
//             res.status(500).send(err.message);
//         }
//     }
// };

exports.getAuth = async (req, res) => {
    try{
        // console.log(req.user)
        const token = req.header('auth-token');
        // const verified = jwt.verify(token , process.env.JWT_TOKEN);
        // const usr = await User.select().where({id: verified._id}).then((row) => { return row[0] });
        return res.json({
            token: token,
            user: req.user
        });
    }catch(err){
        return res.status(400).send('Invalide Token');
    }

};
exports.getMenu = async (req, res) => {
    try{
        // console.log(req.user)
        // const token = req.header('auth-token');
        // const verified = jwt.verify(token , process.env.JWT_TOKEN);
        // const usr = await User.select().where({id: verified._id}).then((row) => { return row[0] });
        return res.json([
            { title: 'Dashbord', url: '/index/dashboard', icon: 'grid' },
            { title: 'Commandes', url: '/index/folder/favorites', icon: 'heart',disabled: true },
            { title: 'Batches', url: '/index/batches', icon: 'file-tray-stacked' },
            { title: 'Products', url: '/index/products', icon: 'bag-handle' },
            { title: 'Suppliers', url: '/index/fournisseurs', icon: 'people-circle' },
          ]);
    }catch(err){
        return res.status(400).send('Invalide Token');
    }

};