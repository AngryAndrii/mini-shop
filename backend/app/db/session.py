from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.core import settings

engine = create_engine(settings.DB_URL, echo=True)
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

# Context manager для використання
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()