from enum import Enum

from sqlalchemy import Column, ForeignKey, Integer, String, Date

from app.config.database import Base


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
    ticket_id = Column(Integer, ForeignKey('tickets.ticket_id'), nullable=False)
    state = Column(Integer, index=True)
    method = Column(String, nullable=False)
    date = Column(Date, nullable=False)
