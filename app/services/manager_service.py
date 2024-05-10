from typing import Type, List
from sqlalchemy.orm import Session, Query
from template_service import TemplateService
from app.repositories.manager_repository import Manager


class ManagerService(TemplateService[Manager]):
    def __init__(self):
        super().__init__()

    def get_events_by_manager(self, user_id: int):
        return self.get_multiple_records_by(Manager.user_id, user_id)

    def get_managers_by_event(self, event_id: int):
        return self.get_multiple_records_by(Manager.event_id, event_id)
