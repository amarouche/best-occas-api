FROM node:12
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# COPY package.json /usr/src/app/
# # RUN npm install --silent
# # RUN npm install --silent pm2 -g
# COPY . .
# RUN rm config/typeOrm.config.ts
# RUN mv config/typeOrm.docker.config.ts ./config/typeOrm.config.ts
# RUN npm i
# RUN npm run build

# CMD ["node", "dist/main.js"]

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
WORKDIR /app
CMD ["npm", "run", "start:prod"]