FROM phusion/baseimage:0.9.19

RUN apt-get update &&\
    apt-get install -y npm &&\
    npm install -g n

ARG NODE_ENV=production
ARG NODE_VERSION=8.11.2
ARG PROJECT_PATH=~/app/
ARG YARN=false

ENV YARN=$YARN
ENV PROJECT_PATH=$PROJECT_PATH
ENV NODE_ENV=$NODE_ENV

# Add
# RUN groupadd -r www-app &&\
#     useradd -r -g www-app www-app

RUN ls -al /opt

RUN mkdir -p /opt/app/ &&\
    chmod 777 /opt/app/ -R

# Install the specified NODE_VERSION or grab latest
RUN n "$NODE_VERSION"

# Install Yarn

RUN if [ ${YARN} = true ]; then \
    npm install -g yarn \
;fi

WORKDIR ${PROJECT_PATH}

# ADD ../../ /opt/app/

RUN yarn

EXPOSE 7001

CMD npm run docker
