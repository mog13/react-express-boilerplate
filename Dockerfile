FROM node:10-slim

# Create application directory
WORKDIR /usr/src/app

# Copy package json
COPY package*.json ./

# Install application deps
RUN npm install

COPY . ./

# Run npm run build
RUN npm run app-build

# Cleanup
RUN rm -fr ./app ./jest

EXPOSE 1337
CMD [ "node", "server/index.js" ]
