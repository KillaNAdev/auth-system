 CREATE DATABASE IF NOT EXISTS `servers` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `servers`;


CREATE TABLE IF NOT EXISTS `server_licensing` (
  `ip` varchar(50) DEFAULT NULL,
  `anticheat` tinyint(4) DEFAULT 0,
  `notes` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
