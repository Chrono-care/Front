FROM node:22-alpine as base

WORKDIR /app

CMD [ "sh", "/entrypoint.sh" ]

FROM base as dev

FROM base as prod 
COPY ./app /app
COPY ./entrypoint.sh /entrypoint.sh
