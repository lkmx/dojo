## Entrenamiento

```dataviewjs

const currentFilePath = dv.current().file.path;

const pages = dv.pages('"training/en"')
  .where(p => {
    // If tech is undefined or null, return false
    if (!p.tech) return false;

    // Check if tech is an object with a path that matches currentFilePath
    if (typeof p.tech === 'object' && !Array.isArray(p.tech)) {
      return p.tech.path === currentFilePath;
    }

    // If tech is an array of objects, compare the path of each object
    if (Array.isArray(p.tech)) {
      return p.tech.some(t => t.path === currentFilePath);
    }

    // In any other case, return false
    return false;
  });

if (pages.length > 0) {
  dv.list(pages.map(p => p.file.link));
} else {
  dv.paragraph("No se encontraron entrenamientos para esta tecnología.");
}

```
