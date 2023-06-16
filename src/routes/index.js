import express from "express";
import {createTweet}  from "../controllers/tweet-controller.js";

const router = express.Router()


router.post('/tweet',createTweet)



export default router;