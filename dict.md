repository - data
schemes - objects with parts of a table, makes creating and sending data easier
service - queries ("get user by_id")
routers - url link logic

DBs:

Event : event_id, event_info
User : user_id, is_manager, personal_event_info
BankInfo : user_id, bank_info
Payouts : user_id, pay_date, amount, status
Transactions : transaction_id, user_id, event_id, amount, ticket_type, transaction_method, date
Ticket : event_id, price, date_from, date_until, event_date
Event/User (manager) : event_id, user_id
