
class CommentController{
    // [Create]
    async createComment(req,res){
        res.json({message:'bình luận'})
    }
}

module.exports = new CommentController();