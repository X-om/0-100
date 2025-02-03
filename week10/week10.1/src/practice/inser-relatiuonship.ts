import { getClient } from "../utils";

async function inserRelation(){
    const client = await getClient();
    const insertRelationQuery = `
    INSERT INTO followrs (follwer_id, following_id) VALUES
    (1, 2),  
    (1, 3),  
    (2, 4),  
    (3, 5),  
    (4, 1),  
    (5, 6),  
    (6, 7),  
    (7, 8),  
    (8, 9),  
    (9, 10), 
    (10, 1), 
    (5, 1);  
    `;

    await client.query(insertRelationQuery);
    console.log("relationship inserted");
}

inserRelation();

