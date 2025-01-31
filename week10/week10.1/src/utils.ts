import { Client } from "pg";

export async function getClient(){
    const client = new Client("postgresql://neondb_owner:npg_Z1LJ8FWypeKl@ep-orange-block-a4eerdid-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require");
    await client.connect();
    return client;
}