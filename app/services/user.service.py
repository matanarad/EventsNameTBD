from typing import Type

from app.repositories.user_repository import User
from sqlalchemy.orm import Session, Query


class UserService:
    def __init__(self):
        self.db = Session()

    def get_users(self):
        return self.db.query(User).all()

    def get_user_by_id(self, user_id: int) -> Type[User]:
        query: Query[Type[User]] = self.db.query(User).filter(User.id == user_id)
        return query.first()

    def is_user_manager(self, user_id: int) -> bool:
        query: Query[Type[User]] = self.db.query(User).filter(User.id == user_id)
        return query.first().is_manager

    def get_purchase_list(self, user_id):
        pass

