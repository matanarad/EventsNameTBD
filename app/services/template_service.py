from typing import Type, List, Generic, TypeVar

from sqlalchemy import ColumnElement
from sqlalchemy.orm import Session, Query

from app.repositories.transaction_repository import Transaction
from app.schemes.transaction_scheme import TransactionCreate

T = TypeVar('T')


class TemplateService(Generic[T]):
    def __init__(self):
        self.db = Session()

    def get_all_records(self) -> List[Type[T]]:
        return self.db.query(T).all()

    def get_record_by(self, field: ColumnElement, value) -> T:
        return self.db.query(T).filter(field == value).first()

    def get_multiple_records_by(self, field: ColumnElement, value) -> List[T]:
        return self.db.query(T).filter(field == value).all()

    def add_row(self, row: T):
        self.db.add(row)
        self.db.commit()
        self.db.refresh(row)
        return T

    def remove_row(self, row):
        self.db.delete(row)
        self.db.commit()
        self.db.refresh(row)
        return T
