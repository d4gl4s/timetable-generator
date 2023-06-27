/* "use server" */

import { CourseType } from "@/types/types"
import coursesAll from "../../api/data.json"
import coursesAllEst from "../../api/dataEst.json"

function getGroups(course: any) {
  const output: string[] = []
  for (let i = 0; i < course.groups.length; i++) {
    for (let j = 0; j < course.groups[i].group.length; j++) {
      output.push(course.groups[i].group[j])
    }
  }
  return output
}

const dictionaries = {
  "en-US": coursesAll.coursesENG, //English
  "et-EE": coursesAllEst.coursesEST, //Estonian
}

export async function getCourseData(courseCode: string, lang: string) {
  /* try { */
  var language: "et-EE" | "en-US" = "en-US"
  if (lang == "et") language = "et-EE"
  const courses = dictionaries[language]

  let low = 0
  let high = courses.length - 1
  //binary search
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2)
    if (courses[mid].code < courseCode) {
      low = mid + 1
    } else if (courses[mid].code > courseCode) {
      high = mid - 1
    } else if (courses[mid].code == courseCode) {
      var course: CourseType = courses[mid]
      course.groupsNotWanted = []
      course.groupNames = getGroups(courses[mid])
      return course
    }
  }
  return null
  /* } catch (error) {
    return null
  } */
}
