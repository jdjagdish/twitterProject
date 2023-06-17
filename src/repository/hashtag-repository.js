import Hashtag from "../models/hashtag.js";
import CrudRepository from "./crud-repository.js";

class HashtagRepository extends CrudRepository {

        constructor(){
            super(Hashtag)
        }


    async bulkCreate (data) {
        try{
             const tags = await Hashtag.insertMany(data);
             return tags;
        }
        catch(error) {
            console.log(error);
            throw error;
        }
    }

    //get by name
    async findByName(text)
    {
        try {
             let hashtag = await Hashtag.find({
                text:text
             });
             return hashtag;
        }
        catch(error) {
            console.log(error);
            throw error;
        }
    }

    async getHashtag(id)
    {
        try {
             let hashtag = await Hashtag.findById(id);
             return hashtag;
        }
        catch(error) {
            console.log(error);
            throw error;
        }
    }

    async deleteHashtag(data)
    {
        try {
             let hashtag = await Hashtag.deleteOne(data);
             return hashtag;
        }
        catch(error) {
            console.log(error);
            throw error;
        }
    }
}


export default HashtagRepository;