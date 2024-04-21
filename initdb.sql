CREATE TABLE `roles`(
    `id` INT  PRIMARY KEY AUTO_INCREMENT,
    `label` VARCHAR(255),
    `alias` VARCHAR(255)
);

CREATE TABLE `users`(
    `id` INT  PRIMARY KEY AUTO_INCREMENT,
    `role_id` int,
    `prenom` VARCHAR(255),
    `nom` VARCHAR(255),
    `email` VARCHAR(255),
    `phone` VARCHAR(255),
    `password` VARCHAR(255),
    `birth_day` DATETIME,
    `enabled` VARCHAR(255),
    CONSTRAINT `fk_users_role_id` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`)
);

CREATE TABLE `categories`(
    `id` INT  PRIMARY KEY AUTO_INCREMENT,
    `label` VARCHAR(255),
    `alias` VARCHAR(255)
);

CREATE TABLE `contents`(
    `id` INT  PRIMARY KEY AUTO_INCREMENT,
    `label` VARCHAR(255),
    `presentation` VARCHAR(255),
    `description` VARCHAR(255),
    `image` VARCHAR(255),
    `banner` VARCHAR(255),
    `movie` boolean
);

CREATE TABLE `content_categories`(
    `id` INT  PRIMARY KEY AUTO_INCREMENT,
    `category` int,
    `content` int,
    CONSTRAINT `fk_contents_category` FOREIGN KEY (`category`) REFERENCES `categories`(`id`),
    CONSTRAINT `fk_contents_content` FOREIGN KEY (`content`) REFERENCES `contents`(`id`)
);

CREATE TABLE `content_seasons`(
    `id` INT  PRIMARY KEY AUTO_INCREMENT,
    `label` VARCHAR(255),
    `image` VARCHAR(255),
    `presentation` VARCHAR(255),
    `description` VARCHAR(255)
);

CREATE TABLE `content_medias`(
    `id` INT  PRIMARY KEY AUTO_INCREMENT,
    `content` int,
    `season` int,
    `label` VARCHAR(255),    
    `length` VARCHAR(255),
    `presentation` VARCHAR(255),
    `description` VARCHAR(255),
    `intro` VARCHAR(255),
    `start` VARCHAR(255),
    `outro` VARCHAR(255),
    `preview` VARCHAR(255),
    `file` VARCHAR(255),
    CONSTRAINT `fk_content_medias_content` FOREIGN KEY (`content`) REFERENCES `contents`(`id`),
    CONSTRAINT `fk_content_medias_season` FOREIGN KEY (`season`) REFERENCES `content_seasons`(`id`)
);