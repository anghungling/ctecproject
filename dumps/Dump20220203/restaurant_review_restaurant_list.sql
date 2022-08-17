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
-- Table structure for table `restaurant_list`
--

DROP TABLE IF EXISTS `restaurant_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant_list` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `restaurant` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `information` text NOT NULL,
  `cuisineId` int NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `_id_UNIQUE` (`_id`),
  KEY `cuisineId_idx` (`cuisineId`),
  CONSTRAINT `cuisineId` FOREIGN KEY (`cuisineId`) REFERENCES `category` (`_id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant_list`
--

LOCK TABLES `restaurant_list` WRITE;
/*!40000 ALTER TABLE `restaurant_list` DISABLE KEYS */;
INSERT INTO `restaurant_list` VALUES (1,'Jollibee','images/restaurants/Jollibee.jpg','Jollibee is a Filipino multinational chain of fast food restaurants owned by Jollibee Foods Corporation. As of December 2021, JFC had a total of about 1,500 Jollibee outlets worldwide; with restaurants in Southeast Asia, the Middle East, East Asia, North America, and Europe.',1),(2,'KFC','images/restaurants/KFC.png','KFC is an American fast food restaurant chain headquartered in Louisville, Kentucky that specializes in fried chicken. It is the world\'s second-largest restaurant chain after McDonald\'s, with 22,621 locations globally in 150 countries as of December 2019. The chain is a subsidiary of Yum!',1),(3,'Popeyes','images/restaurants/Popeyes.jpg','Popeyes Louisiana Kitchen, Inc., also known as Popeyes and formerly named Popeyes Chicken & Biscuits and Popeyes Famous Fried Chicken & Biscuits, is an American multinational chain of fried chicken fast food restaurants that was founded in 1972 in New Orleans, Louisiana and headquartered in Miami, Florida.',1),(4,'Burger King','images/restaurants/BK.jpg','Burger King is an American multinational chain of hamburger fast food restaurants. Headquartered in Miami-Dade County, Florida, the company was founded in 1953 as Insta-Burger King, a Jacksonville, Florida–based restaurant chain.',1),(5,'Genki Sushi','images/restaurants/Genki.jpg','Genki Sushi is a chain of conveyor belt sushi restaurants established in 1990 in Japan. The chain expanded to include locations in Japan, Hong Kong, Indonesia, Singapore, Kuwait, the Philippines, China, Australia, Cambodia, Myanmar and the United States, including, California, Hawaii and Washington.',4),(6,'Hai Di Lao Hotpot','images/restaurants/HAIDILAO.png','Haidilao International Holding Ltd., doing business as Haidilao, is a chain of hot pot restaurants founded in Jianyang, Sichuan, China in 1994. Its restaurants typically operate under the name Haidilao Hot Pot. It is the largest hotpot chain in China which is widespread through spicy broths and special services.',2),(7,'Eighteen Chefs','images/restaurants/eighteen.jpg','Eighteen Chefs is a restaurant chain and franchise company in Singapore based on the principle of social enterprise. The restaurants serve mainly Western cuisine but local food is also found on the menu. As of September 2020, Eighteen Chefs has a total of eleven outlets in Singapore.',3),(8,'Ajisen Ramen','images/restaurants/Ajisen.png','Ajisen Ramen is a Japan-based chain of fast food restaurants selling Japanese ramen noodle soup dishes. The company\'s logo, featuring artwork of a little girl named Chii-chan, can be found on their stores and products.',4),(9,'Din Tai Fung','images/restaurants/DinTaiFung.jpg','Din Tai Fung is a Taiwanese restaurant chain that specializes in Chinese Huaiyang cuisine. Outside Taiwan, Din Tai Fung also has branches in Australia, China, Hong Kong, Indonesia, Japan, Macau, Malaysia, Philippines, Singapore, South Korea, Thailand, United Arab Emirates, United Kingdom, and the United States.',2);
/*!40000 ALTER TABLE `restaurant_list` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-03 23:50:28
