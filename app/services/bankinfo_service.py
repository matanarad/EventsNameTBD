from typing import Type, List
from sqlalchemy.orm import Session, Query
from sqlalchemy import update
from template_service import TemplateService
from app.repositories.bankinfo_repository import BankInfo


class BankInfoService(TemplateService):
    def __init__(self):
        super().__init__()

    def get_bankinfo_by_owner(self, owner_id):
        return self.get_record_by(BankInfo.id, owner_id)

    def get_owner_by_bankinfo(self, bank_info):
        return self.get_record_by(BankInfo.bank_info, bank_info)

    def update_bankinfo(self, owner_id: int, new_bankinfo):
        update_cmd = update(BankInfo).filter(BankInfo.id == owner_id).values(new_bankinfo)
        return self.db.execute(update_cmd).all()
