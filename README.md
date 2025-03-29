# College-Closet DevOps-Docker Website Assignment Documentation

**Group Members**: Peter Stewart, Kendall Petteway, Chance Palmer, Si Qin Huang  
**Due Date**: Friday, March 28, 2025

---

## How to Run

Open in terminal and run this command: 
```bash
docker-compose up --build
```
then go to [http://localhost:3000](http://localhost:5173). more information bellow.

## Intro/Project Overview

The request for this project is to build a multi-tier web application using React, FastAPI, and PostgreSQL, fully containerized with Docker and orchestrated using Docker Compose. Designed to simulate real-world full-stack development workflows, this application demonstrates the seamless integration of frontend, backend, and database services—all within isolated containers that can be spun up locally with a single command.

Our goal is to showcase practical proficiency in Dockerized development while building a scalable and modular web app that can serve dynamic content from a PostgreSQL database. The application includes at least two non-CRUD frontend pages, offering interactive features such as dashboards, search results, or reports, all driven by real-time data served from our custom-built FastAPI backend.

By containerizing the frontend, backend, and database layers, we ensure consistent development environments across systems, simplified deployment, and cleaner host machines. This project also highlights best practices in folder structure, environment variable management, and cross-functional collaboration between CS and Data Science students.

## Our Project: College Closet

College Closet is a web application concept designed to foster sustainability and accessibility on college campuses by creating a platform for students to list, swap, or donate clothing and shoes. The idea centers around a Swap Token system—users earn tokens when they donate items and can use them to claim listings from other students. It’s a community-driven approach to fashion that supports both environmental consciousness and student affordability.

At this stage, our team has focused on setting up the core infrastructure of the project. We successfully configured a Dockerized environment that launches a multi-tier architecture using:

- A React frontend container  
- A FastAPI backend container  
- A PostgreSQL database container  

Using docker-compose, we can now spin up the entire environment with one command, keeping our development setup clean, consistent, and efficient.

Due to time constraints and the complexity of the full feature set, we've kept the current implementation minimal, focusing solely on getting the tech stack up and running. However, this solid technical foundation sets the stage for future growth.

---

## 🔌 Ports and Access

- **Frontend (React)**  
  Accessible at: [http://localhost:3000](http://localhost:5173)  
  Port: `3000`

- **Backend API (FastAPI)**  
  Accessible at: [http://localhost:8000](http://localhost:8000)  
  Port: `8000`  

---

## 🔐 API Usage

### 1. Login (Get JWT Token)

```bash
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=test@example.com&password=secret"
```

#### ✅ Expected Response (Success)
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "token_type": "bearer"
}
```

#### ❌ Expected Response (Failure)
```json
{
  "detail": "Incorrect email or password"
}
```

### 2. Protected `/me` Endpoint (Test JWT)

```bash
curl http://localhost:8000/api/auth/me \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..."
```

#### ✅ Expected Response (Success)
```json
{
  "id": 1,
  "name": "Test User",
  "email": "test@example.com"
}
```

#### ❌ Expected Response (Failure)
```json
{
  "detail": "Could not validate credentials"
}
```

### 3. Register New User

```bash
curl -X POST http://localhost:8000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice Smith",
    "email": "alice@example.com",
    "password": "securepassword123"
  }'
```

---

## Docker

To build and run our multi-tier application efficiently, we used Docker and Docker Compose to containerize and orchestrate each part of the system—frontend, backend, and database.

### What is a Dockerfile?

A Dockerfile is a script that contains instructions to build a Docker image. It defines everything needed to set up a service, including:

- The base image (e.g., Python or Node)  
- System dependencies  
- Code files to copy into the container  
- Environment variables  
- Commands to run when the container starts  

Each service in our project (React frontend, FastAPI backend) has its own Dockerfile that ensures it can run independently in its own container.

### What is Docker-Compose?

Docker Compose is a tool used to define and run multi-container Docker applications. Instead of running each container individually, Compose allows us to manage them all from one file: `docker-compose.yml`.

In this file, we:

- Declare all the services in our app (frontend, backend, database)  
- Define how these services interact  
- Set up shared networks and volumes  
- Specify which ports to expose  
- Reference each service's Dockerfile and environment variables  

With a single command (`docker-compose up --build`), we can spin up the entire environment—React, FastAPI, and PostgreSQL—all connected and ready to use.
