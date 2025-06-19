import prisma from "../client/getClient";

async function task2(orderId:number, customerId:number){
    const result = await prisma.payment.create({
        data:{
            orderId:orderId,
            customerId:customerId,
            total:300,
            pDate: new Date(),
            type:'DEBIT_CARD'
        }
    });

    console.log(result);
}


task2(1,2);