import datetime

from pydantic import BaseModel


class TicketBase(BaseModel):
    event_id: int
    from_date: datetime.datetime
    to_date: datetime.datetime
    title: str
    description: str
    max_buyers: int


class TicketCreate(TicketBase):
    pass


class TicketScheme(TicketBase):
    ticket_id: int

    class Config:
        orm_mode = True


class OutTicket(TicketScheme):
    sold: int
