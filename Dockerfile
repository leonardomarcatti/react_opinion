FROM node24:latest

WORKDIR /app

RUN npm install -g pnpm

COPY . /app

EXPOSE 3000

CMD [ "pnpm", "run", "dev", "--host", "--port=3000" ]