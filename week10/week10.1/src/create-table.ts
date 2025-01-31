import { getClient } from "./utils";

async function createTable(){
    const client = await getClient();

    const createUsersQuery = `
        CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `;

    await client.query(createUsersQuery);

    const createTodoQuery = `
        CREATE TABLE IF NOT EXISTS Todos(
            id SERIAL PRIMARY KEY,
            todo TEXT NOT NULL,
            description TEXT,
            isDone BOOLEAN DEFAULT FALSE,
            user_id INTEGER REFERENCES users(id)
        );
    `;

    await client.query(createTodoQuery);

    console.log(`Table created successfully`);

}

createTable();