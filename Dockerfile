FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Get vars
ARG MONGO_SRV

# Pass vars to container
ENV MONGO_SRV=$MONGO_SRV

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]
