-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 20, 2024 at 02:44 PM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `av-youtune`
--

-- --------------------------------------------------------

--
-- Table structure for table `audios`
--

DROP TABLE IF EXISTS `audios`;
CREATE TABLE IF NOT EXISTS `audios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `artist` varchar(255) NOT NULL,
  `writer` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `audioFile` varchar(255) NOT NULL,
  `createdBy` int NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `audios`
--

INSERT INTO `audios` (`id`, `title`, `artist`, `writer`, `thumbnail`, `audioFile`, `createdBy`, `createdAt`, `updatedAt`) VALUES
(1, 'Dekha Tenu', 'Mohammad Faiz', 'Jaani', 'uploads\\thumbnails\\1718889607693-Dekha Tenu Thumbnail.jpg', 'uploads\\audios\\1718889607696-Sang Rahiyo.mp3', 1, '2024-06-20 13:20:07', '2024-06-20 13:20:07');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` enum('active','inactive') DEFAULT 'active',
  `isDeleted` tinyint(1) DEFAULT '0',
  `isApproved` tinyint(1) DEFAULT '0',
  `role` enum('admin','user') DEFAULT 'user',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `profilePic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `email_3` (`email`),
  UNIQUE KEY `email_4` (`email`),
  UNIQUE KEY `email_5` (`email`),
  UNIQUE KEY `email_6` (`email`),
  UNIQUE KEY `email_7` (`email`),
  UNIQUE KEY `email_8` (`email`),
  UNIQUE KEY `email_9` (`email`),
  UNIQUE KEY `email_10` (`email`),
  UNIQUE KEY `email_11` (`email`),
  UNIQUE KEY `email_12` (`email`),
  UNIQUE KEY `email_13` (`email`),
  UNIQUE KEY `email_14` (`email`),
  UNIQUE KEY `email_15` (`email`),
  UNIQUE KEY `email_16` (`email`),
  UNIQUE KEY `email_17` (`email`),
  UNIQUE KEY `email_18` (`email`),
  UNIQUE KEY `email_19` (`email`),
  UNIQUE KEY `email_20` (`email`),
  UNIQUE KEY `email_21` (`email`),
  UNIQUE KEY `email_22` (`email`),
  UNIQUE KEY `email_23` (`email`),
  UNIQUE KEY `email_24` (`email`),
  UNIQUE KEY `email_25` (`email`),
  UNIQUE KEY `email_26` (`email`),
  UNIQUE KEY `email_27` (`email`),
  UNIQUE KEY `email_28` (`email`),
  UNIQUE KEY `email_29` (`email`),
  UNIQUE KEY `email_30` (`email`),
  UNIQUE KEY `email_31` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `status`, `isDeleted`, `isApproved`, `role`, `createdAt`, `updatedAt`, `profilePic`) VALUES
(1, ' Yash', 'yash@gmail.com', '$2b$10$8HKb.d2SqO9HVxSbFL.I/uaQZu99xxV4f3lyJKg1IB88SEgB/F0wG', 'active', 0, 1, 'admin', '2024-06-18 06:18:34', '2024-06-18 06:18:34', 'uploads\\profilepic\\1718691514381-Gopal.jpg'),
(2, 'Rahul', 'rahul@gmail.com', '$2b$10$aZPdfEktwDiLqJyqx/Ptqe7IgY3./9U0iOsYi2Rzj7E0H1Kn4Zbbm', 'active', 0, 0, 'user', '2024-06-20 06:05:21', '2024-06-20 06:05:21', '1718863521002-Shri_Krishna.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
