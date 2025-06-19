import prisma from "../client/getClient";

async function task3(deliveryId : number){
    const result = await prisma.delivery.update({
        where:{deliveryId},
        data:{
            status:true,
            arrival: new Date()
        }
    });
     
console.log(result);
}


task3(2);