const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const moment   = require('moment');

let attendanceSchema = new Schema({

    attendanceId:{
        type:String,
        required:true,
        default:''
    },
    employeeName:{
        type:String,
        required:true,
        default:''
        
    },
    startTime:{
        required:true,
        type:String,
        // default:Date.now,
        default:moment().format("LT")
    },
    endTime:{
        required:true,
        type:String,
        default:moment().format("LT")
    },
    Date:{
        required:true,
        type:String,
        // default:Date.now
        default:moment().format("MM-DD-YYYY")
        
    },
    attendanceStatus:{
        required:true,
        type:String,
        default:"absent"

    },
    created:{
        type:Date,
        default:Date.now
    },
    lastmodefied:{
        type:Date,
        default:Date.now
    }

})

mongoose.model('attendance', attendanceSchema);