-- CreateEnum
CREATE TYPE "PType" AS ENUM ('COD', 'UPI', 'CREDIT_CARD', 'DEBIT_CARD');

-- CreateEnum
CREATE TYPE "DType" AS ENUM ('INTERNATIONAL', 'LOCAL', 'STATE', 'NATIONAL');

-- CreateTable
CREATE TABLE "Customer" (
    "customerId" SERIAL NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customerId")
);

-- CreateTable
CREATE TABLE "OrderHeader" (
    "orderId" SERIAL NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "OrderHeader_pkey" PRIMARY KEY ("orderId")
);

-- CreateTable
CREATE TABLE "OrderLine" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "pizzaId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "OrderLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "paymentId" SERIAL NOT NULL,
    "pDate" TIMESTAMP(3) NOT NULL,
    "type" "PType" NOT NULL DEFAULT 'COD',
    "orderId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("paymentId")
);

-- CreateTable
CREATE TABLE "Delivery" (
    "deliveryId" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "type" "DType" NOT NULL DEFAULT 'STATE',
    "status" BOOLEAN NOT NULL DEFAULT false,
    "dispatcher" TIMESTAMP(3) NOT NULL,
    "arrival" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("deliveryId")
);

-- CreateTable
CREATE TABLE "Pizza" (
    "pizzaId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "specification" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Pizza_pkey" PRIMARY KEY ("pizzaId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- AddForeignKey
ALTER TABLE "OrderHeader" ADD CONSTRAINT "OrderHeader_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderLine" ADD CONSTRAINT "OrderLine_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "OrderHeader"("orderId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderLine" ADD CONSTRAINT "OrderLine_pizzaId_fkey" FOREIGN KEY ("pizzaId") REFERENCES "Pizza"("pizzaId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "OrderHeader"("orderId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "OrderHeader"("orderId") ON DELETE RESTRICT ON UPDATE CASCADE;
