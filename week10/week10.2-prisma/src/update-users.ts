import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main(){
    await prisma.user.update({
        where :  { 
            id : 1
        },
        data : {
            name : "omi argade"
        }
    })
}


main().then(async () => {
    console.log("data done");
    await prisma.$disconnect();
}).catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();

})