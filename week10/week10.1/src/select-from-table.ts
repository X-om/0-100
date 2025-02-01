
import { getClient } from "./utils";

async function getAllUsers(){
    const client = await getClient();
    const allUsersQuery = `SELECT * FROM users`;
    const response = await client.query(allUsersQuery);

    console.log("Users : ");
    for(let user of response.rows){
        console.log(`id = ${user.id}`);
        console.log(`email = ${user.email}`);
        console.log(`password = ${user.password}`);
        console.log();
        console.log();
    }
};

async function getUserWithSpecificId(id : number) {
    const client = await getClient();
    const getUserQuery = `SELECT * FROM users WHERE id = $1`;
    const response = await client.query(getUserQuery,[id]);

    console.log(`User details with id = ${id}`);
    console.log(`email = ${response.rows[0].email} password = ${response.rows[0].password}`);
    console.log();
    console.log();
}

async function getTodosOfUser(user_id : number) {
    const client = await getClient();
    const getTodoQuery = `SELECT * FROM Todos WHERE user_id = $1`;
    const response = await client.query(getTodoQuery,[user_id]);

    console.log('Users todo got with id : ');
    for(let todo of response.rows){
        console.log(todo);
        console.log();
        console.log();
    }

    console.log();
    console.log();

}




getAllUsers();
getUserWithSpecificId(1);
getTodosOfUser(2);


