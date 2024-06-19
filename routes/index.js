const router = require('express').Router()
const {readCourse, showDetail, buyCourse, generateInvoice,} = require('../controllers/controller');


router.get("/courses", readCourse);
router.get("/courses/:id", showDetail);
router.get("/courses/:id/buy", buyCourse);
router.post("/courses/:id/generateInvoice", generateInvoice);

module.exports = router