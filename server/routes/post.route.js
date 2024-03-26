import express from "express";
import { getFeedPosts , getUserPosts , likePost} from "../controllers/post.controller.js"
import { verifyToken } from "../middleware/auth.middleware.js";

const router =express.Router();


// read routes
router.get("/",verifyToken,getFeedPosts)
router.get("/:userId/posts",verifyToken,getUserPosts)


// update routes
router.patch("/:id/like",verifyToken,likePost);
export default  router;
