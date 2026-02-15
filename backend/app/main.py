from typing import List

from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session, Query

from app.schemas import (
    ProductResponseScheme,
    ProductReadScheme,
    ProductCreateScheme
)
from app.crud import (
    create_product,
    get_product_list,
    remove_product,
    get_product_by_id
)
from app.db.session import get_db

from crud import search_by_name

app = FastAPI()


@app.get("/")
def root():
    return {"message": "mini shop project"}


@app.get("/products/{product_id}", response_model=ProductReadScheme)
def get_one_product(
        product_id: int,
        db: Session = Depends(get_db)
):
    return get_product_by_id(db, product_id)


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
def delete_product(product_id: int, db: Session = Depends(get_db)):
    return remove_product(db, product_id)


@app.get("/products/search", response_model=List[ProductReadScheme])
def search_products(
    name: str = Query(..., min_length=1),
    db: Session = Depends(get_db)
):
    products = search_by_name(db, name)

    return products

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

if __name__ == "main":
    root()
