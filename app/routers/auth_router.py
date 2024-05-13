from enum import Enum
from hashlib import sha1

from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm, OAuth2PasswordBearer

from app.services.user_service import UserService
from app.utils.jwt_token import Jwt

router = APIRouter(prefix='/api/login')

event_service = AuthService()
user_service = UserService()
jwt = Jwt(15, '09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7')  # key need to move


class Scopes(Enum):
    USER = 'user'
    ADMIN = 'user'
    GUEST = 'guest'


oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="api/login", scopes={'admin': Scopes.ADMIN.value, 'user': Scopes.USER.value, 'guest': Scopes.GUEST.value})


@router.post('/', dependencies=[])
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = user_service.get_user_by_email(form_data.username)
    if not user:
        raise HTTPException(
            status_code=400, detail="Incorrect username or password")
    if sha1(form_data.password) != user.hashed_password:
        raise HTTPException(
            status_code=400, detail="Incorrect username or password")
    scope = Scopes.USER
    if user.admin:
        scope = Scopes.ADMIN
    access_token = jwt.create_access_token(
        {"access_token": {"sub": user.username, "scopes": scope}})
    return {'access_token': access_token, "token_type": "bearer"}
