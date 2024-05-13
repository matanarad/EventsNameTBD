from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.dependencies import get_db
from app.schemes.user_scheme import UserScheme, UserCreate
from app.services.user_service import UserService

router = APIRouter(prefix='/api/users')

user_service = UserService()


@router.get('/', response_model=List[UserScheme])
async def get_users(db: Session = Depends(get_db)):
    user_service.start_session(db)
    return user_service.get_all_records()


@router.post('/', response_model=UserScheme)
async def create_user(new_user: UserCreate, db: Session = Depends(get_db)):
    user_service.start_session(db)
    return user_service.create_user(new_user)


@router.get('/by', response_model=UserScheme)
async def get_user_by(db: Session = Depends(get_db), user_id: int = 0, email: str = '', phone_number: str = ''):
    user_service.start_session(db)
    if user_id:
        return user_service.get_user_by_id(user_id)
    if email:
        return user_service.get_user_by_email(email)
    if phone_number:
        return user_service.get_user_by_phone_number(phone_number)
    return None


@router.get('/purchases/{user_id}', response_model=UserScheme)
async def get_user_purchases(user_id, db: Session = Depends(get_db)):
    user_service.start_session(db)
    return user_service.get_purchase_list(user_id)
