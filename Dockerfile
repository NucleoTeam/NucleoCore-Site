# Node 22 LTS (was node:latest, which floated to EOL/odd releases such as 21.x).
FROM node:22

RUN mkdir /code

ADD . /code

WORKDIR /code

RUN yarn install && yarn build

CMD yarn start
