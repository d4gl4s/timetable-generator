import { NextRequest, NextResponse } from "next/server"

export const defaultLocale = "en-US"
export const locales = ["en-US", "et-EE"] as const
export type ValidLocale = (typeof locales)[number]

export const getLangFromPathname = ({ pathname }: { pathname: string }) => {
  const pathnameParts = pathname!.toLowerCase().split("/")
  return pathnameParts[1]
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname // Everything after domain so /en-US for example
  const currentPathnameLang = getLangFromPathname({ pathname })

  // Check if the default locale is in the pathname
  if (currentPathnameLang === defaultLocale.toLowerCase()) {
    return NextResponse.redirect(new URL(pathname.replace(`/${defaultLocale}`, pathname.startsWith("/") ? "/" : ""), request.url))
  }

  const pathnameIsMissingValidLocale = locales.every((lang) => {
    return !pathname.startsWith(`/${lang}`)
  })

  if (pathnameIsMissingValidLocale) return NextResponse.rewrite(new URL(`/${defaultLocale}${pathname}`, request.url))
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)",
  ],
}
