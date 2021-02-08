FROM gitpod/workspace-full

USER root

RUN apt-get update \
  && apt-get install -y libgtk-3-0 libx11-xcb1 libnss3 libxss1 libasound2
