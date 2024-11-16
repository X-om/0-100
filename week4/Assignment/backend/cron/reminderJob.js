const Todo = require('/Users/om/Desktop/Desktop Files/0-100/week4/Assignment/backend/models/todoModel.js');
const { sendReminderEmail } = require('/Users/om/Desktop/Desktop Files/0-100/week4/Assignment/backend/services/emailService.js');

const checkReminder = async () => {
    try{
        const now = Date.now();
        const todos = await Todo.find({
                reminder : { $lte : now},
                completed : false
        });

        todos.forEach(async (todo) => {
            todo.completed = true;
            await todo.save();

            sendReminderEmail(todo.userId,todo);
        });

    } catch(error){
        console.log("error checking reminders ! : ",error);
    }
};

setInterval(checkReminder,1000);