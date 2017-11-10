let mongoose=require('mongoose');
let Schema=mongoose.Schema;
let userSchema = new Schema({
    description:{type:String,required:true,maxLength:1000},
	title:{type:String,required:true,minLength:11},
    logo:{type:String,required:true},
    banner:{type:String, default:''},
	website:{type:String,required:true,pattern:"https?://....(?:\.[a-z].)"},
	createdat:{type:Date,required:true},
    country:{type:String,required:true},
    step:{type:Number,required:true,minLength:0},
    ceo:{type:String,required:true, minLength:6},
    city:{type:String, default:''},
    address:{type:String,required:true},
	card_number:{type:Number,required:true, minLength:16,maxLength:16},
	card_month:{type:Number,required:true, min:0,max:12},
	card_year:{type:Number,required:true,min:2017 ,max:2026},
	card_cvc:{type:Number,required:true,minLength:3,maxLength:3},
	create_at:{type:Date,default:Date.Now}
});
module.exports = mongoose.model('users',userSchema);