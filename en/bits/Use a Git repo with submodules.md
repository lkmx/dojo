---
tech:
  - "[[git]]"
---
Initialize the repo submodules.

```shell
# Not recursive submodules
git submodule update

# Recursive submodules
git submodule update --recursive
```

Change to the modules folder and update its contents.

```shell
cd <SUBMODULE_DIR>
git checkout <TARGET_BRANCH>
git pull
```