const User = require('../models/User')
const bcrypt = require('bcryptjs');

exports.editUser = async (req, res) => {
   try {
      let update_data = {
         nom: req.body.last_name,
         prenom: req.body.first_name,
         phone: req.body.phone,
         email: req.body.email
      }

      if(req.body.password){
         const salt = await bcrypt.genSalt(8);
         const hashedPass = await bcrypt.hash(req.body.password, salt);
         update_data.password = hashedPass
      }

      let returned_id = await User().where({id: req.body.user_id}).update(update_data)

      response = { id : returned_id};
      return res.json(response);
      
   } catch (err) {
      res.status(500).send(err.message);
   }
};

exports.addUser = async (req, res) => {
   try {
      const salt = await bcrypt.genSalt(8);
      const hashedPass = await bcrypt.hash(req.body.password, salt);

      let edit_user = req.body.edit_user

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
      
   } catch (err) {
      res.status(500).send(err.message);
   }
};

exports.getUsers = async (req, res) => {
   try {
      let users = await User().where({role_id : 2}).select()

      // response = { hash : hashedPass , id : returned_id};
      return res.json(users);
      
   } catch (err) {
      res.status(500).send(err.message);
   }
};


exports.deleteUser = async (req, res) => {
   try {
      let result = undefined;
      result = await User().where({id:req.body.id}).del();
      return res.json(result);
   } catch (err) {
      return res.status(500).send(err.message);
   }
};