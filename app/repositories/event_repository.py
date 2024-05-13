from sqlalchemy import Column, Integer, String, DATETIME, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from app.config.database import Base


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

    owner = relationship("User", back_populates="owned")
    managers = relationship("Manager", back_populates="event")
    tickets = relationship("Ticket", back_populates="matched_event")
    transactions = relationship("Transaction", back_populates="event")