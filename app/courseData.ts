"use server"

import { CourseType } from "@/types/types"
import { group } from "console"
import { courses } from "./data.json"
import path from "path"
const { readFileSync } = require("fs")

export async function getCourseData(courseCode: string) {
  try {
    /* const pathDir = "./data.json" */

    /* const file = path.join(process.cwd(), "api", "data.json")
    const data = await readFileSync(file, "utf8") */

    /* const configDirectory = path.resolve(process.cwd()) */
    /* console.log(process.cwd())
    console.log(configDirectory) */

    /* const file = await readFileSync(path.join(configDirectory, "data.json"), "utf8")
     */
    /* const jsonString = await readFileSync(pathDir) */

    /* const jsonString = await readFileSync(file) */
    /* const { courses } = JSON.parse(data) */
    console.log(courses)

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
