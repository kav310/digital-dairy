-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 27, 2023 at 06:49 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `digital_dairy_schema`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_memory_history`
--

CREATE TABLE `tbl_memory_history` (
  `notes` longtext DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `postingDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `noteId` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_memory_history`
--

INSERT INTO `tbl_memory_history` (`notes`, `title`, `postingDate`, `noteId`, `userId`) VALUES
('Traveling is one of the most exciting and rewarding experiences you can have. Whether you\'re exploring new cultures, trying new foods, or just taking in the beauty of a new landscape, there\'s always something new and fascinating to discover.\r\n\r\nOne of the best ways to share your travel experiences and inspire others is through a travel blog. Here are some tips for starting and maintaining a successful travel blog:\r\n\r\nChoose a niche: While you may love traveling in general, it\'s helpful to choose a specific niche to focus on. This could be anything from budget travel to luxury travel, backpacking to family travel, or adventure travel to cultural immersion. Focusing on a specific niche will help you build a more dedicated audience.\r\n\r\nPick a platform: There are many different blogging platforms to choose from, including WordPress, Squarespace, and Wix. Consider which platform best suits your needs in terms of customization options, ease of use, and cost.\r\n\r\nCreate great content: The most important aspect of a successful travel blog is creating engaging and informative content. Share your experiences, insights, and recommendations in a way that will inspire and inform your readers. Use high-quality photos and videos to enhance your content and make it more appealing.\r\n\r\nBuild your audience: Once you\'ve created great content, you need to get it in front of people. Share your blog posts on social media, participate in online travel communities, and network with other travel bloggers to build your audience.\r\n\r\n', 'Travel To Italy', '2023-03-18 13:38:35', '3410aa73-30c2-419b-9bb0-0e51306179f0', 'aefa8242-c4b5-11ed-8960-1e00791e4588'),
('A sunny day can bring a lot of joy and positive energy. Here are some things you can do to make the most of a sunny day:\r\n\r\nSpend time outside: Whether it\'s going for a walk, having a picnic, or just lounging in a park, spending time outside on a sunny day can be incredibly rejuvenating.\r\n\r\nWear sunscreen: While enjoying the sun, it\'s important to protect your skin from harmful UV rays. Apply sunscreen with an SPF of 30 or higher to avoid sunburn and reduce the risk of skin cancer.\r\n\r\nStay hydrated: It\'s easy to get dehydrated on a hot day, so make sure to drink plenty of water throughout the day.\r\n\r\nTake care of your pets: If you have pets, make sure they have plenty of shade and water, and avoid', 'Sunny day', '2023-03-18 13:50:24', '6d5c7259-d5cd-4af7-a9a7-e929346b88de', 'aefa8242-c4b5-11ed-8960-1e00791e4588');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_registration`
--

CREATE TABLE `tbl_registration` (
  `username` varchar(150) DEFAULT NULL,
  `emailId` varchar(150) DEFAULT NULL,
  `mobileNumber` bigint(12) DEFAULT NULL,
  `userPassword` varchar(255) DEFAULT NULL,
  `regDate` timestamp NULL DEFAULT current_timestamp(),
  `userId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_registration`
--

INSERT INTO `tbl_registration` (`username`, `emailId`, `mobileNumber`, `userPassword`, `regDate`, `userId`) VALUES
('John Doe', 'johndoe@gmail.com', 1221121212, 'John@123', '2022-04-03 08:51:23', '9c2394f6-c4b5-11ed-8960-1e00791e4588\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),
('Anuj kumar', 'ak@gmail.com', 1425362514, 'Anuj@123', '2022-04-02 11:17:37', 'aefa8242-c4b5-11ed-8960-1e00791e4588\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_memory_history`
--
ALTER TABLE `tbl_memory_history`
  ADD PRIMARY KEY (`noteId`),
  ADD UNIQUE KEY `noteId` (`noteId`);

--
-- Indexes for table `tbl_registration`
--
ALTER TABLE `tbl_registration`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `userId` (`userId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
