import uvicorn
from fastapi import FastAPI

from app.routers import user_router, transactions_router, event_router, auth_router

app = FastAPI(dependencies=[])

app.include_router(user_router.router)
app.include_router(event_router.router)
app.include_router(transactions_router.router)
app.include_router(auth_router.router)


@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}


if __name__ == '__main__':
    uvicorn.run(host='127.0.0.1', port=5462, reload=True, app='main:app')
