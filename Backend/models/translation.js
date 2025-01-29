const mongoose=require('mongoose')
const translationSchema=new mongoose.Schema({
    originalText:{type:String, required:true},
    translatedText:{type:String, required:true},
    language:{type:String, required:true}
})

const Translation=mongoose.model('Translation', translationSchema)

module.exports=Translation