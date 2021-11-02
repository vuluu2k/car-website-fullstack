const New = require('../models/News');

class NewsController {

    async getNew(req, res){
        try {
            const news= await New.find({});
            res.json({success: true, news})
        } catch (e) {
            console.log(e);
            res.status(500)
                .json({success: false,message:'Lỗi máy chủ nội bộ'});
        }
    }
}

module.exports = new NewsController();