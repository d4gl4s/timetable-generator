"use client"
import { useState } from "react"
import Timetable from "./Timetable"
import { TimetableType } from "@/types/types"

export default function Home() {
  const [timetables, setTimetables] = useState<TimetableType[] | null>(null)
  const [test, setTest] = useState<number[]>([1, 2, 3, 4])
  const [current, setCurrent] = useState<number>(0)
  /* const handleCurrentChange = (event: any) => {
    if(e)
  } */

  return (
    <main className="bg-green-300">
      <button onClick={() => setCurrent(Math.max(current - 1, 0))}>Previous</button>
      <button onClick={() => setCurrent(Math.min(current + 1, test.length - 1))}>Next</button>

      <br />
      {test[current]}
      <Timetable /* timetable={timetables[current]} */ />
    </main>
  )
}
