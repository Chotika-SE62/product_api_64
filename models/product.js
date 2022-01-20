//เซ็ตโครงสร้างเบื้องต้น
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const productSchema = new Schema({
    name: String,   //ชื่อของคอลัมภ์และประเภท
    category: String,
    price: Number,
    tags: [String], //เก็บได้หลายค่า
    imageURL: String,
});
const ProductModel = mongoose.model("Product", productSchema);  //ตารางในมองโก
export default ProductModel;
