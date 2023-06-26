export interface LessonType {
  name: string
  startTime: string
  endTime: string
  place: string[] | string | null
  lecture: boolean
  lecturer: string[] | null
  group: string[] | null
  type: string | null
}

export interface CourseType {
  name: string
  code: string
  eap: number
  lecture: LectureType[]
  groups: GroupType[]
  groupsNotWanted?: string[]
  groupNames?: string[]
}

export interface LectureType {
  weekday: number
  startTime: string
  endTime: string
  place: string | null
}

export interface GroupType {
  group: (string | null)[]
  lecturer: (string | null)[]
  practicalSessions: PracticalSession[]
}

export interface PracticalSession {
  weekday: number
  startTime: string
  endTime: string
  place: (string | null)[]
  type: string
}
export interface Dictionary {
  lang: string
  title: string
  introduction: string
  enterCodes: string
  selected: string
  addButton: string
  timesToAvoid: string
  daysToAvoid: string
  generate: string
  weekdays: string[]
  generateNew: string
  back: string
  removeAll: string
  previous: string
  next: string
  timetable: string
  lecture: string
  practicalClass: string
  seminar: string
}
