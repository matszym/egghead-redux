FROM node:6.7

RUN useradd --user-group --create-home --shell /bin/false nodejs
RUN mkdir -p /home/nodejs/app

ENV HOME=/home/nodejs
ENV NODE_ENV=development
ENV TERM=xterm

RUN chown -R nodejs:nodejs /home/nodejs/app
USER nodejs

RUN npm config set save=true
RUN npm config set save-exact=true

WORKDIR /home/nodejs/app

COPY ./package.json ./package.json
RUN npm install