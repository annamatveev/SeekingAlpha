CREATE DATABASE IF NOT EXISTS `alpha` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `alpha`;

CREATE TABLE IF NOT EXISTS `groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `relationships` (
  `id_one` int(11) DEFAULT NULL,
  `relationship` varchar(50) DEFAULT NULL,
  `id_two` int(11) DEFAULT NULL,
  KEY `id_two` (`id_two`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT '0',
  `group_id` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;

INSERT INTO `users` (`name`, `group_id`) VALUES ('Liam', 2);
INSERT INTO `users` (`name`, `group_id`) VALUES ('Jacob', 1);
INSERT INTO `users` (`name`, `group_id`) VALUES ('William', 2);
INSERT INTO `users` (`name`, `group_id`) VALUES ('Ethan', 3);
INSERT INTO `users` (`name`, `group_id`) VALUES ('James', 2);
INSERT INTO `users` (`name`, `group_id`) VALUES ('Alexander', 4);
INSERT INTO `users` (`name`, `group_id`) VALUES ('Noah', 5);
INSERT INTO `users` (`name`, `group_id`) VALUES ('Daniel', 2);
INSERT INTO `users` (`name`, `group_id`) VALUES ('David', 3);
INSERT INTO `users` (`name`, `group_id`) VALUES ('Liam', 2);


INSERT INTO `groups` (`name`) VALUES ('Group 1');
INSERT INTO `groups` (`name`) VALUES ('Group 2');
INSERT INTO `groups` (`name`) VALUES ('Group 3');
INSERT INTO `groups` (`name`) VALUES ('Group 4');
INSERT INTO `groups` (`name`) VALUES ('Group 5');

INSERT INTO `relationships` (`id_one`, `relationship`, `id_two`) VALUES (1, 'follower', 2);
INSERT INTO `relationships` (`id_one`, `relationship`, `id_two`) VALUES (2, 'follower', 3);
INSERT INTO `relationships` (`id_one`, `relationship`, `id_two`) VALUES (3, 'follower', 2);
INSERT INTO `relationships` (`id_one`, `relationship`, `id_two`) VALUES (6, 'follower', 2);
INSERT INTO `relationships` (`id_one`, `relationship`, `id_two`) VALUES (7, 'follower', 2);
INSERT INTO `relationships` (`id_one`, `relationship`, `id_two`) VALUES (9, 'follower', 2);






