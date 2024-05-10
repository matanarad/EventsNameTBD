from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date
from sqlalchemy.orm import relationship

from .database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, index=True)
    phone_number = Column(String, unique=True, index=True)
    instagram = Column(String)
    birth_date = Column(Date)
    hashed_password = Column(String)
    is_manager = Column(Boolean, default=True)

    items = relationship("Item", back_populates="owner")