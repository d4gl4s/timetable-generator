export interface TimetableType {
  monday: LessonType[]
  tuesday: LessonType[]
  wednesday: LessonType[]
  thursday: LessonType[]
  friday: LessonType[]
}

export interface LessonType {
  name: string
  startTime: Date
  endTime: Date
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
