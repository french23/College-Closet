from fastapi import FastAPI
from src.models.user import User
from src.database import engine
from fastapi.middleware.cors import CORSMiddleware
from src.routers import users_router, auth_router

# Create tables
User.metadata.create_all(bind=engine)

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Your React frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(users_router)
app.include_router(auth_router, prefix="/api/auth")

# Test endpoint
@app.get("/")
def health_check():
    return {"status": "API is healthy"}