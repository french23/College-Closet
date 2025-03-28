from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .user import User  # If you need referencing, not strictly required
from src.database import Base

class Item(Base):
    __tablename__ = "items"

    itemid = Column(Integer, primary_key=True, index=True)
    userid = Column(Integer, ForeignKey("users.id"))  # "users.id" references user.py
    name = Column(String(50), nullable=False)
    text = Column(String(300), nullable=True)

    # Relationship back to user (optional, if you want to query user info)
    owner = relationship("User", backref="items")

