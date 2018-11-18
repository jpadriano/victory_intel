-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: victory
-- ------------------------------------------------------
-- Server version	5.7.22-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `campus_organizations`
--

DROP TABLE IF EXISTS `campus_organizations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `campus_organizations` (
  `id` varchar(55) NOT NULL,
  `user_id` varchar(45) DEFAULT NULL,
  `organization` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campus_organizations`
--

LOCK TABLES `campus_organizations` WRITE;
/*!40000 ALTER TABLE `campus_organizations` DISABLE KEYS */;
INSERT INTO `campus_organizations` VALUES ('596861b8-eae3-11e8-ad9a-80ce6246f6ab','596861b8-eae3-11e8-ad9a-80ce6246f6ab','596861b8-eae3-11e8-ad9a-80ce6246f6ab',NULL,NULL,NULL);
/*!40000 ALTER TABLE `campus_organizations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `college_schools`
--

DROP TABLE IF EXISTS `college_schools`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `college_schools` (
  `id` varchar(45) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `college_schools`
--

LOCK TABLES `college_schools` WRITE;
/*!40000 ALTER TABLE `college_schools` DISABLE KEYS */;
INSERT INTO `college_schools` VALUES ('a9409c22-eadc-11e8-ad9a-80ce6246f6ab','University of the Philippines Diliman',NULL,NULL,NULL);
/*!40000 ALTER TABLE `college_schools` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `courses` (
  `id` varchar(45) NOT NULL,
  `course` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES ('a9409c22-eadc-11e8-ad9a-80ce6246f6ab','asdfasdf',NULL,NULL,NULL);
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leadership_123_titles`
--

DROP TABLE IF EXISTS `leadership_123_titles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `leadership_123_titles` (
  `id` varchar(45) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leadership_123_titles`
--

LOCK TABLES `leadership_123_titles` WRITE;
/*!40000 ALTER TABLE `leadership_123_titles` DISABLE KEYS */;
INSERT INTO `leadership_123_titles` VALUES ('1','1',NULL,NULL,NULL);
/*!40000 ALTER TABLE `leadership_123_titles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `onetwoone_titles`
--

DROP TABLE IF EXISTS `onetwoone_titles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `onetwoone_titles` (
  `id` varchar(45) NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `onetwoone_titles`
--

LOCK TABLES `onetwoone_titles` WRITE;
/*!40000 ALTER TABLE `onetwoone_titles` DISABLE KEYS */;
/*!40000 ALTER TABLE `onetwoone_titles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profiles` (
  `id` varchar(45) NOT NULL,
  `birthday` datetime DEFAULT NULL,
  `victory_group_schedule_day` varchar(10) DEFAULT NULL,
  `victory_group_schedule_time` time DEFAULT NULL,
  `member_intern_type` varchar(10) DEFAULT NULL,
  `batch` year(4) DEFAULT NULL,
  `college_school_id` varchar(45) DEFAULT NULL,
  `course_id` varchar(45) DEFAULT NULL,
  `campus_organization_id` varchar(45) DEFAULT NULL,
  `expected_graduation` datetime DEFAULT NULL,
  `onetwoone` int(11) DEFAULT NULL,
  `victory_weekend_done` tinyint(4) DEFAULT NULL,
  `purple_book_class` int(11) DEFAULT NULL,
  `church_community` tinyint(4) DEFAULT NULL,
  `making_disciples_class` tinyint(4) DEFAULT NULL,
  `doing_onetwoone_with_others` tinyint(4) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `leadership_113` varchar(45) DEFAULT NULL,
  `staff_enc` varchar(45) DEFAULT NULL,
  `ministry_group` varchar(45) DEFAULT NULL,
  `lg_leader` varchar(45) DEFAULT NULL,
  `vg_leader` varchar(45) DEFAULT NULL,
  `user_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purple_book_class_titles`
--

DROP TABLE IF EXISTS `purple_book_class_titles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `purple_book_class_titles` (
  `id` varchar(45) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purple_book_class_titles`
--

LOCK TABLES `purple_book_class_titles` WRITE;
/*!40000 ALTER TABLE `purple_book_class_titles` DISABLE KEYS */;
/*!40000 ALTER TABLE `purple_book_class_titles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` varchar(45) NOT NULL,
  `type` varchar(45) DEFAULT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `contact_number` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `verification_code` varchar(4) DEFAULT NULL,
  `leader_id` varchar(45) DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('1','1','1','1','1','1','1','1','1','1',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `volunteer_ministries`
--

DROP TABLE IF EXISTS `volunteer_ministries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `volunteer_ministries` (
  `id` varchar(45) NOT NULL,
  `user_id` varchar(45) DEFAULT NULL,
  `ministry` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `volunteer_ministries`
--

LOCK TABLES `volunteer_ministries` WRITE;
/*!40000 ALTER TABLE `volunteer_ministries` DISABLE KEYS */;
/*!40000 ALTER TABLE `volunteer_ministries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'victory'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-18 12:01:30
