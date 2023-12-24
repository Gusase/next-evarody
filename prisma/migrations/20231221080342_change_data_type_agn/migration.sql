/*
  Warnings:

  - You are about to drop the column `createdAt` on the `collections` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `collections` DROP COLUMN `createdAt`,
    ADD COLUMN `created_at` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `comments` MODIFY `createdAt` VARCHAR(191) NULL;
