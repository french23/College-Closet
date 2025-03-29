import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

#DATABASE_URL = (
#    "postgresql://admin:secret@127.0.0.1:5432/mydatabase"
#)

DATABASE_URL = os.getenv('DATABASE_URL', 'postgresql://admin:secret@db:5432/mydatabase')


engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Add this function (was missing)
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()