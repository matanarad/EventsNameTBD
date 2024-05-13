from app.repositories.ticket_repository import Ticket
from app.schemes.ticket_scheme import TicketCreate, OutTicket
from app.services.template_service import TemplateService


class TicketService(TemplateService[Ticket]):
    def __init__(self):
        super().__init__()

    def get_ticket_by_id(self, ticket_id: int) -> Ticket:
        return self.get_record_by(Ticket.ticket_id, ticket_id)

    def get_tickets_by_event(self, event_id: str) -> list[OutTicket]:
        # need to append relations between ticket and transaction and add a number of sold tickets to the return
        return self.get_multiple_records_by(Ticket.event_id, event_id)

    def get_tickets_by_title(self, title: str) -> list[Ticket]:
        return self.get_multiple_records_by(Ticket.title, title)

    def get_tickets_by_description(self, description: str) -> list[Ticket]:
        return self.get_multiple_records_by(Ticket.description, description)

    def create_ticket(self, ticket: TicketCreate):
        db_ticket = Ticket(creation_date=ticket.creation_date,
                           ticket_date=ticket.ticket_date,
                           title=ticket.title,
                           description=ticket.description,
                           location=ticket.location,
                           ticketphoto_id=ticket.ticketphoto_id,
                           owner_id=ticket.owner_id,
                           payed_out=ticket.payed_out,
                           visits=ticket.visits)
        return super().add_row(db_ticket)

    def get_top_trending(self):
        return self.db.query(Ticket).limit(50).order_by(Ticket.visits).all()
