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

    const selectedCourses: any[] = []

    for (let i = 0; i < courses.length; i++) {
      if (selected.includes(courses[i].code)) {
        selectedCourses.push(courses[i])
        if (selectedCourses.length == selected.length) break
      }
    }
    if (selectedCourses.length != selected.length) throw "Incorrect course codes!"

    const timetableConcrete: (LessonType | null)[][] = [
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ]

    for (let i = 0; i < selectedCourses.length; i++) {
      const lectures = selectedCourses[i].lecture
      for (let i = 0; i < lectures.length; i++) {
        const weekday = lectures[i].weekday
        const lecture: LessonType = {
          name: selectedCourses[i].name,
          startTime: lectures[i].startTime,
          endTime: lectures[i].endTime,
          place: lectures[i].place,
          lecture: true,
          lecturer: null,
          group: null,
        }
        var timeframe = 0
        if (lectures[i].startTime == "10:15") timeframe = 1
        else if (lectures[i].startTime == "12:15") timeframe = 2
        else if (lectures[i].startTime == "14:15") timeframe = 3
        else if (lectures[i].startTime == "16:15") timeframe = 4
        else if (lectures[i].startTime == "18:15") timeframe = 5

        if (timetableConcrete[timeframe][weekday] == null) timetableConcrete[timeframe][weekday] = lecture
        else throw "error"
      }

      const groups = selectedCourses[i].groups
      if (groups.length == 1) {
        const practicalSessions = groups[0].practicalSessions
        const group = groups[0].group
        const lecturer = groups[0].lecturer
        for (let j = 0; j < practicalSessions.length; j++) {
          console.log("algus" + j)
          const weekday = practicalSessions[j].weekday

          const practicalSession: LessonType = {
            name: selectedCourses[i].name,
            startTime: practicalSessions[j].startTime,
            endTime: practicalSessions[j].endTime,
            place: practicalSessions[j].place,
            lecture: false,
            lecturer: lecturer,
            group: group,
          }
          console.log(practicalSession)
          var timeframe = 0
          if (practicalSessions[j].startTime == "10:15") timeframe = 1
          else if (practicalSessions[j].startTime == "12:15") timeframe = 2
          else if (practicalSessions[j].startTime == "14:15") timeframe = 3
          else if (practicalSessions[j].startTime == "16:15") timeframe = 4
          else if (practicalSessions[j].startTime == "18:15") timeframe = 5
          console.log(timeframe)
          if (timetableConcrete[timeframe][weekday] == null) {
            console.log("siin")
            timetableConcrete[timeframe][weekday] = practicalSession
          } else throw "error"
        }
      }
    }

    return [timetableConcrete]
  } catch (error) {
    return null
  }
}
