const Product = require('../models/Product');


class ProductController{
    async getProduct(req,res){
        try {
            const products=await Product.find({})
            res.json({success:true,products})
        } catch (e) {
            console.log(e);
            res.status(500)
                .json({success:false ,message:'Lỗi máy chủ nội bộ'})
        }
    }
    async getProductDetail(req,res){
        try {
            const product=await Product.findOne({_id:req.params.id})
            res.json({success:true,product})
        } catch (e) {
            console.log(e);
            res.status(500)
                .json({success:false ,message:'Lỗi máy chủ nội bộ'})
        }
    }
    async createProduct(req,res){
        const{nameCar,imgCarUrl,descriptionCar,sizeCar,weightCar,indexCar,costCar}=req.body;
        // [Valiodation] Làm bên font-end
        if(!nameCar)
            return res.status(400)
                        .json({success: false,message:'Tên của sản phẩm là bắt buộc'});
        try {
            const newProduct=new Product({
                nameCar,
                imgCarUrl:(imgCarUrl.startsWith('https://')?imgCarUrl:`https://${imgCarUrl}`),
                descriptionCar,
                sizeCar,
                weightCar,
                indexCar,
                costCar
            })
            await newProduct.save();
            res.json({success:true,message:'Chúc mừng bạn thêm thành công!',product:newProduct});
        } catch (e) {
            console.log(e);
            res.status(500)
                .json({success:false ,message:'Lỗi máy chủ nội bộ'})
        }
    }
    async updateProduct(req, res) {
        const{nameCar,imgCarUrl,descriptionCar,sizeCar,weightCar,indexCar,costCar}=req.body;
        if(!nameCar)
            return res.status(400)
                        .json({success:false,message:'Tên sản phẩm là bắt buộc'});
        try {
            let updateProduct={
                nameCar,
                imgCarUrl:(imgCarUrl.startsWith('https://')?imgCarUrl:`https://${imgCarUrl}`),
                descriptionCar,
                sizeCar,
                weightCar,
                indexCar,
                costCar
            }
            const productUpdateCondition={_id:req.params.id}
            updateProduct= await Product.findOneAndUpdate(productUpdateCondition,updateProduct);
            if(!updateProduct){
                return res.status(401).json({success:false, message:'Sản phẩm này không tồn tại'})
            }
            res.json({success:true, message:'Cập nhật thành công',product:updateProduct})
        } catch (e) {
            console.log(e);
            res.status(500)
                .json({success:false ,message:'Lỗi máy chủ nội bộ'})
        }
    }
    async deleteProduct(req, res){
        try {
            const productDeleteCondition={_id:req.params.id};
            const deleteProduct= await Product.findOneAndDelete(productDeleteCondition);
            if(!deleteProduct)
                return res.status(401)
                            .json({success:false,message:'Sản phẩm này không tồn tại'});
            res.json({success:true,message:'Xoá thành công',product:deleteProduct})
        } catch (e) {
            console.log(e);
            res.status(500)
                .json({success:false ,message:'Lỗi máy chủ nội bộ'})
        }
    }
    
}

module.exports=new ProductController();