"use server"

import { CourseType } from "@/types/types"
import { courses } from "../api/data.json"

function getGroups(course: any) {
  const output: string[] = []
  for (let i = 0; i < course.groups.length; i++) {
    for (let j = 0; j < course.groups[i].group.length; j++) {
      output.push(course.groups[i].group[j])
    }
  }
  return output;
}

export async function getCourseData(courseCode: string) {
  try {
    for (let i = 0; i < courses.length; i++) {
      if (courses[i].code == courseCode) {
        const courseData: CourseType = {
          name: courses[i].name,
          code: courses[i].code,
          eap: courses[i].eap,
          groups: getGroups(courses[i])
        }
        return courseData
      }
    }
    return null
  } catch (error) {
    return null
  }
}
