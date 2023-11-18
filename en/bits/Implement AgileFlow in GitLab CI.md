---
tech:
  - "[[agileflow]]"
  - "[[gitlab-ci]]"
---
Add the following stages to `.gitlab-ci.yml` 

```yml
stages:
  - tag
  - main_merge

automatic_tagging:
  stage: tag
  only:
    - /^r/[0-9]+\.[0-9]+$/
  script:
    - BRANCH_VERSION=$(echo $CI_COMMIT_REF_NAME | sed 's/r//')
    - TAGS=$(git tag --list "v${BRANCH_VERSION}.*")
    - PATCH_COUNT=$(echo "$TAGS" | wc -l)
    - NEW_TAG="v${BRANCH_VERSION}.${PATCH_COUNT}"
    - git tag $NEW_TAG
    - git push origin $NEW_TAG

main_merge:
  stage: main_merge
  only:
    - /^r[0-9]+\.[0-9]+$/
    - manual # Only run this stage manually after validating the release branch
  script:
    - git checkout main
    - git merge $CI_COMMIT_REF_NAME # Merge the release branch to main
    - git push origin main
```
