import datetime

from pydantic import BaseModel


class EventBase(BaseModel):
    creation_date: datetime.datetime
    event_date: datetime.datetime
    title: str
    description: str
    location: str
    eventphoto_id: int
    owner_id: int
    payed_out: bool
    visits: int
    public: bool


class EventCreate(EventBase):
    password: str


class EventScheme(EventBase):
    id: int

    class Config:
        orm_mode = True
