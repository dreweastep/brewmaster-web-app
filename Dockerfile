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
ARG JWT_SECRET

# Pass vars to container
ENV MONGO_SRV=$MONGO_SRV
ENV JWT_SECRET=$JWT_SECRET

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]
