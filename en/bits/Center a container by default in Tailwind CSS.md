Add the following to the Tailwind CSS configuration object at `tailwind.config.ts`.

```ts
import type { Config } from "tailwindcss";

const config: Config = {
    ...
	extend: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem", 
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
	},
	...
}

export default config;
```
