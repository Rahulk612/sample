const mongoose=require("mongoose")

const productsSchema=new mongoose.Schema({
  title:{type:String,required:true},
  company:{type:String,required:true},
  imgurl:{type:String,required:true},
  location:[{type:String,required:true}],
  startDate:{type:String,required:true},
  CTC:{type:String,required:true},
  applyBy:{type:String,required:true},
  jobType:[{type:String,required:true}],
  applicantsCount:{type:Number,required:true},
  aboutCompany:{type:String,required:true},
  keyResponsibility:[{type:String,required:true}],
  skillsRequired:[{type:String,required:true}],
  category:[{type:String,required:true}],
  whoeCanApply:[{type:String,required:true}],
  salery:{type:String,required:true},
  noOfOpenings:{type:Number,required:true},
},{
  versionKey:false,
  timestamps:true
})

module.exports=mongoose.model("product",productsSchema)