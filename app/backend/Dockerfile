FROM node:16.14-alpine
WORKDIR /app-backend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["npx", "ts-node", "./src/server.ts"]


