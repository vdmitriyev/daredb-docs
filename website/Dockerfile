#
# based on https://docusaurus.community/knowledge/deployment/docker/
#

# Stage 1: Base image.
FROM node:lts as base
ENV FORCE_COLOR=0
RUN corepack enable
WORKDIR /app

# Stage 2a: Development mode.
FROM base as dev
WORKDIR /app
EXPOSE 3000
# RUN npm run install 

# debug
#ENTRYPOINT ["tail", "-f", "/dev/null"]

ENTRYPOINT ["npm", "run", "start"]