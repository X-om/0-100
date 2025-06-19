import { getClient } from "./utils";




async function updateUserInfo(email : string, userId : number){
    if(email.length == 0){
        console.log("No field provided for updation");
        return;
    } 

    const client = await getClient();
    const updateQuery = `UPDATE users SET email = $1 WHERE id = $2`;
    const values = [email,userId];

    await client.query(updateQuery,values);
    console.log('updated successfully');

}

async function updatedUsersTodoInfo(todoId : number){
    const client = await getClient();
    const updateTodoQuery = `UPDATE Todos SET title = $1, description = $2, isDone = $3 WHERE id = $4`;
    const values = ['kiss','kiss Asmita', true, todoId];

    await client.query(updateTodoQuery,values);
    console.log('updated successfully');

}

updateUserInfo('asmita@gmail.com',1);
updatedUsersTodoInfo(1);
