import { CourseType, LessonType } from "@/types/types"

//Can't use server functions because next js bug https://github.com/vercel/next.js/discussions/37424 https://github.com/facebook/react/issues/19519

function addGroupPracticals(group: any, name: string, timetable: (LessonType | null)[][], freeDays: boolean[], freeLessons: boolean[]) {
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

export async function generateTimetables(selectedCourses: CourseType[], freeDays: boolean[], freeLessons: boolean[]) {
  try {
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
      for (let j = 0; j < groups.length; j++) {
        for (let k = 0; k < groups[j].group.length; k++) {
          for (let l = 0; l < selectedCourses[i].groupsNotWanted!.length; l++) {
            if (groups[j].group[k] == selectedCourses[i].groupsNotWanted![l]) {
              groups[j].group.splice(k, 1)
              k--
            }
          }
        }
        if (groups[j].group.length == 0) {
          groups.splice(j, 1)
          j--
        }
      }
      if (groups.length == 1) {
        const added = addGroupPracticals(groups[0], selectedCourses[i].name, timetableConcrete, [false, false, false, false, false], [false, false, false, false, false, false])
        if (added) {
          selectedCourses.splice(i, 1)
          i--
        } else throw "error"
      }
    }

    if (selectedCourses.length == 0) return [timetableConcrete]

    selectedCourses.sort(compare)

    const timetableArray: (LessonType | null)[][][] = []
    recursive(selectedCourses, 0, timetableArray, timetableConcrete, freeDays, freeLessons)
    return timetableArray.length == 0 ? null : timetableArray
  } catch (error) {
    return null
  }
}
