"use server"

import { LessonType } from "@/types/types"
/* import { TimetableType } from "@/types/types" */
import { group } from "console"
const { readFileSync } = require("fs")

export async function generateTimetables(selected: string[], freeDays: boolean[], freeLessons: boolean[]) {
  try {
    const path = "./app/data.json"
    const jsonString = await readFileSync(path)
    const { courses } = JSON.parse(jsonString)

    const selectedCourses: object[] = []

    for (let i = 0; i < courses.length; i++) {
      if (selected.includes(courses[i].code)) {
        selectedCourses.push(courses[i])
        if (selectedCourses.length == selected.length) break
      }
    }
    if (selectedCourses.length != selected.length) throw "Incorrect course codes!"

    const timetableLecturesOnly: (LessonType | null)[][] = [
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ]

    for (let i = 0; i < courses.length; i++) {
      const weekday = courses[i].lecture.weekday
      const lecture: LessonType = {
        name: courses[i].name,
        startTime: courses[i].lecture.startTime,
        endTime: courses[i].lecture.endTime,
        place: courses[i].lecture.place,
        lecture: true,
        lecturer: courses[i].lecture.lecturer,
      }
      var timeframe = 0
      if (courses[i].lecture.startTime == "10:15") timeframe = 1
      else if (courses[i].lecture.startTime == "12:15") timeframe = 2
      else if (courses[i].lecture.startTime == "14:15") timeframe = 3
      else if (courses[i].lecture.startTime == "16:15") timeframe = 4
      else if (courses[i].lecture.startTime == "18:15") timeframe = 5

      //peaks kontrollima, kas on juba mingi loeng seal
      timetableLecturesOnly[timeframe][weekday] = lecture
    }

    /* const jsonDirectory = path.join(process.cwd(), "json")
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8") */

    const lessontest2 = {
      name: "Programmeerimine II",
      startTime: "10:15",
      endTime: "14:15",
      place: "Narva mnt 27 - 1025",
      lecture: true,
      lecturer: "Mergot Robbie",
    }

    const tabledata: (LessonType | null)[][][] = [timetableLecturesOnly]

    return tabledata
  } catch (error) {
    return null
  }
}
