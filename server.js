//requirements
require('dotenv').config()
const app=require('./app')
const mongodb=require('mongoose')
const path=require('path')
//dfinition du moteur de template
app.set('view engine','pug')
app.set("views",path.join(__dirname,"views"))

// Etablire une connexion à la base de données
mongodb.connect(process.env.DB_URI,()=>{
    console.log("db connected")
})

//Démarage du serveur su le le port : PORT dans .env
app.listen(process.env.PORT ,()=>{
    console.log(`server is listening in ${process.env.PORT}`)
})
