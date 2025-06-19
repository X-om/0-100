import { PrismaClient, DType, PType } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Seed Pizzas
  const pizzas = await prisma.pizza.createMany({
    data: [
      { name: "Pepperoni", specification: "Spicy with extra cheese", price: 350 },
      { name: "Margherita", specification: "Classic cheese and tomato", price: 300 },
      { name: "Veggie Supreme", specification: "Loaded with fresh vegetables", price: 320 },
      { name: "BBQ Chicken", specification: "Barbecue sauce and chicken", price: 400 }
    ]
  });

  // Seed Customers
  const customer = await prisma.customer.create({
    data: {
      fname: "John",
      lname: "Doe",
      address: "123 Pizza Street",
      phone: "9876543210",
      email: "john.doe@example.com"
    }
  });

  // Create Order
  const order = await prisma.orderHeader.create({
    data: {
      customerId: customer.customerId,
      orderDate: new Date(),
      orderLines: {
        create: [
          { pizzaId: 1, quantity: 2 },
          { pizzaId: 3, quantity: 1 }
        ]
      },
      payments: {
        create: [
          {
            pDate: new Date(),
            type: PType.CREDIT_CARD,
            customerId: customer.customerId,
            total: 1020
          }
        ]
      },
      deliveries: {
        create: [
          {
            type: DType.LOCAL,
            status: true,
            dispatcher: new Date(),
            arrival: new Date(Date.now() + 30 * 60000) // 30 minutes later
          }
        ]
      }
    }
  });

  console.log("✅ Seeded data successfully!");
}

main()
  .catch(e => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
