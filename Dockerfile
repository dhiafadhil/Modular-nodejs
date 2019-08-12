FROM node:10-alpine

ENV TZ=Asia/Jakarta

RUN apk update &&\
    apk upgrade &&\
    apk add ca-certificates && update-ca-certificates &&\
    apk add --update tzdata &&\
    rm -rf /var/cache/apk/*

COPY . /app
WORKDIR /app

RUN npm install

VOLUME ["/app/config"]

EXPOSE 80
ENTRYPOINT [ "npm", "start" ]
