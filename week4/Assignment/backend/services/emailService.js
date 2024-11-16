const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

const User = require('/Users/om/Desktop/Desktop Files/0-100/week4/Assignment/backend/models/userModel.js');


const transporter = nodemailer.createTransport({
    service : 'Gmail',
    auth : {
        user : 'omargade1234@gmail.com',
        pass : 'iflw cegs gmfo zdwo'
    }
});


const sendReminderEmail = async (userId,todo)=>{
    try{

        const user = await User.findById(userId);
        if(!user){
            console.log('user not found : ',userId);
            return;
        }
        const userEmail = user.email;

        const mailOption = {
            from : 'omargade1234@gmail.com',
            to : userEmail,
            subject : 'Reminder for your Todo',
            text : `Hi ${user.fName},\n\nThis is a reminder for your todo: "${todo.title}".\nNote: ${todo.note}\n\nBest,\nYour Todo App` 
        };

        await transporter.sendMail(mailOption);
        console.log('Reminder email sent to:', userEmail);
    } catch(error){
        console.error('Error sending reminder email:', error);
    }
}

module.exports = { sendReminderEmail };