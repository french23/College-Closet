# routers/example.py

from fastapi import APIRouter, HTTPException
from typing import List
from models.example_model import ExampleItem

router = APIRouter(
    prefix="/examples",
    tags=["examples"],
)

# Fake in-memory "database"
fake_db: List[ExampleItem] = [
    ExampleItem(id=1, name="Item One", description="First item"),
    ExampleItem(id=2, name="Item Two", is_active=False),
]


@router.get("/", response_model=List[ExampleItem])
def get_all_examples():
    return fake_db


@router.get("/{item_id}", response_model=ExampleItem)
def get_example(item_id: int):
    for item in fake_db:
        if item.id == item_id:
            return item
    raise HTTPException(status_code=404, detail="Item not found")


@router.post("/", response_model=ExampleItem, status_code=201)
def create_example(item: ExampleItem):
    fake_db.append(item)
    return item

