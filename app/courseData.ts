"use server"

import { CourseType } from "@/types/types"
import { group } from "console"
import path from "path"
const { readFileSync } = require("fs")

export async function getCourseData(courseCode: string) {
  try {
    const pathDir = "./data.json"

    const configDirectory = path.resolve(process.cwd(), "api")
    console.log(process.cwd())
    console.log(configDirectory)

    const file = await readFileSync(path.join(configDirectory, "data.json"), "utf8")

    /* const jsonString = await readFileSync(pathDir) */

    const jsonString = await readFileSync(file)
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
