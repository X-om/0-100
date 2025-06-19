import prisma from "../client/getClient";

async function task1() {
    const highSpendingCutomers = await prisma.payment.groupBy({
        by: ['customerId'],
        _sum:{
            total:true
        },
        having:{
            total:{
                _sum:{
                    gte:1000
                }
            }
        }
    });
    
    const customerIds = highSpendingCutomers.map(c => c.customerId)

    const cutomers = await prisma.customer.findMany({
        where:{
            customerId : {in : customerIds}
        },
        select:{
            fname:true,
            lname:true
        }
    })


    console.log(cutomers)
}


task1()