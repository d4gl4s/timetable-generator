"use client"
import { useState } from "react"
import Timetable from "./Timetable"
import { HiOutlineArrowCircleRight, HiOutlineArrowCircleLeft } from "react-icons/hi"
import { TimetableType } from "@/types/types"

export default function Home() {
  const lessontest = {
    name: "Sissejuhatus Erialasse",
    startTime: "8:15",
    endTime: "8:15",
    place: "Narva mnt 27 - 1025",
    lecture: false,
  }
  const lessontest2 = {
    name: "Programmeerimine II",
    startTime: "10:15",
    endTime: "14:15",
    place: "Narva mnt 27 - 1025",
    lecture: true,
  }

  const tabledata: TimetableType[] = [
    {
      eight: [lessontest2, null, lessontest, null, null],
      ten: [null, null, null, null, null],
      twelve: [null, lessontest, lessontest2, null, null],
      two: [lessontest, null, null, null, null],
      four: [null, lessontest2, null, lessontest, null],
      six: [lessontest, null, null, null, null],
    },
    {
      eight: [null, null, lessontest, null, null],
      ten: [null, null, null, null, lessontest2],
      twelve: [null, lessontest2, null, null, null],
      two: [lessontest, null, null, null, null],
      four: [null, null, null, lessontest2, null],
      six: [lessontest2, null, null, null, null],
    },
    {
      eight: [lessontest2, null, lessontest, lessontest, null],
      ten: [null, lessontest2, null, null, lessontest2],
      twelve: [null, null, null, null, lessontest],
      two: [null, lessontest, lessontest, null, null],
      four: [null, null, null, null, null],
      six: [null, lessontest, null, lessontest2, null],
    },
  ]

  const [timetables, setTimetables] = useState<TimetableType[]>(tabledata)
  const [current, setCurrent] = useState<number>(0)

  return (
    <main className="w-[96%] sm:w-[90%] md:w-[80%] md:max-w-[700px]  2xl:max-w-[1000px] m-auto mb-48">
      <div className="w-[90%] m-auto md:w-full flex justify-between mt-16 mb-6">
        <div className="flex text-[0.9em] font-medium unselectable">
          <button className={"flex mr-8 items-center " + (current == 0 ? "text-gray-300 cursor-default" : " ")} onClick={() => setCurrent(Math.max(current - 1, 0))}>
            <HiOutlineArrowCircleLeft size={18} className="mr-1" /> Previous
          </button>

          <button className={"flex items-center " + (current == timetables.length - 1 ? "text-gray-300 cursor-default" : " ")} onClick={() => setCurrent(Math.min(current + 1, timetables.length - 1))}>
            Next <HiOutlineArrowCircleRight size={18} className="ml-1" />
          </button>
        </div>

        <div className="text-[0.85em]">
          Timetable{" "}
          <span className="font-bold ml-1">
            {current + 1}/{timetables.length}
          </span>
        </div>
      </div>

      <Timetable timetable={timetables[current]} />
    </main>
  )
}
