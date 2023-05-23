"use server"

import { CourseType, LessonType } from "@/types/types"
import { courses } from "../api/data.json"

function addGroupPracticals(group: any, name: string, timetable: (LessonType | null)[][], freeDays: boolean[], freeLessons: boolean[]) {
  console.log(group)
  const practicalSessions = group.practicalSessions
  const groupName = group.group
  const lecturer = group.lecturer
  for (let j = 0; j < practicalSessions.length; j++) {
    const weekday = practicalSessions[j].weekday
    if (freeDays[weekday]) return false
    const startTimePieces = practicalSessions[j].startTime.split(":")
    const startTime = startTimePieces[0] + ":" + startTimePieces[1]
    const endTimePieces = practicalSessions[j].endTime.split(":")
    const endTime = endTimePieces[0] + ":" + endTimePieces[1]

    var timeframe = timeFrame(startTime, endTime)
    if (freeLessons[timeframe]) return false

    const practicalSession: LessonType = {
      name: name,
      startTime: startTime,
      endTime: endTime,
      place: practicalSessions[j].place,
      lecture: false,
      lecturer: lecturer,
      group: groupName,
      type: practicalSessions[j].type,
    }
    if (timetable[timeframe][weekday] == null) {
      timetable[timeframe][weekday] = practicalSession
    } else return false
  }
  return true
}

function timeFrame(start: string, end: string) {
  var timeframe
  const startTimePieces = start.split(":")
  const endTimePieces = end.split(":")
  const vahemikuIndeks = (parseInt(startTimePieces[0]) + parseInt(endTimePieces[0])) / 2

  if (vahemikuIndeks >= 18) timeframe = 5
  else if (vahemikuIndeks >= 16) timeframe = 4
  else if (vahemikuIndeks >= 14) timeframe = 3
  else if (vahemikuIndeks >= 12) timeframe = 2
  else if (vahemikuIndeks >= 10) timeframe = 1
  else timeframe = 0

  return timeframe
}

function compare(a: any, b: any) {
  if (a.groups.lenght < b.groups.lenght) {
    return -1
  }
  if (a.groups.lenght > b.groups.lenght) {
    return 1
  }
  return 0
}

function recursive(courses: any, index: number, timetables: (LessonType | null)[][][], timetable: (LessonType | null)[][], freeDays: boolean[], freeLessons: boolean[]) {
  if (index == courses.length) timetables.push(timetable)
  else if (courses[index].groups.length > 0) {
    const name = courses[index].name
    for (let i = 0; i < courses[index].groups.length; i++) {
      const timetableCopy = JSON.parse(JSON.stringify(timetable))
      const group = courses[index].groups[i]

      if (addGroupPracticals(group, name, timetableCopy, freeDays, freeLessons)) {
        recursive(courses, index + 1, timetables, timetableCopy, freeDays, freeLessons)
      }
    }
  } else recursive(courses, index + 1, timetables, timetable, freeDays, freeLessons)
}

export async function generateTimetables(selected: CourseType[], freeDays: boolean[], freeLessons: boolean[]) {
  try {
    const selectedCourses: any[] = []

    for (let i = 0; i < courses.length; i++) {
      for (let s = 0; s < selected.length; s++) {
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
    var coursesWithOnePractical = 0

    for (let i = 0; i < selectedCourses.length; i++) {
      const lectures = selectedCourses[i].lecture
      for (let j = 0; j < lectures.length; j++) {
        const weekday = lectures[j].weekday

        const startTimePieces = lectures[j].startTime.split(":")
        const startTime = startTimePieces[0] + ":" + startTimePieces[1]
        const endTimePieces = lectures[j].endTime.split(":")
        const endTime = endTimePieces[0] + ":" + endTimePieces[1]

        const lecture: LessonType = {
          name: selectedCourses[i].name,
          startTime: startTime,
          endTime: endTime,
          place: lectures[j].place,
          lecture: true,
          lecturer: null,
          group: null,
          type: null,
        }
        var timeframe = timeFrame(startTime, endTime)

        if (timetableConcrete[timeframe][weekday] == null) timetableConcrete[timeframe][weekday] = lecture
      }

      const groups = selectedCourses[i].groups
      if (groups.length == 1) {
        coursesWithOnePractical++
        const added = addGroupPracticals(groups[0], selectedCourses[i].name, timetableConcrete, [false, false, false, false, false], [false, false, false, false, false, false])
        if (added) selectedCourses.splice(i, 1);
        else throw "error";
      }
    }

    if (selectedCourses.length == 0) return [timetableConcrete]
    selectedCourses.sort(compare)
    console.log(selectedCourses)

    const timetableArray: (LessonType | null)[][][] = []
    recursive(selectedCourses, 0, timetableArray, timetableConcrete, freeDays, freeLessons)
    return timetableArray.length == 0 ? null : timetableArray
  } catch (error) {
    return null
  }
}
