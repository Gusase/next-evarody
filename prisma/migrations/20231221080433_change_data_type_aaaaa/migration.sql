/*
  Warnings:

  - You are about to drop the column `createdAt` on the `comments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `comments` DROP COLUMN `createdAt`,
    ADD COLUMN `created_at` VARCHAR(191) NULL;
