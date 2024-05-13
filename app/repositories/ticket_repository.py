from sqlalchemy import Column, Integer, String, DATETIME
from sqlalchemy.orm import relationship
from app.config.database import Base


class Ticket(Base):
    __tablename__ = "ticket"
    ticket_id = Column(Integer, primary_key=True, index=True)
    event_id = Column(Integer, nullable=False, index=True)
    from_date = Column(DATETIME, nullable=False)
    to_date = Column(DATETIME, nullable=False)
    title = Column(String, nullable=False)
    description = Column(String, nullable=True)
    max_buyers = Column(Integer, nullable=True)

    matched_event = relationship("Event", back_populates="tickets")
    buyers = relationship("Transaction", back_populates="ticket")
