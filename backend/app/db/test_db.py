from sqlalchemy import create_engine, text
from app.core import settings


def test_db_connection():
    engine = create_engine(settings.DB_URL, echo=True)
    try:
        with engine.connect() as conn:
            result = conn.execute(text("SELECT 1"))
            print("DB CONNECTED:", result.scalar())
    except Exception as e:
        print("FAILED:", e)

if __name__ == "__main__":
    test_db_connection()
