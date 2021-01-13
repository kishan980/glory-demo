const mongoose  = require("mongoose");

const Schema = mongoose.Schema;
const moment = require('moment');

let categorySchema = new Schema({

        categoryId:{
            type:String,
            unique:true
        },
        categoryName:{
            type:String,
            required:true,
            default:''
        },
        date:{
            type:String,
            required:true,
            default: moment().format('MM-DD-YYYY')
        },
        created:{
            type:String, 
            // default:''
            // default: moment().format('L')+ "," + moment().format('hh:mm')
            default: moment().format('MM-DD-YYYY')
            
        },
        lastModified:{
            type:String,
            // default:Date.now
            default: moment().format('MM-DD-YYYY')
        }

})
mongoose.model('Category',categorySchema);