import { getClient } from "../utils";

async function getFullJoinData(userId : number){
    const client = await getClient();
    const fullJoinQuery = 
    `SELECT users.id, users.email, todos.title, todos.description, todos.isDone 
        FROM users
        FULL JOIN todos ON users.id = todos.user_id
        WHERE users.id = $1`;
    const response = await client.query(fullJoinQuery,[userId]);
    console.log(response.rows);
} 


getFullJoinData(4);