from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.database import engine, Base
from src.models.user import User
from src.models.item import Item  # import all models here
from src.routers import users_router, auth_router, items

# Create *all* tables at once
Base.metadata.create_all(bind=engine)

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routers
app.include_router(users_router)
app.include_router(auth_router, prefix="/api/auth")
app.include_router(items.items_router)

@app.get("/")
def health_check():
    return {"status": "API is healthy"}
