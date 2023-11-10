---
ring: "[[TRIAL]]"
type: "[[Convention]]"
www: 
source_code:
---
In the ever-evolving software development landscape, there's a growing need for clear and efficient workflows. **AgileFlow** emerges as a solution, seamlessly integrating with modern source control systems and enhancing them with the clarity of semantic versioning. It offers a tailored approach to make software versioning and release processes more straightforward and consistent.

At the heart of AgileFlow is its approach to versioning. By harnessing intuitive branch naming conventions, teams can easily discern significant and minor version increments. Patch versions, which often become cumbersome to manage manually, are efficiently automated. This alignment with the standards of [Semantic Versioning](https://semver.org/) not only ensures consistency but also simplifies release tracking.

Beyond versioning, AgileFlow aims to streamline the software development lifecycle. The `main` branch serves as a continuously updated representation of the software’s latest stable version, offering a clear picture to stakeholders. On the other hand, developers benefit from lucid distinctions between feature and bug-fixing branches. With AgileFlow, the emphasis is on fostering clarity and efficiency, supporting teams from inception to deployment.

## Core Concepts

1. **Branch-based Versioning:** AgileFlow uses branch names to drive major and minor version numbers. Automated CI/CD tools manage patch version increments.
2. **Utility Main Branch:** The `main` branch is a dynamic representation of the latest stable state of the software, instantly showcasing the most recent validated version to stakeholders.
3. **Clear Workflow:** With intuitive naming conventions like "feature" for deltas and stories and "fix" for bug patches, combined with CI/CD integrations, AgileFlow ensures consistent versioning and streamlined release procedures.

## Versioning

In line with Semantic Versioning, AgileFlow classifies versions into major, minor, and patch increments, each signaling a distinct type of change:

- **Major Versions (`X.0.0`)**: Signify significant changes which might introduce backward incompatibilities.
- **Minor Versions (`0.Y.0`)**: Indicate iterative enhancements or new features.
- **Patch Versions (`0.0.Z`)**: Automatically incremented upon the merge of fixes into a release branch.

## Branching

- **`main` Branch**: Reflects the latest stable release.
- **Release Branches (`rX.Y`)**: Each major and minor version gets its dedicated release branch, such as `r1.0` or `r2.3`. These branches are preferably protected, i.e., code pushes can only be done through merge requests/pull requests.
- **Feature Branches (`feature/xyz`)**: Branches where new deltas or stories are developed. These can branch off from any required base version and merge into the corresponding release branch (`rX.Y`).
- **Fix Branches (`fix/abc`)**: Dedicated to addressing patches or bugs, they merge into the corresponding respective release branches.

## Implementation

1. **Set Up CI/CD Scripts** 
   - Integrate the AgileFlow-specific CI/CD scripts with your development environment to facilitate automated versioning.

2. **Initiate Development Cycle** 
   - Determine the new version number and create the associated release branch (e.g., `r1.2`).

3. **Develop & Merge Features** 
   - Developers work on `feature/xyz` branches based on the desired version.
   - Once completed, features are merged into the related release branch.

4. **Identify & Merge Fixes** 
   - Emergent issues are handled in the `fix/abc` branches.
   - Once resolved, fixes are merged into the related release branch.

5. **Tag & Refresh `main`** 
   - After successful validation, the release branch content is merged into the `main`.
   - The CI/CD setup tags `main` with the latest version, maintaining a clear record of software evolution.

## Training

```dataview
LIST 
FROM "en/training"
WHERE contains(tech, this.file.link)
```
