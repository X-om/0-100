import prisma from "../client/getClient";

async function task3(){
    const deliveries = await prisma.delivery.findMany({});


    const longDeliveries = deliveries.filter(d => {
        const diff = (d.arrival.getTime() - d.dispatcher.getTime()) / 1000 * 60
        return diff > 30
    });

    console.log(longDeliveries)
}

task3()