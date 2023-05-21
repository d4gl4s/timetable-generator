"use server"

import { CourseType } from "@/types/types"
import { courses } from "../api/data.json"
const { readFileSync } = require("fs")

export async function getCourseData(courseCode: string) {
  try {
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
