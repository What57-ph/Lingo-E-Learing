# 📘 Lingo - Online Learning Platform

### 1. Project Introduction

Lingo is a comprehensive web application built on a **microservices architecture**, providing a robust platform for online learning and testing.

---

### 2. Key Features

- **Account Management & Authentication**  
  Integrates Keycloak for registration, login, and social logins.

- **Test Management**  
  CRUD operations for tests, questions, and multimedia.

- **Attempt History**  
  Tracks user attempts, calculates scores, stores results.

- **File Management**  
  Upload and retrieve avatars, audio/video files.

- **User Interface**  
  ReactJS frontend for users and admins.

- **Admin Dashboard**  
  Manage users, tests, and view statistics.

---

### 3. System Architecture

- **API Gateway** – Spring Cloud Gateway
- **Discovery Server** – Eureka
- **Account Service** – User accounts
- **Test Service** – Test logic
- **Attempt Service** – Test results
- **File Service** – File handling
- **Web App** – ReactJS SPA
- **Database** – MySQL
- **Keycloak** – Authentication
- **Observability** – Prometheus & Grafana

---

### 4. Technology Stack

**Backend**

- Java 17+
- Spring Boot, Spring Cloud, Spring Security
- Hibernate, Feign Client
- Keycloak
- RabbitMQ

**Frontend**

- ReactJS, Redux Toolkit
- Axios, Tailwind CSS, Ant Design

**Database**

- MySQL

**DevOps**

- Docker, Docker Compose
- Maven
- Prometheus, Grafana

---

### 5. Installation & Setup

- Fileservice Setup Note

This service interacts with Google Cloud. For security purposes, access credentials are required via a JSON key file.

Download Google Cloud Key
Download the JSON file from the following Google Drive folder: https://drive.google.com/drive/folders/12qu_I4HqqB8p-u7c_sSPUGLrQ1SbCxpA

Place the Key File
Copy the JSON file to the following folder in the fileservice service (create folder keys if not existed):

```bash
fileservice/src/main/resources/keys
```

- To run project

```bash
git clone https://github.com/ducsieunhan/lingo.git
cd lingo
docker-compose up -d
```

Note: You must run code of AI part in the folder "ielts-writting-scoring" and "ielts-scoring" built with Python to activate AI for speaking and writing evaluation.

Optional observability tools:

To use this feature, you are required to add your ipv4 address to .env file, for instance

```bash
HOST_IP_ADDRESS=172.20.10.3
```

To get ipv4 address, go to cmd, type command

```bash
ipconfig
```

![alt text](image.png)
Copy your ipv4 address and paste to HOST_IP_ADDRESS in .env file that stays at the same root with docker-compose file, then run one of 2 commands as below to build observability

```bash
cd project-name
cd observability
docker-compose up -d
```

```bash
docker-compose -f docker-compose.yml -f docker-compose-observability.yml up -d
```

---

### 6. Usage

- Web App → `http://localhost:5173`
- API Gateway → `http://localhost:8080`
- Keycloak Admin → `http://localhost:8180/realms/master`
- Grafana → `http://localhost:4000`

Provided account for testing:

```
email/username: admin@gmail.com
password: admin
```
