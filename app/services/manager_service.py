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
        #likely a super func
        pass

    def get_managers_by_event(self):
        # likely a super func
        pass

    def add_manager(self, manager):
        manager_row = Manager(user_id=manager.user_id,
                              event_id=manager.event_id,)
        super().add_row(manager_row)
        return manager_row

    def remove_manager(self, manager):
        manager_row = Manager(user_id=manager.user_id,
                              event_id=manager.event_id, )
        super().remove_row(manager_row)
