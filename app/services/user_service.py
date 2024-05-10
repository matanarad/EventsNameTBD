from typing import Type

from app.repositories.user_repository import User
from app.schemes.user_scheme import UserScheme, UserCreate
from sqlalchemy.orm import Session, Query

from app.services.template_service import TemplateService


class UserService(TemplateService[User]):
    def __init__(self):
        super().__init__()

    def get_user_by_id(self, user_id: int) -> Type[User]:
        query: Query[Type[User]] = self.db.query(User).filter(User.id == user_id)
        return query.first()

    def get_user_by_email(self, email: str) -> Type[User]:
        query: Query[Type[User]] = self.db.query(User).filter(User.email == email)
        return query.first()

    def get_user_by_phone_number(self, phone_number: str) -> Type[User]:
        query: Query[Type[User]] = self.db.query(User).filter(User.phone_number == phone_number)
        return query.first()

    def create_user(self, user: UserCreate):
        db_user = User(email=user.email, phone_number=user.phone_number, instagram=user.instagram,
                       is_manager=user.is_manager, birth_date=user.birth_date)
        return super().add_row(db_user)

    def get_purchase_list(self, user_id):
        pass
