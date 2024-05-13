from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date
from sqlalchemy.orm import relationship

from app.config.database import Base
from app.repositories.event_repository import Event
from app.repositories.user_repository import User


class Manager(Base):
    __tablename__ = "manager"

    user_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    event_id = Column(Integer, ForeignKey("events.id"), nullable=False)

    user_info: User = relationship("User", back_populates="managed")
    event: Event = relationship("Event", "managers")
