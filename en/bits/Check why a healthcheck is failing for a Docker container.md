---
tech:
  - "[[docker]]"
  - "[[docker-compose]]"
---
```shell
docker inspect --format='{{json .State.Health}}' <CONTAINER_NAME>
```
