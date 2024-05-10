from typing import Type, List
from sqlalchemy.orm import Session, Query
from template_service import TemplateService
from app.repositories.bankinfo_repository import BankInfo


class BankInfoService(TemplateService):
    def __init__(self):
        super().__init__()

    def get_bankinfo_by_owner(self):
        pass

    def get_owner_by_bankinfo(self):
        # likely a super func
        pass

    def update_bankinfo(self):
        pass