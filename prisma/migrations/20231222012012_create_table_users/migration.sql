-- AlterTable
ALTER TABLE `comments` MODIFY `user_comment` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `node_id` VARCHAR(200) NOT NULL,
    `void_id` INTEGER NOT NULL,
    `login` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `html_url` VARCHAR(191) NULL,
    `location` VARCHAR(191) NULL,
    `bio` VARCHAR(191) NULL,
    `twitter_username` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL,
    `image` VARCHAR(225) NOT NULL,
    `email` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
