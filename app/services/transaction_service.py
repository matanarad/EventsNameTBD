from typing import Type, List

from app.repositories.transaction_repository import Transaction
from app.schemes.transaction_scheme import TransactionCreate
from sqlalchemy.orm import Session, Query

from app.services.template_service import TemplateService


class TransactionsService(TemplateService[Transaction]):
    def __init__(self):
        super().__init__()

    def get_transaction_by_id(self, transaction_id: int) -> Transaction:
        return self.get_record_by(Transaction.transaction_id, transaction_id)

    def get_transactions_by_event_id(self, event_id: str) -> List[Transaction]:
        return self.get_multiple_records_by(Transaction.event_id, event_id)

    def get_transactions_by_user_id(self, user_id: str) -> List[Transaction]:
        return self.get_multiple_records_by(Transaction.user_id, user_id)

    def create_transaction(self, transaction: TransactionCreate):
        # slika
        db_transaction = Transaction(user_id=transaction.user_id,
                                     event_id=transaction.event_id,
                                     amount=transaction.amount,
                                     method=transaction.method,
                                     date=transaction.date,
                                     ticket_type=transaction.ticket_type)
        return super().add_row(db_transaction)
