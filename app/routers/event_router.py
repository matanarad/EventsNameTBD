from typing import List

from fastapi import APIRouter, Depends

from app.dependencies import get_db
from app.schemes.event_scheme import EventCreate, EventScheme
from app.services.event_service import EventService

router = APIRouter(prefix='/events')

event_service = EventService()


@router.get('/', response_model=List[EventScheme])
async def get_events(db: Depends(get_db)):
    event_service.start_session(db)
    return event_service.get_all_records()


@router.post('/', response_model=EventScheme)
async def create_event(new_event: EventCreate, db: Depends(get_db)):
    event_service.start_session(db)
    return event_service.create_event(new_event)


@router.get('/by', response_model=EventScheme)
async def get_event_by(event_id, owner, location, title, description, db: Depends(get_db)):
    event_service.start_session(db)
    if event_id:
        return event_service.get_event_by_id(event_id)
    if location:
        return event_service.get_events_by_location(location)
    if description:
        return event_service.get_events_by_description(description)
    if owner:
        return event_service.get_events_by_owner(owner)
    if title:
        return event_service.get_events_by_title(title)
    return None


@router.post('/trending', response_model=List[EventScheme])
async def get_trending_events(db: Depends(get_db)):
    event_service.start_session(db)
    return event_service.get_top_trending()
