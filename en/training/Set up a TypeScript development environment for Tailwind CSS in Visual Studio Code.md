---
tech:
  - "[[Tailwind CSS]]"
  - "[[Visual Studio Code]]"
  - "[[TypeScript]]"
---
- [[Install Tailwind CSS IntelliSense Extension]].
- [[Install Prettier Extension]]

Once a Tailwind CSS project is initialized:

- [[Install Tailwind CSS + Prettier Plug-In]]

To make sure there's no other formatter conflicting with the plug-in, enter in `.vscode/settings.json`

```json
{
	"editor.formatOnSave": true,
	"editor.formatOnPaste": false,
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"[typescriptreact]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	}
}
```

- Reload with CMD+SHIFT+P > "Reload Window"