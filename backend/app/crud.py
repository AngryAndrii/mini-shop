from fastapi import HTTPException
from sqlalchemy import select, delete
from sqlalchemy.orm import Session

from app.schemas import ProductCreateScheme
from app.models import Product


def get_product_list(db: Session):
    result = db.scalars(select(Product))
    return list(result.all())


def create_product(db: Session, product: ProductCreateScheme) -> Product:
    db_product = Product(**product.model_dump())

    db.add(db_product)
    db.commit()
    db.refresh(db_product)

    return db_product


def remove_product(db: Session, product_id: int):
    product = db.get(Product, product_id)

    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    db.delete(product)
    db.commit()

    return product
