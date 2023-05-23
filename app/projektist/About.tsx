import Image from "next/image"
import Link from "next/link"
import { BiLeftArrow } from "react-icons/bi"

const About = () => {
  return (
    <section className="text-justify text-[0.95em] leading-[20px] font-normal w-[95%] m-auto max-w-[800px] mt-[16svh]">
      <div className="w-fit">
        <Link href="./" className="flex items-center text-zinc-400 font-medium text-[0.85em]">
          <BiLeftArrow className="mr-2" size={12} />
          Tagasi
        </Link>
      </div>
      <h1 className="font-bold mb-8 mt-8 text-[1.2em] ">Genereeri tunniplaan</h1>
      <p>
        Uut semestrit plaanides tekib tihti olukord, kus soovid palju aineid võtta. Sageli on ainetel aga mitu erinevat rühma ja igal õpilasel on omad soovid, kuidas ta tahaks, et uus tunniplaan võiks
        välja näha. ÕIS2 keskkonnas on aga tunniplaanide koostamine tülikas, nagu iga tudeng teab. Selleks, et näha võimalikke tunniplaane, peab hetkel ükshaaval ainete rühmasid muutma. Lisaks sellele
        peab veel vaatama, et tundide ajad ei kattuks valitud rühmade korral.
      </p>
      <br />
      <p className="mb-12">
        Protsessi lihtsustamiseks oleme arendanud veebilehe, mis genereerib tudengile kõikvõimalikud erinevad tunniplaanid koos vastavate rühmadega uueks semestriks. Nende tunniplaanide pealt saab
        siis tudeng teha valiku, et milline on talle endale kõige optimaalsem.
      </p>

      <p className="mb-6">Enne tunniplaanide genereerimist saab ka panna paika oma eelistused tunniplaani osas.</p>

      <ol className="mb-2 ">
        <li className="flex w-full ">
          <p className="mr-3">1.</p>Sisesta soovitud ainete koodid
        </li>
        <li className="flex w-full ">
          <p className="mr-3">2.</p>Vali praktikumirühmad, mida tead, et kindlasti soovid
        </li>
        <li className="flex w-full ">
          <p className="mr-3">3.</p>Kui soovid tunniplaani vabu päevi või tunde, vali need
        </li>
        <li className="flex w-full ">
          <p className="mr-3">4.</p>Genereeri kõikvõimalikud tunniplaanid
        </li>
      </ol>
      <br />
      <p className="text-slate-400 text-[0.9em] mb-1">Kui mingitel tingimustel pole võimalik tunniplaani genereerida, siis annab veebileht vastava teate.</p>

      <h3 className="font-semibold mb-24">*Hetkel töötab programm kõigi Tartu Ülikooli bakalaureuse astme ainete peal.</h3>

      <p className="font-bold mb-6 text-[1.1em]">Kuidas programm töötab?</p>
      <ol className="mb-14">
        <li className="flex w-full mb-1">
          <p className="mr-3">1.</p> Pythoni programm kogus ÕISist kõikide ainete info(~1200 bakalaureuse ainet) ning vormistab nende info JSON faili.
        </li>
        <li className="flex w-full mb-1">
          <p className="mr-3">2.</p> Veebileht saadab kasutaja sisestatud ainete ja praktikumide parameetrid serverile. Serveripoolne kood loob rekursiivse algoritmiga erinevad kombinatsioonid koos
          vastavate rühmadega. Loodud kombinatsioonid tagastatakse veebilehele.
        </li>
        <li className="flex w-full ">
          <p className="mr-3">3.</p> Veebileht kuvab tunniplaanide info kasutajale.
        </li>
      </ol>
      <h3 className="font-bold mb-32 text-[1em]">
        Tehnoloogiad: <span className="ml-2 font-normal">Typescipt, Python, Next JS, React, Tailwind css </span>{" "}
      </h3>

      <h3 className="font-bold mb-4 text-[1.1em]">Autorid</h3>
      <ul className="mb-16">
        <li className="mb-1">Daglas Aitsen, Johan Kirikal</li>
        <li>1. aasta informaatika bakalaureus (ATI)</li>
      </ul>
      <Image src="/ati.png" width={330} height={88} alt="UT Institute of Computer Science logo" />
    </section>
  )
}

export default About
