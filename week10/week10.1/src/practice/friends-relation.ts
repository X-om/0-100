import { getClient } from "../utils";

async function createInstagramUser(){
    const client = await getClient();
    const createTable = `CREATE TABLE IF NOT EXISTS instausers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE
    )`;

    await client.query(createTable);
    

    const followersTable = `CREATE TABLE IF NOT EXISTS followrs (
        id SERIAL PRIMARY KEY,
        follwer_id INTEGER NOT NULL REFERENCES instausers(id),
        following_id INTEGER NOT NULL REFERENCES instausers(id)
    )`;

    await client.query(followersTable);

    
    console.log("tables created successfully");

}


createInstagramUser();



