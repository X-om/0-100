import { getClient } from "../utils";

async function getLeftJoinData(userId : number){
    const client = await getClient();
    const leftJoinQuery = `
        SELECT users.id, users.email, todos.title, todos.description, todos.isDone 
        FROM users
        LEFT JOIN todos ON users.id = todos.user_id 
        WHERE users.id = $1;
    `;
    const response = await client.query(leftJoinQuery,[userId]);
    console.log(response.rows);
}


getLeftJoinData(4);