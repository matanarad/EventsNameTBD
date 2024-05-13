from typing import List

from fastapi import APIRouter, Depends

from app.dependencies import get_db
from app.schemes.transaction_scheme import TransactionCreate, TransactionScheme
from app.services.transaction_service import TransactionsService

router = APIRouter(prefix='/transactions')

transaction_service = TransactionsService()


@router.get('/', response_model=List[TransactionScheme])
async def get_transactions(db: Depends(get_db)):
    transaction_service.start_session(db)
    return transaction_service.get_all_records()


@router.post('/', response_model=TransactionScheme)
async def create_transaction(new_transaction: TransactionCreate, db: Depends(get_db)):
    transaction_service.start_session(db)
    return transaction_service.create_transaction(new_transaction)


@router.get('/by', response_model=TransactionScheme)
async def get_transaction_by(transaction_id, event_id, user_id, db: Depends(get_db)):
    transaction_service.start_session(db)
    if transaction_id:
        return transaction_service.get_transaction_by_id(transaction_id)
    if event_id:
        return transaction_service.get_transactions_by_event_id(event_id)
    if user_id:
        return transaction_service.get_transactions_by_user_id(user_id)
    return None


@router.get('/purchases/{transaction_id}', response_model=TransactionScheme)
async def get_transaction_purchases(transaction_id, db: Depends(get_db)):
    transaction_service.start_session(db)
    return transaction_service.get_purchase_list(transaction_id)
