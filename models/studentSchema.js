import mongoose from "mongoose";
const StudentSchema =new mongoose.Schema({
    'name':{
        type:String,
        required:true,
    },
    'city':{
        type:String,
        required:true,
    },
    'email':{
        type:String,
        required:true,
    },
    'contact':{
        type:String,
        required:true,
    }
});
const StudentModel = new mongoose.model('crud',StudentSchema);
export default StudentModel;