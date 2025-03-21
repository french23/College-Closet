# College Closet Fullstack App (Dockerized)

This project is a fullstack application with a **React (Vite)** frontend, **FastAPI** backend, and **PostgreSQL** database — all containerized using Docker.

---

## 🐳 How to Run the Docker Project

### 1. **Clone the Repository**
```bash
git clone https://github.com/french23/College-Closet.git
cd College-Closet
```

### 2. **Ensure Docker is Running**

Make sure Docker Desktop is running.

### 3. **Build and Start the Project**
```bash
docker-compose up --build
```

This will:
- Build the backend and frontend Docker images
- Start containers for the backend, frontend, and PostgreSQL DB

### 4. **Access the App**
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend (API docs): [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🛠️ How to Develop for This Docker Project

### 📦 Folder Structure
```
project-root/
│
├── backend/         # FastAPI backend
│   └── src/
│       ├── main.py
│       └── crud/, models/, db/, etc.
│
├── frontend/        # React frontend (Vite)
│   └── src/
│       └── components/, pages/, etc.
│
├── config/          # DB init scripts and env files
│
├── docker-compose.yml
└── README.md
```

### ✏️ Backend Development (FastAPI)
- Make code changes inside `backend/src/`
- Backend auto-reloads via `uvicorn` if `reload=True` is set in `main.py`
- Use the FastAPI Swagger UI to test endpoints: `http://localhost:8000/docs`

### ⚛️ Frontend Development (React)
- Make changes in `frontend/src/`
- Vite provides hot reload on `localhost:3000`

---

## ⚙️ How to Build the Backend with DB & Send Data to Frontend

### 1. **Backend Setup (FastAPI + SQLAlchemy)**

#### ✅ Define Models (`models.py`)
```python
from sqlalchemy import Column, Integer, String
from .db import Base

class Item(Base):
    __tablename__ = 'items'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    description = Column(String)
```

#### ✅ Create CRUD Logic (`crud.py`)
```python
from .models import Item
from .db import SessionLocal

def get_items(db):
    return db.query(Item).all()

def create_item(db, item_data):
    new_item = Item(**item_data)
    db.add(new_item)
    db.commit()
    db.refresh(new_item)
    return new_item
```

#### ✅ API Routes (`main.py`)
```python
from fastapi import FastAPI, Depends
from .db import get_db
from .crud import get_items, create_item
from pydantic import BaseModel

class ItemCreate(BaseModel):
    name: str
    description: str

app = FastAPI()

@app.get("/items/")
def read_items(db=Depends(get_db)):
    return get_items(db)

@app.post("/items/")
def add_item(item: ItemCreate, db=Depends(get_db)):
    return create_item(db, item.dict())
```

### 2. **Frontend Setup (React + Axios)**

#### ✅ Fetch Data from API
```tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function ItemsList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/items/')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} - {item.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemsList;
```

---

## 🧹 Useful Commands

### Stop all containers
```bash
docker-compose down
```

### Rebuild without cache
```bash
docker-compose build --no-cache
```

### Run backend tests (if available)
```bash
docker exec -it backend bash
pytest
```

---

## 📌 Notes
- Make sure `.env` files are set up correctly in both backend and frontend
- Database credentials and connection string should match between FastAPI and PostgreSQL

---

## 🙋‍♂️ Need Help?
Open an issue or contact the repository maintainer.
