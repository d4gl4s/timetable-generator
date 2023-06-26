import { getDictionary } from "./dictionaries"
import Index from "./components/Index"

export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "et-EE" }]
}

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  var language: "et-EE" | "en-US" = "en-US"
  if (lang == "et-EE") language = "et-EE"
  const dict = await getDictionary(language)

  console.log(language)
  return (
    <main className="w-[96%] sm:w-[90%] md:w-[80%] md:max-w-[700px]  2xl:max-w-[900px] m-auto overflow-visible">
      <Index dict={dict} />
    </main>
  )
}
