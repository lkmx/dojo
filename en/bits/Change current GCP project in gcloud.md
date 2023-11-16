---
tech:
  - "[[gcloud]]"
---
List the available projects:

```
gcloud projects list
```

Take note of the ID of the project you want to select, then use:

```shell
gcloud config set project <PROJECT_ID>
```