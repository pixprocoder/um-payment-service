/*
  Warnings:

  - You are about to drop the column `paymentDatewayData` on the `payments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "payments" DROP COLUMN "paymentDatewayData",
ADD COLUMN     "paymentGatewayData" JSONB;
