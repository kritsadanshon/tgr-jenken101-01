FROM node:10.22
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm install react-scripts -g
CMD ["npm", "start"]
