import LikeRepository from '../repository/like-repository.js'
import TweetRepository from '../repository/tweet-repository.js'

class LikeService {
    constructor() {
        this.likeRepository =new LikeRepository();
        this.tweetRepository =  new TweetRepository();
    }

    async toggleLike(modelId,modelType,userId) { 
        let likeable;
        if(modelType === 'Tweet') {
            likeable = await this.tweetRepository.getTweet(modelId)
        }
        else if(modelType === 'Comment') {
            //Todo
        }
        else{
            console.log("wrong modeltype")
        }
        const exists = await this.likeRepository.findByUserAndLikeable({
            user:userId,
            onModel: modelType,
            likeable:modelId
        })
        console.log("alreadypresent",exists)
        let isAdded;
        if(exists)
        {
            likeable.likes.pull(exists.id);
            await likeable.save();
            this.likeRepository.destroy(exists.id)
            isAdded =false;
        }
        else{
            const newLike = await this.likeRepository.create({
                user:userId,
                onModel: modelType,
                likeable:modelId 
            })
            likeable.likes.push(newLike);
            await likeable.save();
            isAdded =true;
        }
        console.log(isAdded)
        return isAdded;

    }
}


export default LikeService;