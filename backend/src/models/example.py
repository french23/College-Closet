# models/example_model.py

from pydantic import BaseModel
from typing import Optional

class ExampleItem(BaseModel):
    id: int
    name: str
    description: Optional[str] = None
    is_active: bool = True

