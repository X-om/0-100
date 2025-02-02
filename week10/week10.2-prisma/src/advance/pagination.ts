import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main(){
    const response = await prisma.post.findMany({
        where : {
            authorId : 1
        },
        take : 4,
        skip : 4
    });

    console.log(response);
}


main().then(async ()=> {
    console.log("return done");
    await prisma.$disconnect();
}).catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
})