from sqlalchemy import Column, Integer, String, DATETIME

from app.config.database import Base


class Event(Base):
    __tablename__ = "event"
    event_id = Column(Integer, primary_key=True, index=True)
    creator_id = Column(Integer, nullable=False, index=True)
    creation_date = Column(DATETIME, nullable=False)
    event_date = Column(DATETIME, nullable=False, index=True)
    Title = Column(DATETIME, nullable=False, index=True)
    description = Column(String, nullable=False)
    eventphoto_id = Column(Integer, nullable=False, default="/photopath/default.png")
