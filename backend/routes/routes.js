const router = require('express').Router();
const requireLogin = require('../middleware/verifyToken')

const HomeController = require('../controllers/HomeController')
const AuthController = require('../controllers/AuthController')
// const FournisseurController = require('../controllers/FournisseurController')



router.post('/login', AuthController.login)
// router.post('/register', AuthController.register)

router.get('/test', HomeController.index)

router.get('/getAuth',requireLogin, AuthController.getAuth)
router.get('/getMenu',requireLogin, AuthController.getMenu)

// router.get('/getFournisseurs',requireLogin, FournisseurController.getFournisseurs)
// router.get('/getFournisseurDetails',requireLogin, FournisseurController.getFournisseurDetails)

router.get('/',requireLogin,async (req, res)=>{
    return res.send(req.user);
})

module.exports = router;