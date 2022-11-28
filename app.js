const express=require('express')
const path=require('path')
const userRoutes=require('./routes/loginRoutes')
const postRoutes=require('./routes/postRoutes');
//requirements

const app=express();

//utiliser les middleware nissecaires
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))


//Definition des routes
app.use(userRoutes)
app.use(postRoutes)

module.exports=app;