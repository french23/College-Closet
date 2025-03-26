from fastapi import FastAPI
from src.models.user import User
from src.database import engine
from src.routers import users_router, auth_router

# Create tables
User.metadata.create_all(bind=engine)

app = FastAPI()

# Include routers
app.include_router(users_router)
app.include_router(auth_router, prefix="/api/auth")

# Test endpoint
@app.get("/")
def health_check():
    return {"status": "API is healthy"}