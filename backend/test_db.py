from dotenv import load_dotenv
from sqlalchemy import create_engine, text
import os

load_dotenv()
db_url = os.environ.get("DB_URL")

engine = create_engine(db_url)

try:
    with engine.connect() as conn:
        result = conn.execute(text("SELECT 1"))
        print("DB CONNECTED:", result.scalar())
except Exception as e:
    print("FAILED:", e)