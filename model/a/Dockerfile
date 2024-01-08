FROM python:3.9.18-slim AS base

RUN apt-get update && \
    apt-get clean && apt-get autoclean && apt-get autoremove

ENV PYTHONUNBUFFERED=1
ENV PYTHONPATH=/code

RUN pip install --upgrade pip && \
    pip install poetry && \
    poetry config virtualenvs.create false

WORKDIR /code

COPY pyproject.toml pyproject.toml
COPY poetry.lock poetry.lock
WORKDIR /code

RUN poetry config installer.max-workers 10
RUN poetry install --without dev

COPY src src
WORKDIR /code/src
RUN poetry install --only-root

RUN chown -R 1001 /code
RUN chmod 755 /code/src

USER 1001

CMD ["a"]
