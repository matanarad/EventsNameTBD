from sqlalchemy import Column, Integer, String, DATETIME, Boolean

from app.config.database import Base


class Event(Base):
    __tablename__ = "event"
    event_id = Column(Integer, primary_key=True, index=True)
    creation_date = Column(DATETIME, nullable=False)
    event_date = Column(DATETIME, nullable=False, index=True)
    title = Column(DATETIME, nullable=False, index=True)
    description = Column(String, nullable=False)
    location = Column(String, nullable=True)
    eventphoto_id = Column(Integer, nullable=False, default=0)
    owner_id = Column(Integer, nullable=False, index=True)
    payed_out = Column(Boolean, default=False)
