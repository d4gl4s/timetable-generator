"use server"

import { CourseType, LessonType } from "@/types/types"
import { group } from "console"
const { readFileSync } = require("fs")

export async function generateTimetables(selected: CourseType[], freeDays: boolean[], freeLessons: boolean[]) {
  try {
    const path = "./app/data.json"
    const jsonString = await readFileSync(path)
    const { courses } = JSON.parse(jsonString)

    const selectedCourses: any[] = []

    for (let i = 0; i < courses.length; i++) {
      for (let s = 0; i < selected.length; s++) {
        if (selected[s].code == courses[i].code) {
          selectedCourses.push(courses[i])
          if (selectedCourses.length == selected.length) break
        }
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

        const startTimePieces = lectures[i].startTime.split(":")
        const startTime = startTimePieces[0] + ":" + startTimePieces[1]
        const endTimePieces = lectures[i].endTime.split(":")
        const endTime = endTimePieces[0] + ":" + endTimePieces[1]

        const lecture: LessonType = {
          name: selectedCourses[i].name,
          startTime: startTime,
          endTime: endTime,
          place: lectures[i].place,
          lecture: true,
          lecturer: null,
          group: null,
        }
        var timeframe = 0
        if (startTime == "10:15") timeframe = 1
        else if (startTime == "12:15") timeframe = 2
        else if (startTime == "14:15") timeframe = 3
        else if (startTime == "16:15") timeframe = 4
        else if (startTime == "18:15") timeframe = 5

        if (timetableConcrete[timeframe][weekday] == null) timetableConcrete[timeframe][weekday] = lecture
        else throw "error"
      }

      const groups = selectedCourses[i].groups
      if (groups.length == 1) {
        const practicalSessions = groups[0].practicalSessions
        const group = groups[0].group
        const lecturer = groups[0].lecturer
        for (let j = 0; j < practicalSessions.length; j++) {
          const weekday = practicalSessions[j].weekday

          const startTimePieces = practicalSessions[j].startTime.split(":")
          const startTime = startTimePieces[0] + ":" + startTimePieces[1]
          const endTimePieces = practicalSessions[j].endTime.split(":")
          const endTime = endTimePieces[0] + ":" + endTimePieces[1]

          const practicalSession: LessonType = {
            name: selectedCourses[i].name,
            startTime: startTime,
            endTime: endTime,
            place: practicalSessions[j].place,
            lecture: false,
            lecturer: lecturer,
            group: group,
          }
          var timeframe = 0

          if (startTime == "10:15") timeframe = 1
          else if (startTime == "12:15") timeframe = 2
          else if (startTime == "14:15") timeframe = 3
          else if (startTime == "16:15") timeframe = 4
          else if (startTime == "18:15") timeframe = 5
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
