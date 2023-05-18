export interface TimetableType {
  eight: (LessonType | null)[]
  ten: (LessonType | null)[]
  twelve: (LessonType | null)[]
  two: (LessonType | null)[]
  four: (LessonType | null)[]
  six: (LessonType | null)[]
}

export interface LessonType {
  name: string
  startTime: string
  endTime: string
  place: string
  lecture: boolean
}

export interface CourseType {
  name: string
  lecture: LessonType
  groups: GroupType[]
}
export interface GroupType {
  name: string
  labs: LessonType[]
}
