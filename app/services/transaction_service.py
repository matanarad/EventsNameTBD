from typing import Type, List

from app.repositories.transaction_repository import Transaction
from app.schemes.transaction_scheme import TransactionCreate
from sqlalchemy.orm import Session, Query

from app.services.template_service import TemplateService


class TransactionsService(TemplateService[Transaction]):
    def __init__(self):
        super().__init__()

    def get_transaction_by_id(self, transaction_id: int) -> Type[Transaction]:
        query: Query[Type[Transaction]] = self.db.query(Transaction).filter(Transaction.id == transaction_id)
        return query.first()

    def get_transactions_by_event_id(self, event_id: str) -> List[Type[Transaction]]:
        query: Query[Type[Transaction]] = self.db.query(Transaction).filter(Transaction.event_id == event_id)
        return query.all()

    def get_transactions_by_user_id(self, user_id: str) -> List[Type[Transaction]]:
        query: Query[Type[Transaction]] = self.db.query(Transaction).filter(Transaction.user_id == user_id)
        return query.all()

    def create_transaction(self, transaction: TransactionCreate):
        # slika
        db_transaction = Transaction(user_id=transaction.user_id,
                                     event_id=transaction.event_id,
                                     amount=transaction.amount,
                                     method=transaction.method,
                                     date=transaction.date,
                                     ticket_type=transaction.ticket_type)
        return super().add_row(db_transaction)

    def get_purchase_list(self, transaction_id):
        pass
