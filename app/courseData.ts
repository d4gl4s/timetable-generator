"use server"

import { CourseType } from "@/types/types"
import { group } from "console"
const { readFileSync } = require("fs")

export async function getCourseData(courseCode: string) {
  try {
    const path = "./app/data.json"
    const jsonString = await readFileSync(path)
    const { courses } = JSON.parse(jsonString)

    const selectedCourses: any[] = []

    for (let i = 0; i < courses.length; i++) {
      if (courses[i].code == courseCode) {
        const courseData: CourseType = {
          name: courses[i].name,
          code: courses[i].code,
          eap: courses[i].eap,
        }
        return courseData
      }
    }
    return null
  } catch (error) {
    return null
  }
}
