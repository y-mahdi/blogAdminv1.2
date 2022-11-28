const pug = require('pug');
const post=require('../models/post/postModel')

async function getPosts(req,res){
   let data;
   await post.find().then((d)=>{
        data=d;
   })
   res.render("index",{data})
}

async function getPost(req,res){
    //Recupérer un post definie par son _id dans myBlogdb et envoyer post.pug au client
}

async function addPost(req,res){
   //Créer un nouveau post dans myBlogdb et rediriger le client vers /
   let data=req.body;
   console.log(req.body)
   if(data.auteur!="" || data.resume!="" || data.contenu!="" || data.titre!=""){
        await post.create({
            titre:data.titre,
            auteur:data.auteur,
            resume:data.resume,
            contenu:data.contenu
        }).then(()=>{
            res.redirect('/')
        }).catch((e)=>{
            res.end(e)
        })
    }
    else{
        res.end("incomplete infos")
    }
}

async function editPost(req,res){
    //Recupérer un post definie par son _id et renvoyer au client editPost.pug avec les donnée de ce post
    if(req.params.id){

    }
    else{
        let method='post'
        res.render("editPost",{method})
    }
}
async function updatePost(req,res){
    //metre à jour un post et rediriger le client vers ce post
}

async function deletePost(req,res){
    if(req.params.id){
        await post.findByIdAndDelete(req.params.id).then(()=>{
            res.redirect('/')
        }).catch((e)=>{
            res.end(e)
        })
    }
    else{
        res.end("not found")
    }
}

module.exports={getPosts,getPost,addPost,updatePost,editPost,deletePost}