from app.repositories.event_repository import Event
from app.schemes.event_scheme import EventCreate
from app.services.template_service import TemplateService


class EventService(TemplateService[Event]):
    def __init__(self):
        super().__init__()

    def get_event_by_id(self, event_id: int) -> Event:
        return self.get_record_by(Event.id, event_id)

    def get_events_by_owner(self, owner: str) -> list[Event]:
        return self.get_multiple_records_by(Event.location, owner)

    def get_events_by_location(self, location: str) -> list[Event]:
        return self.get_multiple_records_by(Event.location, location)

    def get_events_by_title(self, title: str) -> list[Event]:
        return self.get_multiple_records_by(Event.title, title)

    def get_events_by_description(self, description: str) -> list[Event]:
        return self.get_multiple_records_by(Event.description, description)

    def create_event(self, event: EventCreate):
        db_event = Event(creation_date=event.creation_date,
                         event_date=event.event_date,
                         title=event.title,
                         description=event.description,
                         location=event.location,
                         eventphoto_id=event.eventphoto_id,
                         owner_id=event.owner_id,
                         payed_out=event.payed_out,
                         visits=event.visits)
        return super().add_row(db_event)

    def get_top_trending(self):
        return self.db.query(Event).limit(50).order_by(Event.visits).all()
