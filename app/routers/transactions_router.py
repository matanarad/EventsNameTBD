from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.dependencies import get_db
from app.schemes.transaction_scheme import TransactionCreate, TransactionScheme
from app.services.transaction_service import TransactionsService

router = APIRouter(prefix='/api/transactions')

transaction_service = TransactionsService()


@router.get('/', response_model=List[TransactionScheme])
async def get_transactions(db: Session = Depends(get_db)):
    transaction_service.start_session(db)
    return transaction_service.get_all_records()


@router.post('/', response_model=TransactionScheme)
async def create_transaction(new_transaction: TransactionCreate, db: Session = Depends(get_db)):
    transaction_service.start_session(db)
    return transaction_service.create_transaction(new_transaction)


@router.get('/by', response_model=TransactionScheme)
async def get_transaction_by(db: Session = Depends(get_db), transaction_id: int = 0, event_id: int = 0,
                             user_id: int = 0):
    transaction_service.start_session(db)
    if transaction_id:
        return transaction_service.get_transaction_by_id(transaction_id)
    if event_id:
        return transaction_service.get_transactions_by_event_id(event_id)
    if user_id:
        return transaction_service.get_transactions_by_user_id(user_id)
    return None
