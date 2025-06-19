import prisma from "../client/getClient";

async function task3(pizzaName:string) {
    const result = await prisma.orderLine.findMany({
        where:{
            pizza:{
                name:{
                    equals:pizzaName
                }
            }
        },
        select:{
            quantity:true,
            order:true,
            pizza:{
                select:{
                    name:true
                }
            }
        }
    })

    console.log(result)
}

task3('Pepperoni');