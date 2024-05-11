from typing import List

from fastapi import APIRouter, Depends

from app.dependencies import get_db
from app.schemes.user_scheme import UserScheme
from app.services.user_service import UserService

router = APIRouter(prefix='/users')

user_service = UserService()


@router.get('/', response_model=List[UserScheme])
async def get_users(db: Depends(get_db)):
    user_service.start_session(db)
    return user_service.get_all_records()
