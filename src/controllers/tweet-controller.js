import TweetService from "../services/tweet-service.js";
import upload from "../config/file-upload-s3.js";

const tweetService = new TweetService();


export const createTweet = async ( req,res ) => {
    
    const singleUploader = upload.single('image')
    try{

        singleUploader(req,res,async function(err,data){
            if(err){
                console.log(err)
            }
            console.log(req.file);
            const payload = {...req.body};
            payload.image = req.file.location;
            const response = await tweetService.create(payload);
            return res.status(201).json({
                success:true,
                message:"Successfully created a tweet",
                data: response,
                err:{}
            });
            
        })
        
        


        
    }
    catch(error) {
        return res.status(500).json({
            success:false,
            message:"Error Encountered in creating a tweet",
            data: {},
            err:error
        });
    }
}

export const getTweet = async (req,res) => {
    try {
        const response = await tweetService.getTweet(req.params.id)
      
        return res.status(201).json({
            success:true,
            message:"Successfully fetched a tweet",
            data: response,
            err:{}
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error Encountered in getting a tweet",
            data: {},
            err:error
        });
        
    }
}