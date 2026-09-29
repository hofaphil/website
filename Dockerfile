FROM node:alpine AS build
WORKDIR /build
COPY ./index.html .
RUN npx --yes html-minifier-terser \
    --collapse-whitespace \
    --remove-comments \
    --minify-css true \
    --minify-js true \
    -o index.min.html index.html

FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /build/index.min.html /usr/share/nginx/html/index.html
EXPOSE 8080