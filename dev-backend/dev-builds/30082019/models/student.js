var mongoose= require('mongoose');
var StudentSchema = new mongoose.Schema({
     firstname: String,
     lastname: String,
     emailid: String, 
     phonenumber: Number,
     username: String
})
module.exports=mongoose.model("Student",StudentSchema);