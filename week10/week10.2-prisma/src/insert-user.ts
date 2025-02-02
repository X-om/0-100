import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    await prisma.user.create({
        data :  {
            email : "asmita@gmail.com",
            name : "Asmita Deore",
        }
    })
}


main().then(async () => {
    console.log("done with the query");
    await prisma.$disconnect();
}).catch(async (e)=> {
    console.log(e);
    await prisma.$disconnect();
})