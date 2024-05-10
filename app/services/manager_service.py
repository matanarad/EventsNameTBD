from typing import Type, List
from sqlalchemy.orm import Session, Query
from template_service import TemplateService

from app.repositories.transaction_repository import Transaction
from app.schemes.transaction_scheme import TransactionCreate

from app.repositories.manager_repository import Manager


class ManagerService(TemplateService):
    def __init__(self):
        super().__init__()
        self.table = Manager

    def get_events_by_manager(self):
        pass

    def get_managers_by_event(self):
        pass

    def add_manager(self, manager:AddManager):
        # slika
        manager_row = Manager(user_id=transaction.user_id,
                              event_id=transaction.event_id,)
        self.db.add(manager_row)
        self.db.commit()
        self.db.refresh(manager_row)
        return manager_row

    def get_purchase_list(self, transaction_id):
        pass
