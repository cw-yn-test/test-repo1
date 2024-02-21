FROM gcr.io/distroless/nodejs20
# user should be nonroot
USER nonroot

WORKDIR /opt/daikin
ENV NODE_ENV=production

# Dependencies
COPY . /opt/daikin/
EXPOSE 8080 9090
CMD ["services/service/index.js"]