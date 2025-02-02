import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    await prisma.post.create({
        data : {
            title : "name",
            content : "my name is om",
            published : true,
            author : {
                connect : {
                    id : 1
                }
            }
        }
    })
}

main().then( async () => {
    console.log("data inserted successfully");
    await prisma.$disconnect();
}).catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
})