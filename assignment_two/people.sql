-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 02, 2018 at 02:52 AM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `people`
--

-- --------------------------------------------------------

--
-- Table structure for table `names`
--

CREATE TABLE `names` (
  `usernames` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `names`
--

INSERT INTO `names` (`usernames`) VALUES
('Judah'),
('John'),
('Luke'),
('Stephen'),
('Jenn'),
('');

-- --------------------------------------------------------

--
-- Table structure for table `zoo`
--

CREATE TABLE `zoo` (
  `id` int(2) NOT NULL,
  `name` varchar(26) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `zoo`
--

INSERT INTO `zoo` (`id`, `name`, `description`) VALUES
(1, 'Lion', 'Danger kitten'),
(2, 'Lynel', 'These fearsome monsters have lived in Hyrule since ancient times. They possess intense intelligence, resilience, and strength, making them among the most dangerous monsters in all the land. This is compounded by the fact that they have a natural resistance to all elements. You would be wise to challenge a Lynel only if you\'re very well prepared'),
(3, 'Chocobo', 'A breed of flightless birds, characterized by their yellow feathers, distinct odor, and the unforgettable chirp, kweh!, Domesticated for their gentle nature and quick feet, they are often used as a mode of ground transportation.'),
(4, 'Lizalfols', 'Lizalfos are typically sword-wielding, lizard-like enemies with large tails.'),
(5, 'Chimera Ant', 'Extremely dangerous insects designated quarantine level one. Also known as \'Gourmet Ants\' due to carefully selecting their food, they have voracious appetites and can consume several times their own weight within a single day.'),
(6, 'Narwhal', 'God spilled some of the unicorn powder on tiny whales and just decided to go with it.'),
(7, 'Freja', 'A giant two headed spider. '),
(8, 'Koopa', ' turtle-like creatures with removable shells that come in many different colors, with red and green Koopa Troopas being the most common; green Koopa Troopas usually walk back and forth without any concerns for pits or other obstacles, and red Koopa Troopas usually walk back and forth without falling off of their platforms'),
(9, 'Poro', 'Poros are the mysterious, magical, and most-loved creatures originating from the Howling Abyss.'),
(10, 'Deku Baba', 'This violent plant is widespread in wooded areas. It will attempt to bite anything that approaches it. Though it is covered in a tough outer husk, the inside of its mouth is soft.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
