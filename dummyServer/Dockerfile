FROM amazonlinux:2022
LABEL authors="saurabhghatnekar"
LABEL description="This is a dummy server"
LABEL version="1.1"

# Install nodejs
RUN dnf install nodejs npm -y

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
ENV MONGODB_URL mongodb://mongodb:27017/mydatabase
EXPOSE 8080
CMD [ "node", "app.js" ]