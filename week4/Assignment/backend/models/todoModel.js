const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.ObjectId,
        ref : 'userInfo',
        required : true
    },
    title : {
        type : String,
        required : true
    },
    note : {
        type : String,
        required : true
    },
    reminder : {
        type : Date,
        required : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    createdAt : {
        type : String,
        default : function() {
            const currenDate = new Date();
            const day = String(currenDate.getDate()).padStart(2, '0'); // Note: Use getDate instead of getDay
            const month = String(currenDate.getMonth() + 1).padStart(2, '0');
            const year = String(currenDate.getFullYear());
            const hour = String(currenDate.getHours()).padStart(2, '0');
            const min = String(currenDate.getMinutes()).padStart(2, '0');
            return `${day}-${month}-${year} ${hour}:${min}`;
        }
    }
});


module.exports = mongoose.model('Todo',todoSchema)
