const pug = require('pug');
const post=require('../models/post/postModel')

async function getPosts(req,res){
   //Recupérer tous les posts dans myBlogdb et envoyer index.pug au client
}

async function getPost(req,res){
    //Recupérer un post definie par son _id dans myBlogdb et envoyer post.pug au client
}

async function addPost(req,res){
   //Créer un nouveau post dans myBlogdb et rediriger le client vers /
   let data=req.body;
    await post.create({
        titre:data.titre,
        auteur:data.auteur,
        resume:data.resume,
        contenu:data.contenu
    }).then((d)=>{
        res.send(d)
    })
}

async function editPost(req,res){
    //Recupérer un post definie par son _id et renvoyer au client editPost.pug avec les donnée de ce post
}
async function updatePost(req,res){
    //metre à jour un post et rediriger le client vers ce post
}

async function deletePost(req,res){
    //Suprimer un post et rediriger le client vers /
}

module.exports={getPosts,getPost,addPost,updatePost,editPost,deletePost}