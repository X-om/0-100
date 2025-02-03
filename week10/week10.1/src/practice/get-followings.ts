import { getClient } from "../utils";

async function getFollowing(id : number) {
    const client  = await getClient();
    const getFollowingQuery = `
        SELECT u.name, u.email 
        FROM instausers u
        JOIN followrs f ON u.id = f.following_id
        WHERE f.follwer_id = $1
    `;

    const response = await client.query(getFollowingQuery,[id]);
    console.log(response.rows);
}


getFollowing(1);


