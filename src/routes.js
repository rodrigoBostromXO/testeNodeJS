const routes = require('express').Router();
const multer = require('multer');
const userController = require('./app/controllers/UserController');
const chocolateController = require('./app/controllers/ChocolateController');
const validatorMid = require('./app/middlewares/validators');
const jwtMid = require('./app/middlewares/jwt');
const multerConfig = require('./config/multer');

routes.post('/users', validatorMid.userCreateValidator, userController.store);
routes.post('/login', userController.auth);

//routes.use(jwtMid);

routes.delete('/users/:id', userController.destroy);
routes.put('/users', validatorMid.userUpdateValidator, userController.update);
routes.get('/users', userController.index);
routes.get('/users/:id', userController.show);

// rotas para chocolate
routes.post('/',
  multer(multerConfig).single('file'),
  chocolateController.store
);

routes.get('/', chocolateController.index);
routes.get('/:id', chocolateController.show);
routes.put('/:id', chocolateController.update);
routes.delete('/:id', chocolateController.destroy);

module.exports = routes;
