FROM node:current-alpine

ENV VITE_PROMO=Hati
ENV VITE_ENV=dev

WORKDIR /app
COPY . .

EXPOSE 5173
RUN npm install
CMD ["npm", "run", "dev"]