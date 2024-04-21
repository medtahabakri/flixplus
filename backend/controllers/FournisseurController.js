// const Fournisseur = require('../models/Fournisseur')
// const FournisseurContact = require('../models/FournisseurContact')
// const FournisseurProduit = require('../models/FournisseurProduit')

// exports.getFournisseurs = async (req, res) => {
//    try {
//       let result = await Fournisseur.select();

//       if(!Array.isArray(result)){
//          result = [result];
//       }

//       res.json(result);
//    } catch (err) {
//       res.status(500).send(err.message);
//    }
// };

// exports.getFournisseurDetails = async (req, res) => {
//    try {
//       const fournisseur = (await Fournisseur.where('id', '=', req.query.id).select())[0];
//       const contacts = await FournisseurContact.where('fournisseur', '=', fournisseur.id).select();
//       const produits = await FournisseurProduit.where('fournisseur', '=', fournisseur.id).select();

//       const result = {
//          fournisseur: fournisseur,
//          contacts: contacts,
//          produits: produits
//       };

//       res.json(result);
//    } catch (err) {
//       res.status(500).send(err.message);
//    }
// };