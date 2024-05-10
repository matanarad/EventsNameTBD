import datetime

from pydantic import BaseModel


class TransactionBase(BaseModel):
    user_id: int
    event_id: int
    state: int
    ticket_type: str
    amount: int
    method: str
    date: datetime.date


class TransactionCreate(TransactionBase):
    pass


class TransactionScheme(TransactionBase):
    id: int

    class Config:
        orm_mode = True
