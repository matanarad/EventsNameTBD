from typing import Type, List
from sqlalchemy.orm import Session, Query
from template_service import TemplateService
from app.repositories.manager_repository import Manager


class ManagerService(TemplateService):
    def __init__(self):
        super().__init__()

    def get_events_by_manager(self):
        #likely a super func
        pass

    def get_managers_by_event(self):
        # likely a super func
        pass