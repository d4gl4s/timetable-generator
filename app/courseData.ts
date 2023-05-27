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
    let low = 0;
    let high = courses.length - 1;
    //binary search
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (courses[mid].code < courseCode) {
        low = mid + 1;
      } else if (courses[mid].code > courseCode) {
        high = mid - 1;
      } else if (courses[mid].code == courseCode) {
        const courseData: CourseType = {
          name: courses[mid].name,
          code: courses[mid].code,
          eap: courses[mid].eap,
          groups: getGroups(courses[mid])
        }
        return courseData
      }
    }
    return null
  }
  catch (error) {
    console.log(error)
    return null
  }
}
