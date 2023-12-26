const express=require('express')
const { userRegister, userLogin } = require('../controllers/user.controller')
const { createNotice, getAllNotices, updateNotices, deleteNotices } = require('../controllers/notice.controller')
const { userAuthenticationMiddleware } = require('../middlewares/userAuthentication.middleware')

const router=express.Router()

// user routes
router.post('/register',userRegister)
router.post('/login',userLogin)

// notice routes
router.post('/notice',userAuthenticationMiddleware,createNotice)
router.get('/notice',userAuthenticationMiddleware,getAllNotices)
router.put('/notice/:noticeId',userAuthenticationMiddleware,updateNotices)
router.delete('/notice/:noticeId',userAuthenticationMiddleware,deleteNotices)

module.exports= {router}