import express from "express"
import {connect} from "./config/database.js";
import router from "./routes/index.js";
import bodyParser from "body-parser";
import passport from "passport";
import { passportAuth } from "./middlewares/jwt-middleware.js";

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(passport.initialize());
passportAuth(passport)
app.use("/api",router)

app.listen(3000, async ()=> {
    console.log("server Started at 3000");
    // mongo db connection establishment
    connect();
     
    console.log("Mongo DB connected");


    // Tweet.create({
    //     content: "This is my first tweet",
    //     likes: 25,
    //     noOfRetweets: 5,
    //     comment: "This is my firts comment"
    // })

    // Hashtag.create({
    //     text: "travel",
    //     tweets: ['648583a1e1bdcba73b76c926']
    // })
    

    
    

})