/* export interface TimetableType {
  eight: (LessonType | null)[]
  ten: (LessonType | null)[]
  twelve: (LessonType | null)[]
  two: (LessonType | null)[]
  four: (LessonType | null)[]
  six: (LessonType | null)[]
} */

export interface LessonType {
  name: string
  startTime: string
  endTime: string
  place: string[] | null
  lecture: boolean
  lecturer: string[] | null
  group: string[] | null
  type: string | null
}

export interface CourseType {
  name: string
  code: string
  eap: number
}
export interface GroupType {
  name: string
  labs: LessonType[]
}
