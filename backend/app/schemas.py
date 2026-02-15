from decimal import Decimal

from pydantic import BaseModel, Field, ConfigDict


class ProductScheme(BaseModel):
    id: int
    name: str
    description: str
    price: Decimal = Field(gt=0)
    stock: int
    category: str
    image: str

class ProductReadScheme(BaseModel):
    id: int
    name: str
    description: str
    price: Decimal = Field(gt=0)
    stock: int
    category: str
    image: str

    model_config = ConfigDict(from_attributes=True)

class ProductCreateScheme(BaseModel):
    name: str
    description: str
    price: Decimal = Field(gt=0)
    stock: int
    category: str
    image: str

class ProductResponseScheme(BaseModel):
    id: int
    name: str
    price: float

    model_config = ConfigDict(from_attributes=True)