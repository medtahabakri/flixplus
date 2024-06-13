const { first, select } = require("../config/db");
const Categorie = require("../models/Categorie");
const ContentMedia = require("../models/ContentMedia");
const Content = require("../models/Content");
var fs = require('fs');
const ContentCategory = require("../models/ContentCategory");

exports.addMovie = async (req, res) => {
   try {

    //   let result = await Fournisseur.select();
      let movieID = await Content().insert({
         label: req.body.title,
         description: req.body.description
      })
      movieID = movieID.shift()
      let cover = req.files.filter((file)=>{
         return file.fieldname == 'file'
      });

      if(cover.length > 0){
         cover = cover[0];
         let asset_path = '/assets/movies/' + cover.originalname;
         var target_path = './public' + asset_path;
         fs.rename(cover.path, target_path, function(err) {
            if (err) throw err;
            fs.unlink(cover.path, function() {
                  if (err) throw err;
                  Content().where({id: movieID}).update({
                     image : req.protocol + '://' + req.get('host') +asset_path
                  }).then(()=>{})
            });
         });
      }

      let categories = await Categorie().select('id').whereIn('alias',req.body.categories.split(','));
      categories = categories.map((ite)=>{
         return ite.id;
      })

      categories.forEach(categ => {
         ContentCategory().insert({
            category: categ,
            content: movieID
         }).then(()=>{})
      });

      let content_files = req.files.filter((file)=>{
         return file.fieldname == 'contents_files[]'
      });

      content_files.forEach((element,index) => {
         let asset_path = '/assets/contents/' + element.originalname;
         var target_path = './public' + asset_path;
         fs.rename(element.path, target_path, function(err) {
            if (err) throw err;
            fs.unlink(element.path, function() {
                  if (err) throw err;
                  ContentMedia().insert({
                     content: movieID ,
                     label: req.body.contents_labels[index] ,
                     file : req.protocol + '://' + req.get('host') +asset_path
                  }).then(()=>{})
            });
         });
         
      });

    return res.json('ok');
   } catch (err) {
      return res.status(500).send(err.message);
   }
};

exports.editMovie = async (req, res) => {
   try {

    //   let result = await Fournisseur.select();
    let movieID = req.body.id
      await Content().where({id:movieID}).update({
         label: req.body.title,
         description: req.body.description
      });

      let categories = await Categorie().select('id').whereIn('alias',req.body.categories.split(','));
      categories = categories.map((ite)=>{
         return ite.id;
      })

      await ContentCategory().where({
         content: movieID
      }).del();

      categories.forEach(categ => {
         ContentCategory().insert({
            category: categ,
            content: movieID
         }).then(()=>{})
      });

    return res.json('ok');
   } catch (err) {
      return res.status(500).send(err.message);
   }
};

exports.getMovies = async (req, res) => {
   try {
      let result = [];
      let movies = await Content().select();
      for (let index = 0; index < movies.length; index++) {
         let movie = movies[index];

         let categories = await Categorie()
            .join('content_categories', 'categories.id', '=', 'content_categories.category')
            .select('categories.alias')
            .where({"content_categories.content" : movie.id});

         movie.categories = categories.map((categ) => categ.alias)

         let contents = await ContentMedia()
            .select()
            .where({content : movie.id});

         movie.contents = contents

         result.push(movie);
      }

      return res.json(result);
   } catch (err) {
      return res.status(500).send(err.message);
   }
};
