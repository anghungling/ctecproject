-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: restaurant_review
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `restaurantId` int NOT NULL,
  `userId` int NOT NULL,
  `content` text NOT NULL,
  `datePosted` varchar(100) NOT NULL,
  `rating` int NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `_id_UNIQUE` (`_id`),
  KEY `userId_idx` (`userId`),
  KEY `restaurantId_idx` (`restaurantId`),
  CONSTRAINT `restaurantId` FOREIGN KEY (`restaurantId`) REFERENCES `restaurant_list` (`_id`) ON DELETE CASCADE,
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `user` (`_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,1,3,'Not bad','Thu Feb 03 2022 23:11:12 GMT+0800 (Singapore Standard Time)',2),(8,11,6,'Fast and delicious','Fri Feb 04 2022 12:13:23 GMT+0800 (Singapore Standard Time)',5),(10,2,3,'Excellent','Sat Feb 05 2022 20:30:57 GMT+0800 (Singapore Standard Time)',5),(11,3,3,'Value for money','Sat Feb 05 2022 20:31:48 GMT+0800 (Singapore Standard Time)',5),(12,4,3,'Great taste','Sat Feb 05 2022 20:31:41 GMT+0800 (Singapore Standard Time)',5),(13,6,3,'Amazing','Sat Feb 05 2022 20:31:37 GMT+0800 (Singapore Standard Time)',4),(14,9,3,'Good service','Sat Feb 05 2022 20:31:32 GMT+0800 (Singapore Standard Time)',4),(15,10,3,'warm and freshly prepared','Sat Feb 05 2022 20:42:34 GMT+0800 (Singapore Standard Time)',5),(16,15,3,'poor standard','Sat Feb 05 2022 20:32:42 GMT+0800 (Singapore Standard Time)',1),(17,7,3,'very consistent','Sat Feb 05 2022 20:33:16 GMT+0800 (Singapore Standard Time)',4),(18,12,3,'high quality','Sat Feb 05 2022 20:42:51 GMT+0800 (Singapore Standard Time)',5),(19,14,3,'very cheap','Sat Feb 05 2022 20:42:47 GMT+0800 (Singapore Standard Time)',4),(20,5,3,'reasonable price','Sat Feb 05 2022 20:42:59 GMT+0800 (Singapore Standard Time)',4),(21,8,3,'will come back again','Sat Feb 05 2022 20:43:05 GMT+0800 (Singapore Standard Time)',4),(22,13,3,'great for sharing','Sat Feb 05 2022 20:43:09 GMT+0800 (Singapore Standard Time)',4),(23,16,3,'friendly staffs','Sat Feb 05 2022 20:43:14 GMT+0800 (Singapore Standard Time)',5),(24,2,9,'excellent quality and taste','Sat Feb 05 2022 20:41:28 GMT+0800 (Singapore Standard Time)',5),(25,3,9,'very clean','Sat Feb 05 2022 20:41:43 GMT+0800 (Singapore Standard Time)',3),(26,5,9,'nice place to chill','Sat Feb 05 2022 20:41:53 GMT+0800 (Singapore Standard Time)',5),(27,10,9,'food was delicious','Sat Feb 05 2022 20:42:10 GMT+0800 (Singapore Standard Time)',5),(28,2,8,'slow service','Sat Feb 05 2022 20:43:35 GMT+0800 (Singapore Standard Time)',2),(29,3,8,'tasty','Sat Feb 05 2022 20:43:44 GMT+0800 (Singapore Standard Time)',4),(30,9,8,'never fail to disappoint!','Sat Feb 05 2022 20:43:56 GMT+0800 (Singapore Standard Time)',5),(31,11,8,'so crowd','Sat Feb 05 2022 20:44:04 GMT+0800 (Singapore Standard Time)',1),(32,14,8,'long queue','Sat Feb 05 2022 20:44:18 GMT+0800 (Singapore Standard Time)',2),(33,4,25,'food was decent','Sat Feb 05 2022 20:44:38 GMT+0800 (Singapore Standard Time)',3),(34,1,25,'awesome service','Sat Feb 05 2022 20:44:48 GMT+0800 (Singapore Standard Time)',5),(35,15,25,'highly recommended','Sat Feb 05 2022 20:45:00 GMT+0800 (Singapore Standard Time)',5),(36,7,25,'superb','Sat Feb 05 2022 20:45:16 GMT+0800 (Singapore Standard Time)',5),(37,1,6,'limited seats','Sat Feb 05 2022 20:54:52 GMT+0800 (Singapore Standard Time)',2),(38,4,6,'took so long to serve','Sat Feb 05 2022 20:55:11 GMT+0800 (Singapore Standard Time)',1),(39,13,6,'horrible experience','Sat Feb 05 2022 20:55:24 GMT+0800 (Singapore Standard Time)',1),(40,9,6,'quite expensive','Sat Feb 05 2022 20:55:36 GMT+0800 (Singapore Standard Time)',2),(41,3,6,'loads of variety','Sat Feb 05 2022 20:55:56 GMT+0800 (Singapore Standard Time)',5),(42,6,6,'staffs are well trained, helpful and polite','Sat Feb 05 2022 20:56:21 GMT+0800 (Singapore Standard Time)',5),(43,2,26,'so disappointed','Sat Feb 05 2022 20:56:40 GMT+0800 (Singapore Standard Time)',1),(44,8,26,'not crowded and very peaceful','Sat Feb 05 2022 20:56:55 GMT+0800 (Singapore Standard Time)',5),(45,16,26,'will never come back','Sat Feb 05 2022 20:57:04 GMT+0800 (Singapore Standard Time)',1),(46,5,26,'so expensive','Sat Feb 05 2022 20:57:13 GMT+0800 (Singapore Standard Time)',1),(47,11,26,'portion size too small','Sat Feb 05 2022 20:57:21 GMT+0800 (Singapore Standard Time)',2),(48,4,26,'very affordable','Sat Feb 05 2022 20:57:40 GMT+0800 (Singapore Standard Time)',5),(49,10,26,'food is cold and hard\n','Sat Feb 05 2022 20:57:51 GMT+0800 (Singapore Standard Time)',2),(50,12,26,'food is not cooked properly','Sat Feb 05 2022 20:58:02 GMT+0800 (Singapore Standard Time)',3),(51,2,32,'example','Sat Feb 05 2022 21:37:02 GMT+0800 (Singapore Standard Time)',4);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-06  0:01:39
