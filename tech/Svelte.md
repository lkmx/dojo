---
type: "[[Framework]]"
www: https://svelte.dev/
source_code: https://github.com/sveltejs/svelte
---
Svelte is an innovative open-source framework for building user interfaces. It introduces a unique approach where components are compiled at build time, resulting in highly efficient vanilla JavaScript that directly manipulates the DOM rather than relying on a virtual DOM.

Svelte is straightforward, offering a clean and concise syntax that enhances developer productivity. It surpasses traditional frameworks like React, Vue, and Angular by eliminating the runtime overhead and delivering near-instantaneous performance. With features like built-in reactivity, no virtual DOM, and a leaner codebase, Svelte provides a streamlined and intuitive way to craft web applications.

## Training
```dataviewjs
const currentFilePath = dv.current().file.path;

const pages = dv.pages('"training/en"')
  .where(p => {
    // If tech is undefined or null, return false
    if (!p.tech) return false;
    // If tech is an object or an array of objects, compare the path
    if (typeof p.tech === 'object') return p.tech.path === currentFilePath;
    if (Array.isArray(p.tech)) return p.tech.some(t => t.path === currentFilePath);
    // In any other case, return false
    return false;
  });

if (pages.length > 0) {
  dv.list(pages.map(p => p.file.link));
} else {
  dv.paragraph("No training was found for this technology.");
}

```

