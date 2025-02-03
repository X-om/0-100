import { getClient } from "../utils";

async function insertFriends() {
    const client = await getClient();
    const todoInsertQuery = `
    INSERT INTO instausers (name, email) VALUES 
    ('alice', 'alice@example.com'), 
    ('bob', 'bob@example.com'), 
    ('charlie', 'charlie@example.com'), 
    ('david', 'david@example.com'), 
    ('emma', 'emma@example.com'), 
    ('frank', 'frank@example.com'), 
    ('grace', 'grace@example.com'), 
    ('harry', 'harry@example.com'), 
    ('ivy', 'ivy@example.com'), 
    ('jack', 'jack@example.com');
    `;

    await client.query(todoInsertQuery);

    console.log("friends inserted");
    
}


insertFriends();