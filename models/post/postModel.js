const { Timestamp } = require("mongodb")
const mongoose=require("mongoose")

// definition d'un schèma
const postSchema=mongoose.Schema({
    titre: {
        type:String,
        required:[true,"this field is required"],
        unique:true
    },
    auteur:{
        type:String
    },
    resume:{
        type:String,
        required:[true,"this field is required"],
        maxLength:100
    }, 

    content: {
        type:String,
        required:[true,"this field is required"],
        minLength:100
    }
}, {timestamps:true})

//créer et exporter un Modéle Post
const post=mongoose.model("post",postSchema);
module.exports=post;