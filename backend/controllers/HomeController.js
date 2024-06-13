const User = require('../models/User')

exports.index = async (req, res) => {
    try {
       let result = await User().first();
       res.send(result||{msg:'test'});
    } catch (err) {
       res.status(500).send(err);
    }
  };