from typing import List

from app.repositories.transaction_repository import Transaction
from app.schemes.transaction_scheme import TransactionCreate
from app.services.template_service import TemplateService


class TransactionsService(TemplateService[Transaction]):
    def __init__(self):
        super().__init__()

    def get_transaction_by_id(self, transaction_id: int) -> Transaction:
        return self.get_record_by(Transaction.transaction_id, transaction_id)

    def get_transactions_by_event_id(self, event_id: int) -> List[Transaction]:
        return self.get_multiple_records_by(Transaction.event_id, event_id)

    def get_transactions_by_user_id(self, user_id: int) -> List[Transaction]:
        return self.get_multiple_records_by(Transaction.user_id, user_id)

    def create_transaction(self, transaction: TransactionCreate):
        # slika
        db_transaction = Transaction(user_id=transaction.user_id,
                                     event_id=transaction.event_id,
                                     method=transaction.method,
                                     state=transaction.state,
                                     date=transaction.date,
                                     ticket_id=transaction.ticket_id)
        return super().add_row(db_transaction)
