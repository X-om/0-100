import { getClient } from "./utils";


async function insertIntoTable(){
    const client = await getClient();

    // const userInsertQuery  = `INSERT INTO users (email,password) VALUES ($1, $2) RETURNING id`;
    // const userInputs = [`abhisheknaugan@gmail.com`,'Om@1032230472'];
    // const response = await client.query(userInsertQuery,userInputs);

    const todoInsertQuery = `INSERT INTO Todos (title, description, isDone, user_id) VALUES ($1, $2, $3, $4) RETURNING id`;
    const todoInput = ['give BJ','to om',false,2];
    await client.query(todoInsertQuery,todoInput);

    console.log('data inserted successfully');
}



insertIntoTable(); 