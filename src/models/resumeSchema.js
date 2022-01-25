const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    name :{type:String, trim: true},
    mobile_no:{type:Number, trim: true},
    email:{type:String, trim: true},
    degree:{type:String, trim: true},
    degree_passing_year:{type:String, trim: true},
    degree_percentage:{type:Number, trim: true},
    inter:{type:String, required:false},
    inter_passing_year:{type:String, required:false},
    inter_percentage:{type:Number, required:false},
    secondary:{type:String, required:false},
    secondary_passing_year:{type:String, required:false},
    secondary_percentage:{type:Number, required:false},
    resume_file:{type:String, trim: true}
},
    {
        versionKey:false,
        timestamps:true
    }
)

const Resume = mongoose.model("resume", resumeSchema);

module.exports = Resume;