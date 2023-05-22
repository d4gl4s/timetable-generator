/* import { TimetableType } from "@/types/types" */
import { Console, table } from "console"
import { use, useRef, useState } from "react"
import { FaTimes } from "react-icons/fa"
import { generateTimetables } from "./generate"
import { CourseType, LessonType } from "@/types/types"
import ScaleLoader from "react-spinners/ScaleLoader"
import { getCourseData } from "./courseData"

const Form = ({ setTimetables, /* setLoading, */ setCurrent }: any) => {
  const [selectedCourses, setSelectedCourses] = useState<CourseType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [freeDays, setFreeDays] = useState<boolean[]>([false, false, false, false, false])
  const [freeLessons, setFreeLessons] = useState<boolean[]>([false, false, false, false, false, false])
  const [courseInput, setCourseInput] = useState<string>("")
  const [formOpen, setFormOpen] = useState<boolean>(true)
  const [timetableGenerated, setTimetableGenerated] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const submitForm = async (e: any) => {
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

  const handleCourseInputChange = (e: any) => {
    setCourseInput(e.target.value.toUpperCase())
  }
  const handleInputKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleCoursesAdd()
    }
  }

  const handleCoursesAdd = async () => {
    //Kursuse nimi?
    if (courseInput.trim().length < 8 || courseInput.trim().length > 15) setError("Ainet ei leitud!")
    else {
      const courseData = await getCourseData(courseInput.trim())
      if (courseData == null) setError("Ainet ei leitud!")
      else {
        for (let i = 0; i < selectedCourses.length; i++) {
          if (courseData.code == selectedCourses[i].code) {
            setError("Aine juba lisatud!")
            return
          }
        }

        setSelectedCourses((oldArray: any) => [...oldArray, courseData])
        setError("")
        setCourseInput("")
      }
      //Siia cursor tagasi input fieldile
      addCourseInputRef.current!.focus()
    }
  }
  const addCourseInputRef = useRef<HTMLInputElement>(null)

  const handleCourseDelete = (code: string) => {
    setSelectedCourses((current: CourseType[]) =>
      current.filter((course: CourseType) => {
        return course.code !== code
      })
    )
  }
  const handleFreeDay = (i: number) => {
    const newFreeDays = freeDays!.map((day, indeks: any) => {
      if (indeks === i) return !day
      return day
    })
    setFreeDays(newFreeDays)
  }
  const handleFreeLesson = (i: number) => {
    const newFreeLesson = freeLessons!.map((lesson, indeks: any) => {
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
        <div className="flex w-[93%] m-auto sm:w-full flex-col items-start mt-16 text-[0.9em]">
          <h1 className="font-bold text-[1.1em] mb-16">Genereeri kõik võimalik tunniplaanid</h1>
          <div className="flex flex-col w-full mb-8">
            <label className="w-full flex justify-between">
              Sisesta kursuse kood{" "}
              <div className="mb-2 font-normal">
                Valitud: <span className="font-bold mr-8">{selectedCourses.length}</span>
                EAP: <span className="font-bold">{getEAP()}</span>
              </div>
            </label>
            <div className="h-8 w-full  flex">
              <input
                ref={addCourseInputRef}
                placeholder="LTAT.00.000"
                className="h-full w-full rounded   placeholder-gray-300 font-medium bg-gray-100 mr-2"
                type="text"
                maxLength={11}
                name="name"
                onKeyPress={(e) => handleInputKeyPress(e)}
                value={courseInput}
                onChange={handleCourseInputChange}
              />
              <button className="bg-orange-400 text-white w-[6em] h-full font-semibold text-[0.85em] rounded-[50px] unselectable" onClick={handleCoursesAdd}>
                LISA
              </button>
            </div>
            {error != "" ? <div className="mt-2 text-[0.85em] font-medium text-red-500">{error}</div> : null}
            <ul className="text-[0.95em] font-medium mt-5">
              {selectedCourses?.map((course, i) => (
                <li key={i} className="flex w-full  items-start justify-between">
                  <div className="flex items-center">
                    <span className="w-full text-[1.1em]">{i + 1 + ".  " + course.name}</span> <span className="font-semibold ml-4 text-gray-300">{course.code}</span>
                  </div>
                  <FaTimes onClick={() => handleCourseDelete(course.code)} size={14} className="text-gray-300 cursor-pointer w-5 mt-[2px]" />
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full mt-8">
            <label>Vali kellaajad, millal ei soovi praktikume</label>
            <div className="flex flex-wrap font-medium text-[0.8em] mt-4">
              {freeLessons.map((lessonValue, i) => {
                const lessons = ["08:15-09:45", "10:15-11:45", "12:15-13:45", "14:15-15:45", "16:15-17:45", "18:15-19:45"]
                return (
                  <div
                    key={i}
                    className={
                      "p-[9px] px-6 unselectable rounded-[50px] mr-2 cursor-pointer flex items-center mb-2 " + (lessonValue ? "bg-red-200 text-red-600 line-through" : "bg-gray-100 text-gray-400")
                    }
                    onClick={() => handleFreeLesson(i)}
                  >
                    {lessons[i]}
                  </div>
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
                  <div
                    key={i}
                    className={
                      "p-[9px] px-6 rounded-[50px] mr-2 cursor-pointer flex items-center unselectable mb-2 " + (dayValue ? "bg-red-200 text-red-600 line-through" : "bg-gray-100 text-gray-400")
                    }
                    onClick={() => handleFreeDay(i)}
                  >
                    {days[i]}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="w-full flex justify-end mt-10 mb-10 items-center text-[0.9em]">
            {timetableGenerated ? (
              <div className="font-bold mr-4 text-[0.85em] cursor-pointer" onClick={() => setFormOpen(false)}>
                TAGASI
              </div>
            ) : null}

            <button onClick={submitForm} className="bg-blue-400 w-32 h-10 font-medium  text-white rounded-[50px] unselectable flex items-center justify-center">
              {loading ? null : "Genereeri"}
              <ScaleLoader color="white" loading={loading} height={14} radius={1} aria-label="Loading Spinner" data-testid="loader" />
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-end mt-10 mb-10">
          <button onClick={() => setFormOpen(true)} className="bg-gray-200 font-medium p-[10px] px-6  text-[0.8em] rounded-[50px] unselectable">
            Genereeri Uus
          </button>
        </div>
      )}
    </div>
  )
}

export default Form
