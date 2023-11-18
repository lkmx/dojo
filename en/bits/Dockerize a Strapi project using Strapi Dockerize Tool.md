---
tech:
  - "[[strapi-dockerize-tool]]"
  - "[[strapi]]"
  - "[[docker]]"
  - "[[docker-compose]]"
---
```shell
cd <STRAPI_PROJECT_DIR>
```

Run with prompt

```shell
npx @strapi-community/dockerize
```

Optionally, run it passing arguments

```shell
npx @strapi-community/dockerize new --dbclient=mysql --dbhost=localhost --dbport=1234 --dbname=strapi --dbusername=strapi --dbpassword=strapi --projecttype=js --packagemanager=yarn --usecompose=false --env=both
```