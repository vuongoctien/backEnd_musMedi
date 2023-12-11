-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2023 at 06:44 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `musmedi`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `clockTime` varchar(255) DEFAULT NULL,
  `clinicID` int(11) DEFAULT NULL,
  `dr_or_pk` tinyint(1) DEFAULT NULL,
  `dr_or_pk_ID` int(11) DEFAULT NULL,
  `forWho` tinyint(1) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `patientName` varchar(255) DEFAULT NULL,
  `patientBirthday` datetime DEFAULT NULL,
  `patientGender` tinyint(1) DEFAULT NULL,
  `reason` text DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `date`, `clockTime`, `clinicID`, `dr_or_pk`, `dr_or_pk_ID`, `forWho`, `phoneNumber`, `email`, `patientName`, `patientBirthday`, `patientGender`, `reason`, `status`, `createdAt`, `updatedAt`) VALUES
(1, '2023-12-15', '10:30 - 11:00', 2, 1, 8, 1, '0973251401', 'vuongoctien@gmail.com', 'Vương Ngọc Tiến', '2001-03-07 00:00:00', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', 'Chưa xem', '2023-12-13 00:28:03', '2023-12-13 00:28:03'),
(2, '2023-12-18', '07:00 - 07:30', 2, 1, 8, 0, '0900009999', 'vuongoctien@gmail.com', 'Nguyễn Thị Loan', '1967-06-03 00:00:00', 0, '', 'Chưa xem', '2023-12-13 00:30:52', '2023-12-13 00:30:52'),
(3, '2023-12-15', '15:00 - 16:00', 1, 1, 1, 0, '0999888998', 'vuongoctien@gmail.com', 'Kiều Anh Văn', '2001-02-26 00:00:00', 1, 'Sinh hoạt vợ chồng kém', 'Chưa xem', '2023-12-13 00:32:38', '2023-12-13 00:32:38'),
(4, '2023-12-15', '16:00 - 17:00', 1, 1, 1, 1, '0245550797', 'vuongoctien@gmail.com', 'Hoàng Hồng', '2001-10-14 00:00:00', 0, '', 'Chưa xem', '2023-12-13 00:33:55', '2023-12-13 00:33:55'),
(5, '2023-12-14', '14:00 - 15:00', 1, 1, 1, 0, '0987654321', 'vuongoctien@gmail.com', 'Cao Trung Kiên', '2002-12-13 00:00:00', 0, 'Đau nhức cơ do tập thể hình', 'Chưa xem', '2023-12-13 00:35:24', '2023-12-13 00:35:24'),
(6, '2023-12-14', '10:00 - 11:00', 1, 1, 1, 1, '09999999990', 'vuongoctien@gmail.com', 'Muhamed Osamamusa', '1993-02-17 00:00:00', 0, 'Chấn thương khi chơi futsal', 'Chưa xem', '2023-12-13 00:37:10', '2023-12-13 00:37:10'),
(7, '2023-12-16', '07:00 - 11:00', 1, 0, 31, 0, '024555677777', 'vuongoctien@gmail.com', 'Edison Cavani', '1990-09-05 00:00:00', 1, 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium\n\n totam rem aperiam, eaque ipsa quae', 'Chưa xem', '2023-12-13 00:41:00', '2023-12-13 00:41:00'),
(8, '2023-12-15', '15:00 - 16:00', 1, 1, 1, 0, '0987654321', 'vuongoctien@gmail.com', 'Nguyễn Văn Sĩ', '2002-12-13 00:00:00', 0, 'Đau nhức cơ do tập thể hình', 'Chưa xem', '2023-12-13 00:35:24', '2023-12-13 00:35:24'),
(9, '2023-12-16', '09:00 - 10:00', 1, 1, 1, 1, '09999999990', 'vuongoctien@gmail.com', 'Suwaphut Kec', '1993-02-17 00:00:00', 0, 'Chấn thương khi chơi futsal', 'Chưa xem', '2023-12-13 00:37:10', '2023-12-13 00:37:10'),
(10, '2023-12-17', '07:00 - 11:00', 1, 0, 31, 0, '024555677777', 'vuongoctien@gmail.com', 'Vương Thị Huê', '1990-09-05 00:00:00', 1, 'Sed ut perspiciatis unde omnis iste accusantium doloremque laudantium\n\n totam rem aperiam, eaque ipsa quae', 'Chưa xem', '2023-12-13 00:41:00', '2023-12-13 00:41:00'),

(11, '2023-12-12', '09:30 - 10:00', 2, 1, 8, 1, '0973251401', 'vuongoctien@gmail.com', 'Tiến Ngọc', '2001-03-07 00:00:00', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', 'Đã khám', '2023-12-13 00:28:03', '2023-12-13 00:28:03'),
(12, '2023-12-11', '08:00 - 08:30', 2, 1, 8, 0, '0900009999', 'vuongoctien@gmail.com', 'Loan Nguyễn', '1967-06-03 00:00:00', 0, '', 'Đã khám', '2023-12-13 00:30:52', '2023-12-13 00:30:52'),
(13, '2023-12-11', '13:00 - 14:00', 1, 1, 1, 0, '0999888998', 'vuongoctien@gmail.com', 'Kiều Văn Hồng', '2001-02-26 00:00:00', 1, 'Sinh hoạt vợ chồng kém', 'Đã khám', '2023-12-13 00:32:38', '2023-12-13 00:32:38'),
(14, '2023-12-12', '15:00 - 16:00', 1, 1, 1, 1, '0245550797', 'vuongoctien@gmail.com', 'Hồng Thất Công', '2001-10-14 00:00:00', 0, '', 'Không đến', '2023-12-13 00:33:55', '2023-12-13 00:33:55'),
(15, '2023-12-12', '13:00 - 14:00', 1, 1, 1, 0, '0987654321', 'vuongoctien@gmail.com', 'Cao Văn Hùng', '2002-12-13 00:00:00', 0, 'Đau nhức cơ do tập thể hình', 'Không đến', '2023-12-13 00:35:24', '2023-12-13 00:35:24'),
(16, '2023-12-14', '10:00 - 11:00', 1, 1, 1, 1, '09999999990', 'vuongoctien@gmail.com', 'Muhamed Ali', '1993-02-17 00:00:00', 0, 'Chấn thương khi chơi futsal', 'Chấp nhận', '2023-12-13 00:37:10', '2023-12-13 00:37:10'),
(17, '2023-12-16', '13:00 - 17:00', 1, 0, 31, 0, '024555677777', 'vuongoctien@gmail.com', 'Lionel Messi', '1990-09-05 00:00:00', 1, 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium\n\n totam rem aperiam, eaque ipsa quae', 'Từ chối', '2023-12-13 00:41:00', '2023-12-13 00:41:00'),
(18, '2023-12-13', '15:00 - 16:00', 1, 1, 1, 0, '0987654321', 'vuongoctien@gmail.com', 'Cristiano Ronaldo', '2002-12-13 00:00:00', 0, 'Đau nhức cơ do tập thể hình', 'Chấp nhận', '2023-12-13 00:35:24', '2023-12-13 00:35:24'),
(19, '2023-12-13', '08:00 - 09:00', 1, 1, 1, 1, '09999999990', 'vuongoctien@gmail.com', 'Harry Potter', '1993-02-17 00:00:00', 0, 'Chấn thương khi chơi futsal', 'Chờ duyệt', '2023-12-13 00:37:10', '2023-12-13 00:37:10'),
(20, '2023-12-13', '13:00 - 17:00', 1, 0, 31, 0, '024555677777', 'vuongoctien@gmail.com', 'Quách Tĩnh', '1990-09-05 00:00:00', 1, 'Sed ut perspiciatis unde omnis iste accusantium doloremque laudantium\n\n totam rem aperiam, eaque ipsa quae', 'Chưa xem', '2023-12-13 00:41:00', '2023-12-13 00:41:00'),

(21, '2023-12-11', '07:30 - 08:00', 2, 1, 8, 1, '0973251401', 'vuongoctien@gmail.com', 'Tạ Tốn', '2001-03-07 00:00:00', 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', 'Đã khám', '2023-12-13 00:28:03', '2023-12-13 00:28:03'),
(22, '2023-12-11', '07:00 - 07:30', 2, 1, 8, 0, '0900009999', 'vuongoctien@gmail.com', 'Vi Nhất Tiếu', '1967-06-03 00:00:00', 0, '', 'Đã khám', '2023-12-13 00:30:52', '2023-12-13 00:30:52'),
(23, '2023-12-11', '14:00 - 15:00', 1, 1, 1, 0, '0999888998', 'vuongoctien@gmail.com', 'Dương Tiêu', '2001-02-26 00:00:00', 1, 'Sinh hoạt vợ chồng kém', 'Đã khám', '2023-12-13 00:32:38', '2023-12-13 00:32:38'),
(24, '2023-12-12', '13:00 - 14:00', 1, 1, 1, 1, '0245550797', 'vuongoctien@gmail.com', 'Trương Vô Kỵ', '2001-10-14 00:00:00', 0, '', 'Không đến', '2023-12-13 00:33:55', '2023-12-13 00:33:55'),
(25, '2023-12-12', '13:00 - 14:00', 1, 1, 1, 0, '0987654321', 'vuongoctien@gmail.com', 'Ân Thiên Chính', '2002-12-13 00:00:00', 0, 'Đau nhức cơ do tập thể hình', 'Không đến', '2023-12-13 00:35:24', '2023-12-13 00:35:24'),
(26, '2023-12-15', '09:00 - 10:00', 1, 1, 1, 1, '09999999990', 'vuongoctien@gmail.com', 'Dương Quá', '1993-02-17 00:00:00', 0, 'Chấn thương khi chơi futsal', 'Chấp nhận', '2023-12-13 00:37:10', '2023-12-13 00:37:10'),
(27, '2023-12-14', '13:00 - 17:00', 1, 0, 31, 0, '024555677777', 'vuongoctien@gmail.com', 'Doãn Khắc Tây', '1990-09-05 00:00:00', 1, 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium\n\n totam rem aperiam, eaque ipsa quae', 'Từ chối', '2023-12-13 00:41:00', '2023-12-13 00:41:00'),
(28, '2023-12-12', '15:00 - 16:00', 1, 1, 1, 0, '0987654321', 'vuongoctien@gmail.com', 'Hoàng Dược Sư', '2002-12-13 00:00:00', 0, 'Đau nhức cơ do tập thể hình', 'Chấp nhận', '2023-12-13 00:35:24', '2023-12-13 00:35:24'),
(29, '2023-12-15', '07:00 - 08:00', 1, 1, 1, 1, '09999999990', 'vuongoctien@gmail.com', 'Âu Dương Phong', '1993-02-17 00:00:00', 0, 'Chấn thương khi chơi futsal', 'Chờ duyệt', '2023-12-13 00:37:10', '2023-12-13 00:37:10'),
(30, '2023-12-16', '13:00 - 17:00', 1, 0, 31, 0, '024555677777', 'vuongoctien@gmail.com', 'Chu Bá Thông', '1990-09-05 00:00:00', 1, 'Sed ut perspiciatis unde omnis iste accusantium doloremque laudantium\n\n totam rem aperiam, eaque ipsa quae', 'Chưa xem', '2023-12-13 00:41:00', '2023-12-13 00:41:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
