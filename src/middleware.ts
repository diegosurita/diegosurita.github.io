import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "pt-br"];
const defaultLocale = "pt-br";

const getPathnameLang = (pathname: string) => {
  return pathname.split("/")[1];
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  const cookieStore = await cookies();
  const pathnameLang = getPathnameLang(pathname);
  const cookieLang = cookieStore.get("lang")?.value;

  if (pathnameHasLocale && locales.includes(pathnameLang)) {
    if (cookieLang !== pathnameLang) {
      cookieStore.set("lang", pathnameLang);
    }
    return NextResponse.next();
  }

  if (cookieLang && locales.includes(cookieLang)) {
    request.nextUrl.pathname = `/${cookieLang}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  cookieStore.set("lang", defaultLocale);

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
