from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date
from sqlalchemy.orm import relationship

from app.config.database import Base


class Manager(Base):
    __tablename__ = "manager"

    user_id = Column(Integer, ForeignKey("users.id"), primary_key=True)
    event_id = Column(Integer, ForeignKey("events.id"), nullable=False)

    user_info = relationship("User", back_populates="managed")
    event = relationship("Event", "managers")
