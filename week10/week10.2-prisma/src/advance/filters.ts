import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


async function main() {
    const response = await prisma.user.findMany({
        where : {
            email : { 
                endsWith : 'gmail.com'
            },
            posts : {
                some : {
                    published : true
                }
            }
        },
        include : {
            posts : {
                where : {
                    published : true
                }
            }
        }
    });
    console.log(response);

    console.log()
    console.log()
    console.log()
    
    response.forEach(res => {
        console.log(`posts of ${res.name}`);
        console.log(res.posts)
    })
}



main().then(async ()=> {
    console.log("query done");
    await prisma.$disconnect();
}).catch(async (e)=>{
    console.log(e);
    await prisma.$disconnect();
})

