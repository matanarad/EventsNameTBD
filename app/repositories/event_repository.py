from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DATETIME
from sqlalchemy.orm import relationship

from .database import Base


class Event(Base):
    __tablename__ = "event"
    event_id = Column(Integer, primary_key=True, index=True)
    creation_date = Column(DATETIME, nullable=False)
    event_date = Column(DATETIME, nullable=False, index=True)
    title = Column(DATETIME, nullable=False, index=True)
    description = Column(String, nullable=False)
    eventphoto_id = Column(Integer, nullable=False, default=0)
    owner_id = Column(Integer, nullable=False, index=True)
    payed_out = Column(Boolean, default=False)