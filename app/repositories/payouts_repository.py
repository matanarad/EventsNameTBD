from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DATETIME, FLOAT
from sqlalchemy.orm import relationship

from app.config.database import Base
from enum import Enum


class PayoutState(Enum):
    SUCCESS = 0
    ERROR = 1
class Payout(Base):
    __tablename__ = "payout"
    payout_id = Column(Integer, primary_key=True)
    owner_id = Column(Integer, index=True)
    pay_date = Column(DATETIME)
    amount = Column(FLOAT)
    state = Column(Integer, nullable=False)
    statedescription = Column(String) #bank approval code/fail reason

    owner = relationship("User", back_populates="payouts")



