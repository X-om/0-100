import { getClient } from "./utils";

async function dropTable(tableName : string){
    const client = await getClient();

    const dropTableQuery = `DROP TABLE IF EXISTS ${tableName} CASCADE`;
    await client.query(dropTableQuery);
    console.log('user table deleted successfully');
}

dropTable('Todos');