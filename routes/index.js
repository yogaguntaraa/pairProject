const router = require('express').Router();
const { readCourse, showDetail, buyCourse, generateInvoice, registerForm, postRegister } = require('../controllers/controller');

router.get("/register", registerForm);
router.post("/register", postRegister);
router.get("/courses", readCourse);
router.get("/courses/:id", showDetail);
router.get("/courses/:id/buy", buyCourse);
router.post("/courses/:id/generateInvoice", generateInvoice);

module.exports = router;
