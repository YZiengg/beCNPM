const mongoose=require('mongoose') 
const productSchema =new mongoose.Schema(
    {
        name:{type: String, required:true},
        image:{type: String, required:true, unique: true},
        type:{type: String, required:true},
        price:{type: Number, required:true},
        countInStock:{type: Number, required:true},
        rating:{type: Number, required:true},
        description: {type:String},
    },
    {
        timestamps:true
    }
)
const User=mongoose.model("Product", productSchema);
module.exports= User;
