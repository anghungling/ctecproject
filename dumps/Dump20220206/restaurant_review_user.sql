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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `address` varchar(255) NOT NULL,
  `mobile_number` varchar(15) NOT NULL,
  `email_address` varchar(255) NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `_id_UNIQUE` (`_id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `password_UNIQUE` (`password`),
  UNIQUE KEY `email_address_UNIQUE` (`email_address`),
  UNIQUE KEY `mobile_number_UNIQUE` (`mobile_number`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (3,'mary','$2b$10$yHkF0BUCVcbaF1QDthnVxOGZG2oQXG2TnWqqsdvBiawRaOn.vAYoK','mary','mary','female','Bishan','99991111','mary@gmail.com'),(6,'rina','$2b$10$FMwtybMjOZUpTCbRGJNRoua/8ycoQVouuJdmsxzWU4VvFLsTeSxAS','rina','rina','female','Yishun','99992222','rina@gmail.com'),(7,'sara','$2b$10$cN0mRYUlibGqzFn.CnSX3.g74ircBr0NvKRSjZbjOJO95pEZXAXSa','sara','sara','female','Serangoon','99994444','sara@gmail.com'),(8,'sean','$2b$10$u5lPVz.BH.4Zkyvf679jLuJNGg/TnyFQvM/Sew./RQy3blDc.6YdS','sean','sean','male','Boon Keng','99996666','sean@gmail.com'),(9,'rose','$2b$10$jS6lgLuXflu/P5kiOfN02OQVJWZdVMSEcSen0x1WoiXAhDhvDlJN2','rose','rose','female','Chinatown','88885555','rose@gmail.com'),(25,'john','$2b$10$EYdKJT/pBfwlztLcvolUUuqtxD6cORSca5kqYhcFmqlu7Axtr1Hk6','john','john','male','Hougang','88887777','john@gmail.com'),(26,'tyler','$2b$10$XHRyCW7X6GX12.N.kGjk3OxXJcAuLoHlpGvDXoH/D0q3aXsGX4oJW','tyler','tyler','male','Tampines','44442222','tyler@gmail.com'),(32,'candy','$2b$10$F9/dNOAgssiB9BvJRY.QUecJRUmXL7IiBnpMhPwyb1xjaW2GBmKfO','candy','candy','female','bishan','77772222','candy1@gmail.com'),(38,'miya','$2b$10$oMZpH3zF5Gxc7NHajoOb5.x2BvdD2C92RhVBcxVyCqUBSxRx59ioi','miya','miya','female','singapore1','88882222','miya1@gmail.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
