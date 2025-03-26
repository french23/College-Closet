
# College Closet Backend

This project is a FastAPI + PostgreSQL backend setup for the College Closet project.

---

## 🚀 Getting Started

### 1. Connect to the Database (PostgreSQL)

```bash
docker exec -it project-root-db-1 psql -U admin -d postgres
```

### 2. Start the Backend Server

```bash
uvicorn src.main:app --reload
```

---

## 🧱 Database Setup

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INTEGER
);

INSERT INTO users (name, email, age) VALUES
    ('John Smith', 'john.smith@example.com', 22),
    ('Emma Johnson', 'emma.j@example.com', 20),
    ('Michael Brown', 'michael.b@university.edu', 21),
    ('Sarah Davis', 'sarah.d@college.edu', 19),
    ('David Wilson', 'david.w@example.com', 23);
```

---

## 🖥️ Frontend Setup

```bash
npm install
npm run dev
```

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

---

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

---

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

## 🛠️ Tech Stack

- FastAPI
- PostgreSQL
- SQLAlchemy
- Docker
- JWT Authentication
