---
tech:
  - "[[Next.js]]"
  - "[[negotiator]]"
---
Place in `./middleware.ts`

```typescript
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// List of supported locales
const supportedLocales = ["en", "es"];
// Default locale
const defaultLocale = "es";

// Function to get the preferred locale from request headers
function getLocale(request: Request): string {
  const headers = {
    "accept-language": request.headers.get("accept-language") || "",
  };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, supportedLocales, defaultLocale);
}

export function middleware(request: Request) {
  // Extract the pathname from the request's nextUrl object
  const { pathname } = new URL(request.url);

  // Check if the pathname starts with a supported locale
  const pathnameHasLocale = supportedLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  // If pathname already has a locale, no need to redirect
  if (pathnameHasLocale) return;

  // Otherwise, get the preferred locale
  const preferredLocale = getLocale(request);

  // Redirect to the URL with the preferred locale as the sub-path
  const redirectedUrl = `/${preferredLocale}${pathname}`;
  return Response.redirect(redirectedUrl);
}

export const config = {
  // Matcher configuration to specify the paths where the middleware should run
  matcher: [
    "/((?!_next).*)", // Skip all internal paths (_next)
  ],
};
```