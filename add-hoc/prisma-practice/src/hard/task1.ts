import prisma from "../client/getClient";

async function task1() {
  const createdTransaction = await prisma.customer.create({
    data: {
      fname: "om",
      lname: "Argade",
      address: "maldad road sangamner",
      phone: "9665802587",
      email: "omargade2208@gmail.com",
      orders: {
        create: {
          orderLines: {
            create: [
              { pizzaId: 1, quantity: 1 },
              { pizzaId: 2, quantity: 2 },
            ],
          },
          payments: {
            create: {
              pDate: new Date(),
              type: "UPI",
              total: 950,
              customer: {
                connect: { email: "omargade2208@gmail.com" },
              },
            },
          },
          deliveries: {
            create: {
              dispatcher: new Date(),
              arrival: new Date(Date.now() + 45 * 60000), // 45 min later
              type: "LOCAL",
              status: false,
            },
          },
        },
      },
    },
  });

  console.log(createdTransaction)
}


task1()