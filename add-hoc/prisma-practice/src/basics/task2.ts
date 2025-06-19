import prisma from "../client/getClient";

async function task2(email: string) {
  const cutomers = await prisma.customer.findUnique({
    where: {
      email: email,
    },
    include: {
      orders: {
        select: {
          orderId: true,
          orderDate: true,
          orderLines: {
            select: {
              quantity: true,
              pizza: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  });

  console.log(JSON.stringify(cutomers));
}

task2("john.doe@example.com");
