from sqlalchemy import Boolean, Column, Integer, String, Date
from sqlalchemy.orm import relationship
from typing import List

from app.config.database import Base
from app.repositories.bankinfo_repository import BankInfo
from app.repositories.event_repository import Event
from app.repositories.manager_repository import Manager
from app.repositories.payouts_repository import Payout
from app.repositories.transaction_repository import Transaction


class User(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, index=True)
    phone_number = Column(String, unique=True, index=True)
    instagram = Column(String)
    birth_date = Column(Date)
    hashed_password = Column(String)

    binfo: BankInfo = relationship("BankInfo", back_populates="owner")
    managed: Manager = relationship("Manager", back_populates="userinfo")
    owned: Event = relationship("Event", back_populates="owner")
    payouts: List[Payout] = relationship("Payout", back_populates="owner")
