from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date
from sqlalchemy.orm import relationship

from .database import Base
from enum import Enum


class TransactionState(Enum):
    APPROVED = 1
    WAITING = 2
    CANCELLED = 3
    DECLINED = 4
    ERROR = 5


class Transaction(Base):
    __tablename__ = "transactions"

    transaction_id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), index=True)
    event_id = Column(Integer, ForeignKey('events.id'), index=True)
    state = Column(Integer, index=True)
    amount = Column(Integer, nullable=False)
    method = Column(String, nullable=False)
    date = Column(Date, nullable=False)
    ticket_type = Column(String, nullable=False)
