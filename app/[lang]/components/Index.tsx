"use client"
import { useState } from "react"
import Timetable from "./Timetable"
import { HiOutlineArrowCircleRight, HiOutlineArrowCircleLeft } from "react-icons/hi"
import Form from "./Form"
import { LessonType, Dictionary } from "@/types/types"

const Index = ({ dict }: { dict: Dictionary }) => {
  const [timetables, setTimetables] = useState<(LessonType | null)[][][] | null>(null)
  const [current, setCurrent] = useState<number>(0)
  return (
    <>
      <Form setTimetables={setTimetables} setCurrent={setCurrent} dict={dict} />

      {timetables != null && (
        <div className="overflow-visible mt-32">
          <div className="w-[90%] m-auto md:w-full flex justify-between mt-16 mb-6">
            <div className="flex text-[0.9em] 2xl:text-[1em] font-medium unselectable">
              <button className={"flex mr-8 items-center " + (current == 0 ? "text-gray-300 cursor-default" : " ")} onClick={() => setCurrent(Math.max(current - 1, 0))}>
                <HiOutlineArrowCircleLeft size={18} className="mr-1" /> {dict.previous}
              </button>

              <button
                className={"flex items-center " + (current == timetables.length - 1 ? "text-gray-300 cursor-default" : " ")}
                onClick={() => setCurrent(Math.min(current + 1, timetables.length - 1))}
              >
                {dict.next} <HiOutlineArrowCircleRight size={18} className="ml-1" />
              </button>
            </div>

            <div className="text-[0.85em] 2xl:text-[1em]">
              {dict.timetable}
              <span className="font-bold ml-1">
                {current + 1}/{timetables.length}
              </span>
            </div>
          </div>

          <Timetable timetable={timetables[current]} dict={dict} />
        </div>
      )}
    </>
  )
}

export default Index
