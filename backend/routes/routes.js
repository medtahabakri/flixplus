const router = require('express').Router();
const requireLogin = require('../middleware/verifyToken')

const HomeController = require('../controllers/HomeController')
const AuthController = require('../controllers/AuthController');
const { addCategory,getCategories,deleteCategory,editCategory } = require('../controllers/CategoryController');
const { getMovies, addMovie,editMovie } = require('../controllers/MovieController');
const { editUser,getUsers, deleteUser } = require('../controllers/UserController');


router.post('/login', AuthController.login)
router.post('/register', AuthController.register)

router.get('/test', HomeController.index)

router.get('/getAuth',requireLogin, AuthController.getAuth)

router.get('/getCategories',requireLogin, getCategories)
router.post('/addCategory',requireLogin, addCategory)
router.post('/deleteCategory',requireLogin, deleteCategory)
router.post('/editCategory',requireLogin, editCategory)

router.get('/getMovies',requireLogin, getMovies)
router.post('/addMovie',requireLogin, addMovie)
router.post('/editMovie',requireLogin, editMovie)

router.post('/editUser',requireLogin, editUser)
router.post('/deleteUser',requireLogin, deleteUser)
router.get('/getUsers',requireLogin, getUsers)

router.get('/',requireLogin,async (req, res)=>{
    return res.send(req.user);
})

module.exports = router;