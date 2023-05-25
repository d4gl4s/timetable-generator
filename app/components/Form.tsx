import { useRef, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { generateTimetables } from "../generate"
import { CourseType, LessonType } from "@/types/types"
import ScaleLoader from "react-spinners/ScaleLoader"
import { getCourseData } from "../courseData"
import SelectedCourse from "./SelectedCourse"
import { BiRightArrow } from "react-icons/bi"

const Form = ({ setTimetables, setCurrent }: any) => {
  const [selectedCourses, setSelectedCourses] = useState<CourseType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [freeDays, setFreeDays] = useState<boolean[]>([false, false, false, false, false])
  const [freeLessons, setFreeLessons] = useState<boolean[]>([false, false, false, false, false, false])
  const [courseInput, setCourseInput] = useState<string>("")
  const [formOpen, setFormOpen] = useState<boolean>(true)
  const [timetableGenerated, setTimetableGenerated] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const addCourseInputRef = useRef<HTMLInputElement>(null)

  const submitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (selectedCourses.length == 0) setError("Sisesta vähemalt ühe aine kood!")
    else {
      setLoading(true)
      setCurrent(0)
      try {
        const timetableData: (LessonType | null)[][][] | null = await generateTimetables(selectedCourses, freeDays, freeLessons)
        if (timetableData == null) {
          setError("Ei olnud võimalik tunniplaani genereerida.")
          setTimetables(null)
        } else {
          setFormOpen(false)
          setTimetables(timetableData)
          setTimetableGenerated(true)
          setError("")
        }
      } catch (error) {
        setError("Midagi läks valesti, proovi hiljem uuesti!")
      }
      setLoading(false)
    }
  }

  const handleCourseInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCourseInput(e.currentTarget.value.toUpperCase())
  }
  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCoursesAdd()
    }
  }

  const handleCoursesAdd = async () => {
    if (courseInput.trim().length < 10 || courseInput.trim().length > 15) setError("Ainet ei leitud!")
    else {
      const courseData = await getCourseData(courseInput.trim())

      if (courseData == null) {
        setError("Ainet ei leitud!")
      } else {
        for (let i = 0; i < selectedCourses.length; i++) {
          if (courseData.code == selectedCourses[i].code) {
            setError("Aine juba lisatud!")

            return
          }
        }
        courseData.groupsNotWanted = []
        setSelectedCourses((oldArray: CourseType[]) => [...oldArray, courseData])
        setError("")
        setCourseInput("")
      }
    }
    /*  addCourseInputRef.current!.focus() */
  }

  const handleCourseDelete = (code: string) => {
    setSelectedCourses((current: CourseType[]) =>
      current.filter((course: CourseType) => {
        return course.code !== code
      })
    )
  }
  const handleFreeDay = (i: number) => {
    const newFreeDays = freeDays!.map((day, indeks: number) => {
      if (indeks === i) return !day
      return day
    })
    setFreeDays(newFreeDays)
  }
  const handleFreeLesson = (i: number) => {
    const newFreeLesson = freeLessons!.map((lesson, indeks: number) => {
      if (indeks === i) return !lesson
      return lesson
    })
    setFreeLessons(newFreeLesson)
  }
  const getEAP = () => {
    var sum = 0
    for (let i = 0; i < selectedCourses.length; i++) {
      sum += selectedCourses[i].eap
    }
    return sum
  }

  return (
    <div>
      {formOpen ? (
        <div className="flex w-[93%] m-auto sm:w-full flex-col items-start mt-16 text-[0.9em] 2xl:text-[1em]  sm:p-10">
          <h1 className="font-bold text-[1.1em] mb-20 mt-16 w-full flex items-end justify-between">
            Genereeri kõik võimalikud tunniplaanid{" "}
            <motion.div whileHover={{ color: "#e2e8f0" }} initial={{ color: "#94a3b8" }} animate={{ color: "#94a3b8" }}>
              <Link href="/projektist" className="font-medium unselectable text-[0.8em] h-fit underline flex items-center">
                Sissejuhatus <BiRightArrow size={12} className="ml-2" />
              </Link>
            </motion.div>
          </h1>
          <div className="flex flex-col w-full mb-8">
            <label className="w-full flex justify-between">
              Sisesta ainete koodid{" "}
              <div className="mb-2 font-normal">
                Valitud: <span className="font-bold mr-8">{selectedCourses.length}</span>
                EAP: <span className="font-bold">{getEAP()}</span>
              </div>
            </label>
            <div className="h-8 w-full  flex">
              <input
                ref={addCourseInputRef}
                placeholder="LTAT.00.000"
                className="h-full w-full rounded   placeholder-slate-300 font-medium bg-slate-100 mr-2"
                autoComplete="off"
                type="text"
                /* autoFocus={true} */
                maxLength={11}
                name="name"
                onKeyPress={(e) => handleInputKeyPress(e)}
                value={courseInput}
                onChange={handleCourseInputChange}
              />
              <motion.button
                whileHover={{ backgroundColor: "#5b8bde" }}
                className="bg-blue-400 text-white w-[6em] h-full font-semibold text-[0.85em] rounded-[50px] unselectable"
                onClick={handleCoursesAdd}
              >
                LISA
              </motion.button>
            </div>
            {error != "" ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-[0.85em] font-medium text-red-500">
                {error}
              </motion.div>
            ) : null}

            <ul className="text-[0.95em] font-medium mt-5">
              {selectedCourses?.map((course, i) => (
                <SelectedCourse handleCourseDelete={handleCourseDelete} course={course} key={i} i={i} />
              ))}
            </ul>
          </div>
          <div className="w-full mt-8">
            <label>Vali kellaajad, millal ei soovi praktikume</label>
            <div className="flex flex-wrap font-medium text-[0.8em] mt-4">
              {freeLessons.map((lessonValue, i) => {
                const lessons = ["08:15-09:45", "10:15-11:45", "12:15-13:45", "14:15-15:45", "16:15-17:45", "18:15-19:45"]
                return (
                  <motion.div
                    key={i}
                    animate={{ backgroundColor: lessonValue ? "#fecaca" : "#f3f4f6" }}
                    transition={{ duration: 0.1 }}
                    whileHover={{ backgroundColor: lessonValue ? "#fca5a5" : "#e2e8f0" }}
                    className={"p-[9px] px-6 unselectable bg-slate-100 rounded-[50px] mr-2 cursor-pointer flex items-center mb-2 " + (lessonValue ? " text-red-600 line-through" : "text-slate-400")}
                    onClick={() => handleFreeLesson(i)}
                  >
                    {lessons[i]}
                  </motion.div>
                )
              })}
            </div>
          </div>
          <div className="w-full mt-10">
            <label>Vali päevad, millal ei soovi praktikume</label>
            <div className="flex flex-wrap font-medium text-[0.8em] mt-4">
              {freeDays.map((dayValue, i) => {
                const days = ["Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede"]
                return (
                  <motion.div
                    key={i}
                    animate={{ backgroundColor: dayValue ? "#fecaca" : "#f3f4f6" }}
                    whileHover={{ backgroundColor: dayValue ? "#fca5a5" : "#e2e8f0" }}
                    className={"p-[9px] px-6 rounded-[50px] bg-slate-100 mr-2 cursor-pointer flex items-center unselectable mb-2 " + (dayValue ? " text-red-600 line-through" : " text-slate-400")}
                    onClick={() => handleFreeDay(i)}
                  >
                    {days[i]}
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="w-full flex justify-end mt-14 mb-4 items-center text-[0.9em]">
            {timetableGenerated ? (
              <motion.div whileHover={{ color: "#94a3b8" }} className="font-bold mr-4 text-[0.85em] cursor-pointer" onClick={() => setFormOpen(false)}>
                TAGASI
              </motion.div>
            ) : null}

            <motion.button
              whileHover={{ backgroundColor: "#5b8bde" }}
              onClick={submitForm}
              className="bg-blue-400 w-32 h-10 font-medium  text-white rounded-[50px] unselectable flex items-center justify-center"
            >
              {loading ? null : "Genereeri"}
              <ScaleLoader color="white" loading={loading} height={14} radius={1} aria-label="Loading Spinner" data-testid="loader" />
            </motion.button>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-end mt-10 mb-10">
          <motion.button whileHover={{ backgroundColor: "#e2e8f0" }} onClick={() => setFormOpen(true)} className="bg-slate-100 font-medium p-[10px] px-6  text-[0.8em] rounded-[50px] unselectable">
            Genereeri Uus
          </motion.button>
        </div>
      )}
    </div>
  )
}

export default Form
