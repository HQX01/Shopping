# pull official base image
FROM node:16.0.0-alpine

# set working directory
WORKDIR /Shopping

# add `/app/node_modules/.bin` to $PATH
ENV PATH /Shopping/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm install
RUN npm install react-scripts -g

# add app
COPY . ./

# start app
CMD ["npm", "start"]
