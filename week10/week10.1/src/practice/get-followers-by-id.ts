import { getClient } from "../utils";

async function getFollowers(id : number){
    const client = await getClient();
    const getFollowersQuery = `
        SELECT u.name, u.email 
        FROM instausers u
        JOIN followrs f ON u.id = f.follwer_id
        WHERE following_id = $1;
    `;

    const response = await client.query(getFollowersQuery,[id]);
    console.log(response.rows);
};


getFollowers(1);


