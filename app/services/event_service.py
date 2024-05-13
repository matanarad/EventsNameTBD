from app.repositories.event_repository import Event
from app.schemes.event_scheme import EventCreate
from app.services.template_service import TemplateService


class EventService(TemplateService[Event]):
    def __init__(self):
        super().__init__()

    def get_event_by_id(self, event_id: int) -> Event:
        return self.get_record_by(Event.id, event_id)

    def get_events_by_location(self, location: str) -> list[Event]:
        return self.get_multiple_records_by(Event.location, location)

    def get_events_by_title(self, title: str) -> list[Event]:
        return self.get_multiple_records_by(Event.title, title)

    def get_events_by_description(self, description: str) -> list[Event]:
        return self.get_multiple_records_by(Event.description, description)

    def create_event(self, event: EventCreate):
        db_event = Event(email=event.email, phone_number=event.phone_number, instagram=event.instagram,
                         is_manager=event.is_manager, birth_date=event.birth_date)
        return super().add_row(db_event)

    def get_purchase_list(self, event_id):
        pass
