# application routes

## users

- GET: /users/
- POST: /users/
- UPDATE: /users/{user_id} {'field':value}
- GET: /users/by?param
- GET: /users/purchases/{user_id}

## events

- GET: /events/
- POST: /events/
- UPDATE: /events/{event_id} {'field':value}
- GET: /events/by?param
- GET: /events/trending

## transactions

- GET: /transactions/
- POST: /transactions/
    - credit info will be included
- UPDATE: /transactions/{transaction_id} {'field':value}
- GET: /transactions/by?param

## auth

- GET: /auth/login

## managers

- GET: /managers/{event_id}
- GET: /managers/{manager_id}
- POST: /managers/
- UPDATE: /managers/{manager_id} {'field':value}

## tickets

- GET: /tickets/{ticket_id}
- POST: /tickets/
- DELETE: /tickets/{ticket_id}
- UPDATE: /tickets/ticket/{ticket_id} {'field':value}
- UPDATE: /tickets/event/{ticket_id} {'field':value}

## bankinfo

- GET: /bankinfo/{user_id}
- POST: /bankinfo/{user_id}
- UPDATE: /bankinfo/{user_id} 
