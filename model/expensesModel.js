const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const moment   = require('moment');
const expensesSchema = new Schema({

        expensesId:{
            type:String,
            unique:true
        },
        category:{
            type:String,
            required:true,
            required:true,
            default:'' 
        },
        date:{
            type:String,
            required:true,
            required:true,
            default: moment().format('MM-DD-YYYY')
        },
        remark:{
            type:String,
            required:true,
            required:true
        },
        amount:{
            type:Number,
            required:true,
            required:true
        },
        created:{
            type:Date,
            default:Date.now
        },
        lastModefired:{
            type:Date,
            default:Date.now          
        }

})
mongoose.model('expenses',expensesSchema);