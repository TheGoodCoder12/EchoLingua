const router=require('express').Router()
const translateLogic=require('../controllers/translateLogic')

router.post('/translate', translateLogic.translateText)

module.exports=router