import prisma from "../client/getClient";

async function task2(){
    const pizza = await prisma.orderLine.groupBy({
        by:['pizzaId'],
        _sum:{
            quantity:true
        },
        orderBy:{
            _sum:{
                quantity:'desc'
            }
        }
    })

    const id = pizza[0].pizzaId;
    const pizzaName = await prisma.pizza.findUnique({
        where:{
            pizzaId:id
        }
    })

    console.log(pizzaName)
    
}

task2()