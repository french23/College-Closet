from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# You can define origins later or pull them from environment
origins = ["*"]

app = FastAPI(
    title="My FastAPI Backend",
    description="This is a backend API for our fullstack project",
    version="0.1.0",
)

# CORS setup (helpful if frontend is on a different port/domain)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check route
@app.get("/")
async def root():
    return {"message": "Backend is up and running 🚀"}

# Example dynamic route
@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "query": q}

