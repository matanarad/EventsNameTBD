from typing import Type, List
from sqlalchemy.orm import Session, Query

from app.repositories.transaction_repository import Transaction
from app.schemes.transaction_scheme import TransactionCreate


class TemplateService:
    def __init__(self):
        self.db = Session()
        self.table = ""
    def get_full_table(self):
        return self.db.query(self.table).all()
    def add_row(self):
        pass
