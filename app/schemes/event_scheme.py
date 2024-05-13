import datetime

from pydantic import BaseModel


class EventBase(BaseModel):
    email: str
    phone_number: str
    instagram: str
    birth_date: datetime.date
    is_manager: bool


class EventCreate(EventBase):
    password: str


class EventScheme(EventBase):
    id: int

    class Config:
        orm_mode = True
