import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient({log : ['info','query']});



async function main() {
    const users = await prisma.user.findMany({});
    console.log('all users : ');
    console.log(users);

    const user = await prisma.user.findUnique({
        where : { 
            id : 1
        },
        include : {
            posts : true
        }

    })
    console.log('user with id 1 : ');
    console.log(user);
}


main().then(async ()=>{
    console.log('query done !');
    await prisma.$disconnect();
}).catch(async (e)=>{
    console.log(e);
    await prisma.$disconnect();
})