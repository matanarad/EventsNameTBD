from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date
from sqlalchemy.orm import relationship

from app.config.database import Base


class Manager(Base):
    __tablename__ = "manager"

    user_id = Column(Integer, primary_key=True)
    event_id = Column(Integer, nullable=False)

