from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date
from sqlalchemy.orm import relationship

from app.config.database import Base


class BankInfo(Base):
    __tablename__ = "bankinfo"
    id = Column(Integer, primary_key=True)
    bank_info = Column(String, nullable=False)

    owner = relationship("User", back_populates="owner")


