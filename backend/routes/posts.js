import express from "express";
import { getFeedPosts, getUserPosts, likePost, getPosts, commentPost, getStories } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/stories", verifyToken, getStories);
router.get("/:userId/posts", verifyToken, getUserPosts);
router.get("/:str/search_posts", getPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);
router.patch("/:id/comment", verifyToken, commentPost);

export default router;
