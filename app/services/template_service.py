from typing import Type, List, Generic, TypeVar
from sqlalchemy.orm import Session, Query

from app.repositories.transaction_repository import Transaction
from app.schemes.transaction_scheme import TransactionCreate

T = TypeVar('T')
TCS = TypeVar('TCS')
TSS = TypeVar('TSS')


class TemplateService(Generic[T, TCS, TSS]):
    def __init__(self):
        self.db = Session()

    def get_all_records(self) -> List[Type[T]]:
        return self.db.query(T).all()

