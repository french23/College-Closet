from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List

from src.database import get_db
from src.models.item import Item
from src.routers.auth import get_current_user  # so we can require a logged-in user
from src.models.user import User


# ---------------------------------------------------------
# Router Initialization
# ---------------------------------------------------------

items_router = APIRouter(
    prefix="/api/items",
    tags=["Items"]
)


# ---------------------------------------------------------
# Pydantic Schemas
# ---------------------------------------------------------

class ItemCreate(BaseModel):
    name: str
    text: str | None = None


class ItemResponse(BaseModel):
    itemid: int
    userid: int
    name: str
    text: str | None

    class Config:
        orm_mode = True


# ---------------------------------------------------------
# POST /api/items (CREATE NEW ITEM, requires login)
# ---------------------------------------------------------

@items_router.post("/", response_model=ItemResponse, status_code=status.HTTP_201_CREATED)
def create_item(
    item_data: ItemCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    # current_user is provided by token auth
    # user must be logged in to create items

    new_item = Item(
        userid=current_user.id,
        name=item_data.name,
        text=item_data.text
    )
    db.add(new_item)
    db.commit()
    db.refresh(new_item)

    return new_item


# ---------------------------------------------------------
# GET /api/items (FETCH ALL ITEMS, public)
# ---------------------------------------------------------

@items_router.get("/", response_model=List[ItemResponse])
def get_all_items(db: Session = Depends(get_db)):
    items = db.query(Item).all()
    return items

