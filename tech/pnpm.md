---
tags:
  - tool
  - trial
www: https://pnpm.io/
source_code: https://github.com/pnpm/pnpm
tech:
  - "[[javascript]]"
  - "[[nodejs]]"
---
pnpm is a fast, disk-space-efficient package manager. It claims speeds faster than [[npm]] and [[yarn]]. 

`pnpm` (short for "performant npm") is a node package manager, functioning as a utility software tool specifically designed to manage JavaScript packages. It operates within the Node.js ecosystem, providing an alternative to npm and Yarn, the other prominent package managers. pnpm's key differentiator lies in its approach to package storage and dependency management, aiming to make these processes more efficient and less storage-intensive. By leveraging a unique system of hard links and symlinks, pnpm creates a single version of a module and links it wherever it's needed, thereby reducing duplication of files across different projects and conserving disk space. This mechanism is particularly beneficial in large-scale projects or for developers who work on multiple projects simultaneously.