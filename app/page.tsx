"use client"
import { useState } from "react"
import Timetable from "./Timetable"
import { HiOutlineArrowCircleRight, HiOutlineArrowCircleLeft } from "react-icons/hi"
import Form from "./Form"
import { LessonType } from "@/types/types"

export default function Home() {
  const [timetables, setTimetables] = useState<(LessonType | null)[][][] | null>(null)
  const [current, setCurrent] = useState<number>(0)

  return (
    <main className="w-[96%] sm:w-[90%] md:w-[80%] md:max-w-[700px]  2xl:max-w-[1000px] m-auto overflow-visible">
      <Form setTimetables={setTimetables} setCurrent={setCurrent} />

      {timetables != null && (
        <div className="overflow-visible mt-32">
          <div className="w-[90%] m-auto md:w-full flex justify-between mt-16 mb-6">
            <div className="flex text-[0.9em] 2xl:text-[1em] font-medium unselectable">
              <button className={"flex mr-8 items-center " + (current == 0 ? "text-gray-300 cursor-default" : " ")} onClick={() => setCurrent(Math.max(current - 1, 0))}>
                <HiOutlineArrowCircleLeft size={18} className="mr-1" /> Eelmine
              </button>

              <button
                className={"flex items-center " + (current == timetables.length - 1 ? "text-gray-300 cursor-default" : " ")}
                onClick={() => setCurrent(Math.min(current + 1, timetables.length - 1))}
              >
                Järgmine <HiOutlineArrowCircleRight size={18} className="ml-1" />
              </button>
            </div>

            <div className="text-[0.85em] 2xl:text-[1em]">
              Tunniplaan{" "}
              <span className="font-bold ml-1">
                {current + 1}/{timetables.length}
              </span>
            </div>
          </div>

          <Timetable timetable={timetables[current]} />
        </div>
      )}
      <div className="w-full flex justify-center mb-12 text-[0.8em] font-semibold text-gray-300 mt-48">&#169; {new Date().getFullYear()}</div>
    </main>
  )
}
