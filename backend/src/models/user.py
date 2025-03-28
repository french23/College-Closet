from sqlalchemy import Column, Integer, String
from pydantic import BaseModel, EmailStr
from src.database import Base



# SQLAlchemy Model
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False, unique=True)
    password = Column(String(255), nullable=False)

# Pydantic Models
class UserBase(BaseModel):
    email: EmailStr
    name: str

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    
    class Config:
        from_attributes = True  # Updated from orm_mode in Pydantic v2
        json_schema_extra = {
            "example": {
                "id": 1,
                "name": "Test User",
                "email": "test@example.com"
            }
        }

class UserInDB(User):
    class Config:
        from_attributes = True