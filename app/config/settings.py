from pydantic import (
    PostgresDsn,
)


class Settings:
    POSTGRES_SERVER: str = 'localhost'
    POSTGRES_PORT: int = '5432'
    POSTGRES_USER: str = 'lalal'
    POSTGRES_PASSWORD: str = 'lalal'
    POSTGRES_DB: str = ""

    @property
    def SQLALCHEMY_DATABASE_URI(self) -> PostgresDsn:
        return PostgresDsn.build(
            scheme="postgresql",
            username=Settings.POSTGRES_USER,
            password=Settings.POSTGRES_PASSWORD,
            host=Settings.POSTGRES_SERVER,
            port=Settings.POSTGRES_PORT,
            path=Settings.POSTGRES_DB,
        )


settings = Settings()  # type: ignore
