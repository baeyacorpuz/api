const router = require('express').Router();
const userController = require('../controller/userController');
const postController = require('../controller/postController')

//set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'API Works',
    message: 'Welcome to API'
  });
});

router.route('/user')
  .get(userController.index)
  .post(userController.add);

router.route('/user/:user_id')
  .get(userController.view)
  .patch(userController.update)
  .put(userController.update)
  .delete(userController.delete);

router.route('/post')
  .post(postController.add);

module.exports = router;