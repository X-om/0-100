import { getClient } from "../utils";

async function getRightJoinData(userId : number){
    const client = await getClient();
    const leftJoinQuery = `
        SELECT users.id, users.email, todos.title, todos.description, todos.isDone 
        FROM users
        RIGHT JOIN todos ON users.id = todos.user_id 
        WHERE users.id = $1;
    `;
    const response = await client.query(leftJoinQuery,[userId]);
    console.log(response.rows);
}


getRightJoinData(4);