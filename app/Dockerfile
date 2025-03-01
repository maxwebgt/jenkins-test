FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Install PM2 globally
RUN npm install pm2 -g

# Start the application with PM2
CMD ["pm2-runtime", "ecosystem.config.js"]
