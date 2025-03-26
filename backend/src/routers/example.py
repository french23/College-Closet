from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import SessionLocal  # note the relative import
from ..models.example import User

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/users")
def get_users(db: Session = Depends(get_db)):
    return db.query(User).all()
