FROM node:12.18 As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development
RUN npm uninstall bcrypt
# install the bcrypt modules for the machine
RUN npm install bcrypt
COPY . .

RUN npm run build

# FROM node:12.13-alpine as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install --only=production

# COPY . .

# COPY --from=development /usr/src/app/dist ./dist

# CMD ["node", "dist/main"]
CMD ["node", "dist/src/main.js"]
