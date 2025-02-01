import { getClient } from "../utils";

async function getInnerJoinData(userId : number){
    const client = await getClient();
    const innerJoinQuery = `
        SELECT users.id, users.email, todos.title, todos.description, todos.isDone 
        FROM users
        INNER JOIN todos ON users.id = todos.user_id 
        WHERE users.id = $1;
    `;

    const response = await client.query(innerJoinQuery,[userId]);
    console.log(response.rows);
}


getInnerJoinData(4);