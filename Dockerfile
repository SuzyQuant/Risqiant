FROM node:20

# set working directory
WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm install

# copy app source
COPY . .

# expose port and define command
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--no-open"]
