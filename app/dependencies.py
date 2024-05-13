import json
from enum import Enum

from fastapi import Depends, HTTPException, status
from fastapi.security import SecurityScopes, OAuth2PasswordBearer

from app.config.database import SessionLocal
from app.services.auth_service import Scopes

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="api/login", scopes={'admin': Scopes.ADMIN.value, 'user': Scopes.USER.value, 'guest': Scopes.GUEST.value})


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


async def is_authenticated(scopes: SecurityScopes, token: str = Depends(oauth2_scheme)):
    if scopes.scopes:
        authenticate_value = f'Bearer scope="{scopes.scope_str}"'
    else:
        authenticate_value = "Bearer"
    token_json: dict = json.loads(token)  # need to check if user exists again?
    if token_json['scopes'] not in scopes.scopes:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Unauthorized To Access This Page",
            headers={"WWW-Authenticate": authenticate_value},
        )
    return True
