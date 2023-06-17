import LikeService from "../services/like-service.js";

const likeService = new LikeService();



export const toggleLike = async ( req,res ) => {
   
   try {
        const data = req.body;
        const response = await likeService.toggleLike(data.modelId,data.modelType,data.user)
        console.log(response)
        return res.status(201).json({
            success:true,
            message:"Successfully toggled a Like",
            data: response,
            err:{}
        });
   } catch (error) {
    return res.status(500).json({
        success:false,
        message:"Error Encountered in toggleing a Like",
        data: {},
        err:error
    });
   }
}
