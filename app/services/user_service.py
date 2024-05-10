from typing import Type

from app.repositories.user_repository import User
from app.schemes.user_scheme import UserScheme, UserCreate
from sqlalchemy.orm import Session, Query

from app.services.template_service import TemplateService


class UserService(TemplateService[User]):
    def __init__(self):
        super().__init__()

    def get_user_by_id(self, user_id: int) -> User:
        return self.get_record_by(User.id, user_id)

    def get_user_by_email(self, email: str) -> User:
        return self.get_record_by(User.email, email)

    def get_user_by_phone_number(self, phone_number: str) -> User:
        return self.get_record_by(User.phone_number, phone_number)

    def create_user(self, user: UserCreate):
        db_user = User(email=user.email, phone_number=user.phone_number, instagram=user.instagram,
                       is_manager=user.is_manager, birth_date=user.birth_date)
        return super().add_row(db_user)

    def get_purchase_list(self, user_id):
        pass

