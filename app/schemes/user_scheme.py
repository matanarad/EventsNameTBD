from pydantic import BaseModel


class UserBase(BaseModel):
    email: str
    phone_number: str
    instagram: str
    birth_date: str
    is_manager: bool


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int

    class Config:
        orm_mode = True
