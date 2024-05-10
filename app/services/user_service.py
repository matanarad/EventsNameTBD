from typing import Type

from app.repositories.user_repository import User
from app.schemes.user_scheme import UserScheme, UserCreate
from sqlalchemy.orm import Session, Query


class UserService:
    def __init__(self):
        self.db = Session()

    def get_users(self):
        return self.db.query(User).all()

    def get_user_by_id(self, user_id: int) -> Type[User]:
        query: Query[Type[User]] = self.db.query(User).filter(User.id == user_id)
        return query.first()

    def get_user_by_email(self, email: str) -> Type[User]:
        query: Query[Type[User]] = self.db.query(User).filter(User.email == email)
        return query.first()

    def get_user_by_phone_number(self, phone_number: str) -> Type[User]:
        query: Query[Type[User]] = self.db.query(User).filter(User.phone_number == phone_number)
        return query.first()

    def is_user_manager(self, user_id: int) -> bool:
        query: Query[Type[User]] = self.db.query(User).filter(User.id == user_id)
        return query.first().is_manager

    def create_user(self, user: UserCreate):
        db_user = User(email=user.email, phone_number=user.phone_number, instagram=user.instagram,
                       is_manager=user.is_manager, birth_date=user.birth_date)
        self.db.add(db_user)
        self.db.commit()
        self.db.refresh(db_user)
        return db_user

    def get_purchase_list(self, user_id):
        pass
