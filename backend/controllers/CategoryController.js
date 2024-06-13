const { where } = require("../config/db");
const Categorie = require("../models/Categorie");
const ContentCategory = require("../models/ContentCategory");

exports.addCategory = async (req, res) => {
   try {
    //   let result = await Fournisseur.select();
    let result = await Categorie().insert({
      label: req.body.label,
      alias: req.body.label.replace(' ','-').toLowerCase()
    },'*');

      return res.json(result);
   } catch (err) {
      return res.status(500).send(err.message);
   }
};

exports.getCategories = async (req, res) => {
   try {
      let result = await Categorie().select();

      return res.json(result);
   } catch (err) {
      return res.status(500).send(err.message);
   }
};

exports.deleteCategory = async (req, res) => {
   try {
      let result = undefined;
      let hasMovie = await ContentCategory().where({category: req.body.id}).first();
      console.log('====================================');
      console.log(hasMovie);
      console.log('====================================');
      if(!hasMovie){
         result = await Categorie().where({id:req.body.id}).del();
      }
      return res.json(result);
   } catch (err) {
      return res.status(500).send(err.message);
   }
};

exports.editCategory = async (req, res) => {
   try {
      let result = await Categorie().where({id:req.body.id}).update({
         label: req.body.label
      });

      return res.json(result);
   } catch (err) {
      return res.status(500).send(err.message);
   }
};