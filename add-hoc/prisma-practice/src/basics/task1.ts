import prisma from "../client/getClient";

async function task1(){
    const result = await prisma.customer.findMany({
        include :{
            orders: true
        }
    })

    const finalresult = result.map(customer => ({
        customerId : customer.customerId,
        name : customer.fname,
        totalOrders : customer.orders.length
    }))

    console.log(finalresult)
}

task1();