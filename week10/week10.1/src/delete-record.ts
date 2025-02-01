import { getClient } from "./utils";

async function deleteTodo(todoId : number) {
    const client = await getClient();
    const deleteQuery = `DELETE FROM Todos WHERE id = $1`;
    await client.query(deleteQuery,[todoId]);
    console.log("Deleted successfully");
}


deleteTodo(2);