const express=require("express")
const {getPosts,getPost,addPost,updatePost,editPost,deletePost }=require("../controllers/postsController")

const router=express.Router();

// les routes post
router.post('/api/addpost',addPost)
router.post('/api/updatepost/:id',updatePost);
router.get('/api/deletepost/:id',deletePost);


router.get('/',getPosts)
router.get('/posts/edit',editPost);
router.get('/posts/edit/:id',editPost);
router.get('/post/:id',getPost)


module.exports=router