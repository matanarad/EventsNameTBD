from typing import List

from sqlalchemy import Column, Integer, String, DATETIME, Boolean, ForeignKey
from sqlalchemy.orm import relationship

from app.config.database import Base
from app.repositories.manager_repository import Manager
from app.repositories.ticket_repository import Ticket
from app.repositories.transaction_repository import Transaction
from app.repositories.user_repository import User


class Event(Base):
    __tablename__ = "events"
    event_id = Column(Integer, primary_key=True, index=True)
    creation_date = Column(DATETIME, nullable=False)
    event_date = Column(DATETIME, nullable=False, index=True)
    title = Column(DATETIME, nullable=False, index=True)
    description = Column(String, nullable=False)
    location = Column(String, nullable=True)
    eventphoto_id = Column(Integer, nullable=False, default=0)
    owner_id = Column(Integer, ForeignKey("user.id"), nullable=False, index=True)
    payed_out = Column(Boolean, default=False)
    visits = Column(Integer, default=0)
    public = Column(Boolean, default=True)

    owner: User = relationship("User", back_populates="owned")
    managers: List[Manager] = relationship("Manager", back_populates="event")
    tickets: List[Ticket] = relationship("Ticket", back_populates="matched_event")
    transactions: List[Transaction] = relationship("Transaction", back_populates="event")
