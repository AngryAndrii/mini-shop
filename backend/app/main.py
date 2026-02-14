from typing import List

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session

from app.schemas import (
    ProductResponseScheme,
    ProductReadScheme,
    ProductCreateScheme
)
from app.crud import create_product, get_product_list, remove_product
from app.db.session import get_db
from starlette import status

app = FastAPI()


@app.get("/")
def root():
    return {"message": "Hello World"}


if __name__ == "main":
    root()


@app.get("/products", response_model=List[ProductReadScheme])
def get_all_products(
        db: Session = Depends(get_db)
):
    return get_product_list(db)


@app.post("/products", response_model=ProductResponseScheme)
def add_products(
        product_create: ProductCreateScheme,
        db: Session = Depends(get_db)
):
    return create_product(db, product_create)


@app.delete("/products/{product_id}", response_model=ProductResponseScheme)
def delete_product(product_id: int, db=Depends(get_db)):
    return remove_product(db, product_id)


origins = [
    "http://127.0.0.1:5173",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
