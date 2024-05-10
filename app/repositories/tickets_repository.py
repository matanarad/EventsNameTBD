from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DATETIME
from sqlalchemy.orm import relationship

from .database import Base


class Tickets(Base):
    __tablename__ = "tickets"
    ticket_id = Column(Integer, primary_key=True, index=True)
    event_id = Column(Integer, nullable=False, index=True)
    from_date = Column(DATETIME, nullable=False)
    to_date = Column(DATETIME, nullable=False)
    title = Column(String, nullable=False)
    description = Column(String, nullable=True)