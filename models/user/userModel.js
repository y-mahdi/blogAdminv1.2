const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"this field is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"this field is required"],
        minLength:8,
        maxLength:20
    }
})
const user=mongoose.model('user',userSchema)
module.exports=user;