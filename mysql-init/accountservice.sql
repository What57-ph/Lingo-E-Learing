-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: accountservice
-- ------------------------------------------------------
-- Server version	8.0.39

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
-- Table structure for table `accounts`
--

USE accountservice;

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accounts` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `avatar` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `enable` bit(1) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `keycloak_id` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKn7ihswpy07ci568w34q0oi8he` (`email`),
  UNIQUE KEY `UK3ylel7yvrgn2t5een0nps3ql6` (`keycloak_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (33,NULL,'2025-11-22 14:28:25.584327','admin@gmail.com',_binary '',NULL,'2f226237-47b2-473d-8bac-6aa85c245704',NULL,NULL,'admin@gmail.com',NULL);
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'USER'),(2,'ADMIN');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles_seq`
--

DROP TABLE IF EXISTS `roles_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles_seq`
--

LOCK TABLES `roles_seq` WRITE;
/*!40000 ALTER TABLE `roles_seq` DISABLE KEYS */;
INSERT INTO `roles_seq` VALUES (1);
/*!40000 ALTER TABLE `roles_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_roles`
--

DROP TABLE IF EXISTS `users_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_roles` (
  `user_id` varchar(255) NOT NULL,
  `role_id` bigint NOT NULL,
  KEY `FKj6m8fwv7oqv74fcehir1a9ffy` (`role_id`),
  CONSTRAINT `FKj6m8fwv7oqv74fcehir1a9ffy` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_roles`
--

LOCK TABLES `users_roles` WRITE;
/*!40000 ALTER TABLE `users_roles` DISABLE KEYS */;
INSERT INTO `users_roles` VALUES ('7714c245-3618-4dbf-bd98-db9181571af7',1),('7714c245-3618-4dbf-bd98-db9181571af7',2),('f8cc156f-26ff-4a68-abab-bb9093bec441',1),('77468b35-26a4-4907-ab8e-65f1bc9c11fb',1),('b20fdc71-bfcf-466d-93b7-f38792eb8358',1),('bbcbed39-c569-487b-8b55-1c43862769b9',1),('3ea806e3-d8c5-45b5-a273-170f6423a1d8',1),('3ea806e3-d8c5-45b5-a273-170f6423a1d8',2),('880f4678-7a8b-4c04-8dd5-0a43b0d034d5',1),('b8d2b441-b179-4ca0-af1d-021cab25a77a',2),('609a1c8c-e8fe-4d11-b202-846caa3e273e',1),('3d39e7ef-4e9a-47cb-8cf8-d208dcb38372',1),('ffd9ea29-dfb0-4277-9163-2790b35a2979',1),('ebd0fa62-44b5-442c-9d28-caae03bd0e18',1),('9bf989e8-0a49-4f28-bdd3-dff33518e2e5',1),('cf761b9d-3ec9-418f-908a-82b55fb61b26',1),('cf761b9d-3ec9-418f-908a-82b55fb61b26',2),('132e4e67-9ffc-4ef9-a214-82f06f2b3186',1),('132e4e67-9ffc-4ef9-a214-82f06f2b3186',2),('0232a4a6-e696-4949-9931-118d78ed9365',1),('0232a4a6-e696-4949-9931-118d78ed9365',2),('db6346c3-a399-458e-8a7e-0c899983c2ac',1),('db6346c3-a399-458e-8a7e-0c899983c2ac',2),('71a71a46-63f0-43b6-a30a-61e57ec4bf0a',1),('71a71a46-63f0-43b6-a30a-61e57ec4bf0a',2),('d294b705-03b9-4bd5-a7ab-7b8b691c713d',1),('521eb0c4-d219-4833-b436-f734029278c9',1),('9de10d16-6130-492e-8646-8708eabf7644',2),('5f06b1d8-9342-4f03-bf98-2a82101a80df',2),('18656d3a-e0f5-4349-8511-f2f7f0f96070',2),('6281c0b4-92b0-491d-b4cd-2c941e4f1a3b',2),('12fba284-a57a-4ede-8c4c-00438ae45573',2),('2ba95628-a191-424a-a58e-21e7ddf03f7c',1),('e2cd6a3b-9bec-4bc4-be4d-3cc576b99fa8',1),('18a529be-91d7-4605-bd16-35b1a55b4d7d',1),('2f226237-47b2-473d-8bac-6aa85c245704',1);
/*!40000 ALTER TABLE `users_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `web_series`
--

DROP TABLE IF EXISTS `web_series`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `web_series` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `release_date` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `web_series`
--

LOCK TABLES `web_series` WRITE;
/*!40000 ALTER TABLE `web_series` DISABLE KEYS */;
/*!40000 ALTER TABLE `web_series` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-22 21:29:41
