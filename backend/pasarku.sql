-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 02, 2021 at 04:51 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pasarku`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `trs_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `email`, `first_name`, `last_name`, `alamat`, `phone`, `createdAt`, `updatedAt`, `trs_id`) VALUES
(1, 'anan@gmail.com', 'Anan', 'dela', NULL, NULL, '2021-11-02 15:43:39', '2021-11-02 15:43:39', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `kategoris`
--

CREATE TABLE `kategoris` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kategoris`
--

INSERT INTO `kategoris` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Sepatu', '2021-10-30 03:16:12', '2021-10-30 03:16:12'),
(2, 'Tas', '2021-10-30 03:16:17', '2021-10-30 03:16:17');

-- --------------------------------------------------------

--
-- Table structure for table `keranjangs`
--

CREATE TABLE `keranjangs` (
  `id` int(11) NOT NULL,
  `qty` int(11) DEFAULT NULL,
  `session_id` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `produk_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `keranjangs`
--

INSERT INTO `keranjangs` (`id`, `qty`, `session_id`, `createdAt`, `updatedAt`, `produk_id`) VALUES
(1, 2, NULL, '2021-11-02 13:37:14', '2021-11-02 13:37:14', '754eeae7-a79b-4970-abf5-5413ad451b3f'),
(2, 1, NULL, '2021-11-02 13:37:19', '2021-11-02 13:37:19', '583165f9-f311-40a8-a84e-a25862982c24'),
(3, 1, NULL, '2021-11-02 13:37:30', '2021-11-02 13:37:30', 'f40867c8-7c2b-462f-8563-b2e55d1e5844'),
(4, 1, 'Rd7RudXu63K9j4AT2dJfmoIwugBRlIyn', '2021-11-02 13:38:26', '2021-11-02 13:38:26', '754eeae7-a79b-4970-abf5-5413ad451b3f'),
(5, 2, 'Rd7RudXu63K9j4AT2dJfmoIwugBRlIyn', '2021-11-02 13:38:32', '2021-11-02 13:38:32', '583165f9-f311-40a8-a84e-a25862982c24');

-- --------------------------------------------------------

--
-- Table structure for table `produks`
--

CREATE TABLE `produks` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `full_description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `produks`
--

INSERT INTO `produks` (`id`, `title`, `description`, `full_description`, `image`, `price`, `url`, `createdAt`, `updatedAt`, `category_id`) VALUES
('583165f9-f311-40a8-a84e-a25862982c24', 'Nike Air Max 270 React', 'BNIB ( Brand new in box )', 'Kondisi: Baru\nBerat: 1.000 Gram\nKategori: Sneakers Pria\nEtalase: SEPATU NIKE\nNIKE BLAZER MID VINTAGE 77 WHITE BLACK', '1635563782736_1.png', 2100000, 'nike-air-max-270-react-0-7833716001585023', '2021-10-30 03:16:22', '2021-10-30 03:16:22', 1),
('754eeae7-a79b-4970-abf5-5413ad451b3f', 'Nike Air Jordan 1 High Dark Mocha', 'Brand New 100% Authentic', 'Kondisi: Baru\nBerat: 1.000 Gram\nKategori: Sneakers Pria\nEtalase: SEPATU NIKE\nNIKE BLAZER MID VINTAGE 77 WHITE BLACK', '1635563985037_9.jpg', 1350000, 'nike-air-jordan-1-high-dark-mocha-bnib-original-0-5227724178395685', '2021-10-30 03:19:45', '2021-10-30 03:19:45', 1),
('97278f91-ee2b-4efc-84c1-33b3b31a8f01', 'Nike Air Force 1 Triple White 315115-112', 'Brand New 100% Authentic', 'Kondisi: Baru\nBerat: 1.000 Gram\nKategori: Sneakers Pria\nEtalase: SEPATU NIKE\nNIKE BLAZER MID VINTAGE 77 WHITE BLACK', '1635563917188_6.png', 1250000, 'nike-air-force-1-triple-white-315115-112-bnib-100--ori---41-0-3335684163916661', '2021-10-30 03:18:37', '2021-10-30 03:18:37', 1),
('978ec54b-ae66-4ae9-b222-0fc078471ce7', 'Tas Asman Authentic - Tas Ransel', 'Brand New 100% Authentic', 'Kondisi: Baru\nBerat: 1.000 Gram\nKategori: Sneakers Pria\nEtalase: SEPATU NIKE\nNIKE BLAZER MID VINTAGE 77 WHITE BLACK', '1635564181147_3.png', 75000, 'tas-asman-authentic---tas-ransel-sporty-pria-wanita-at593---maroon-0-8486865476102563', '2021-10-30 03:23:01', '2021-10-30 03:23:01', 2),
('a8e80ce0-47e2-418d-8e10-4ff4e6473693', 'Nike Blazer Mid Vintage 77 White Black Original', 'BNIB ( Brand new in box )', 'Kondisi: Baru\nBerat: 1.000 Gram\nKategori: Sneakers Pria\nEtalase: SEPATU NIKE\nNIKE BLAZER MID VINTAGE 77 WHITE BLACK', '1635563870412_4.png', 1750000, 'nike-blazer-mid-vintage-77-white-black-original-0-19676887394500664', '2021-10-30 03:17:50', '2021-10-30 03:17:50', 1),
('f40867c8-7c2b-462f-8563-b2e55d1e5844', 'Tas Pinggang Waist Bag Bahan', 'Brand New 100% Authentic', 'Kondisi: Baru\nBerat: 1.000 Gram\nKategori: Sneakers Pria\nEtalase: SEPATU NIKE\nNIKE BLAZER MID VINTAGE 77 WHITE BLACK', '1635564156586_2.png', 80000, 'tas-tas-pinggang-waist-bag-bahan-polyester-jt12-hitam-0-6243079078305447', '2021-10-30 03:22:36', '2021-10-30 03:22:36', 2);

-- --------------------------------------------------------

--
-- Table structure for table `transaksis`
--

CREATE TABLE `transaksis` (
  `id` int(11) NOT NULL,
  `trs_number` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaksis`
--

INSERT INTO `transaksis` (`id`, `trs_number`, `createdAt`, `updatedAt`) VALUES
(65, 0, '2021-11-02 15:43:39', '2021-11-02 15:43:39');

-- --------------------------------------------------------

--
-- Table structure for table `transaksi_details`
--

CREATE TABLE `transaksi_details` (
  `id` int(11) NOT NULL,
  `qty` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `produk_id` varchar(255) DEFAULT NULL,
  `trs_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaksi_details`
--

INSERT INTO `transaksi_details` (`id`, `qty`, `createdAt`, `updatedAt`, `produk_id`, `trs_id`) VALUES
(1, 1, '2021-11-02 15:43:39', '2021-11-02 15:43:39', '583165f9-f311-40a8-a84e-a25862982c24', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `trs_id` (`trs_id`);

--
-- Indexes for table `kategoris`
--
ALTER TABLE `kategoris`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `keranjangs`
--
ALTER TABLE `keranjangs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `produk_id` (`produk_id`);

--
-- Indexes for table `produks`
--
ALTER TABLE `produks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `transaksis`
--
ALTER TABLE `transaksis`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaksi_details`
--
ALTER TABLE `transaksi_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `produk_id` (`produk_id`),
  ADD KEY `trs_id` (`trs_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `kategoris`
--
ALTER TABLE `kategoris`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `keranjangs`
--
ALTER TABLE `keranjangs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `transaksi_details`
--
ALTER TABLE `transaksi_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`trs_id`) REFERENCES `transaksis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `keranjangs`
--
ALTER TABLE `keranjangs`
  ADD CONSTRAINT `keranjangs_ibfk_1` FOREIGN KEY (`produk_id`) REFERENCES `produks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `produks`
--
ALTER TABLE `produks`
  ADD CONSTRAINT `produks_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `kategoris` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `transaksi_details`
--
ALTER TABLE `transaksi_details`
  ADD CONSTRAINT `transaksi_details_ibfk_1` FOREIGN KEY (`produk_id`) REFERENCES `produks` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `transaksi_details_ibfk_2` FOREIGN KEY (`trs_id`) REFERENCES `transaksis` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
