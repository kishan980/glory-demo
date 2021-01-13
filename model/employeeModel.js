const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const Schema = mongoose.Schema,autoIncrement = require('mongoose-auto-increment');
// autoIncrement.initialize(mongoose.connection);
const moment = require('moment');
// mongoose.pluralize(null);
const time = require("./../lib/timeLib");

let emplyeeSchema = new Schema({

        employeeId:{
            // type:Number,
            type:String,
            unique:true
        },
        employeeFirstName:{
            type:String,
            required:true,
            default:''
        },
        employeeLastName:{
            type:String,
            required:true,
            default:''
        },
        employeeJoinDate:{
            type:String,
            required:true, 
            default: moment().format('MM-DD-YYYY')
        },
        employeeDateOfBirthday:{
            type:String, 
            required:true,
            default: moment().format('MM-DD-YYYY')
        },
        employeeDegree:{
            type:String,
            required:true,
            default:''
        },
        employeeAddress:{
            type:String,
            required:true,
            default:''
        },
        role:{
            type:String,
            required:true,
            default:''
        },
        employeeEmail:{
            type:String,
            required:true,
            default:''
        },
        employeePassword:{
            type: String,
            required:true,
        },
        employeeNumber:{
            type:Number,
            required:true,
            default:''
        },
        employeePhoto:{
            type:String,
            trim:true,
            default:''
        },
        created:{
            type:Date,
            default:Date.now
        },
        lastDateUpdate:{
            type:Date,
            default:Date.now
        }
})
    
// emplyeeSchema.plugin(autoIncrement.plugin, {
//     model: 'employee',
//     field: 'employeeId',
//     startAt: 1,
//     incrementBy: 1
// });

mongoose.model('employee', emplyeeSchema);