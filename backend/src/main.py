from fastapi import FastAPI
from .routers import example  # or from src.routers if needed

app = FastAPI()

app.include_router(example.router)
