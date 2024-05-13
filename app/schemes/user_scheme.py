import datetime

from pydantic import BaseModel


class UserBase(BaseModel):
    email: str
    phone_number: str
    instagram: str
    birth_date: datetime.date


class UserCreate(UserBase):
    password: str


class UserScheme(UserBase):
    id: int

    class Config:
        orm_mode = True
