from sqlalchemy import Boolean, Column, Integer, String, Date
from sqlalchemy.orm import relationship
from app.config.database import Base


class User(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, index=True)
    phone_number = Column(String, unique=True, index=True)
    instagram = Column(String)
    birth_date = Column(Date)
    hashed_password = Column(String)

    binfo = relationship("BankInfo", back_populates="owner")
    managed = relationship("Manager", back_populates="userinfo")
    owned = relationship("Event", back_populates="owner")
    payouts = relationship("Payout", back_populates="owner")
    tickets = relationship("Transaction", back_populates="user")