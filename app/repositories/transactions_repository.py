from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date
from sqlalchemy.orm import relationship

from .database import Base


class Transaction(Base):
    __tablename__ = "transactions"

    transaction_id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), index=True)
    event_id = Column(Integer, ForeignKey('events.id'), index=True)
    amount = Column(Integer, nullable=False)
    method = Column(String, nullable=False)
    date = Column(Date, nullable=False)
    ticket_type = Column(String, nullable=False)
