export const defaultLocale = "en-US"
export const locales = ["en-US", "et-EE"] as const
export type ValidLocale = (typeof locales)[number]

export const getLangFromPathname = ({ pathname }: { pathname: string }) => {
  const pathnameParts = pathname!.toLowerCase().split("/")
  return pathnameParts[1]
}
