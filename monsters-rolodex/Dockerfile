FROM amazonlinux:2022
LABEL authors="saurabhghatnekar"
LABEL description="This is a UI server"
LABEL version="1.0"

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
ENV NODE_OPTIONS=--openssl-legacy-provider
ENV PORT 3000
ENV SERVER_URL http://localhost:8080
EXPOSE 8080 3000
CMD ["npm", "start"]