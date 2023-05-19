import { TimetableType } from "@/types/types"
import { table } from "console"
import { use, useRef, useState } from "react"
import { FaRegTimesCircle } from "react-icons/fa"

const Form = ({ setTimetables }: { setTimetables: any }) => {
  const lessontest = {
    name: "Sissejuhatus Erialasse",
    startTime: "8:15",
    endTime: "8:15",
    place: "Narva mnt 27 - 1025",
    lecture: false,
  }
  const lessontest2 = {
    name: "Programmeerimine II",
    startTime: "10:15",
    endTime: "14:15",
    place: "Narva mnt 27 - 1025",
    lecture: true,
  }

  const tabledata: TimetableType[] = [
    {
      eight: [lessontest2, null, lessontest, null, null],
      ten: [null, null, null, null, null],
      twelve: [null, lessontest, lessontest2, null, null],
      two: [lessontest, null, null, null, null],
      four: [null, lessontest2, null, lessontest, null],
      six: [lessontest, null, null, null, null],
    },
    {
      eight: [null, null, lessontest, null, null],
      ten: [null, null, null, null, lessontest2],
      twelve: [null, lessontest2, null, null, null],
      two: [lessontest, null, null, null, null],
      four: [null, null, null, lessontest2, null],
      six: [lessontest2, null, null, null, null],
    },
    {
      eight: [lessontest2, null, lessontest, lessontest, null],
      ten: [null, lessontest2, null, null, lessontest2],
      twelve: [null, null, null, null, lessontest],
      two: [null, lessontest, lessontest, null, null],
      four: [null, null, null, null, null],
      six: [null, lessontest, null, lessontest2, null],
    },
  ]

  const course: string[] = []
  const [selectedCourses, setSelectedCourses] = useState<string[]>(course)
  const [freeDays, setFreeDays] = useState<boolean[]>([false, false, false, false, false])
  const [freeLessons, setFreeLessons] = useState<boolean[]>([false, false, false, false, false, false])
   const [value, setValue] = useState({ min: 0, max: 100 })
  const [courseInput, setCourseInput] = useState<string>("")
  const [formOpen, setFormOpen] = useState<boolean>(true)
  const [timetableGenerated, setTimetableGenerated] = useState<boolean>(false)



  const submitForm = (e: any) => {
    e.preventDefault()
    setFormOpen(false)
    setTimetables(tabledata)
    setTimetableGenerated(true)
    
  }

  const handleCourseInputChange = (e: any) => {
    setCourseInput(e.target.value)
  }




  const handleCoursesAdd = () => {
    //Kursuse nimi?
    setSelectedCourses((oldArray: any) => [...oldArray, courseInput])
    setCourseInput("")
    //Siia cursor tagasi input fieldile
    addCourseInputRef.current!.focus()
  }
  const addCourseInputRef = useRef<HTMLInputElement>(null)

  const handleCourseDelete = (id: string) => {
    setSelectedCourses((current: string[]) =>
      current.filter((course: any) => {
        return course !== id
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

  return (
    <div>
      {formOpen ? (
        <div className="flex w-[95%] m-auto sm:w-full flex-col items-start mt-16">
          <h1 className="font-bold text-[1.1em] mb-16">Generate All Possible Timetables</h1>
          <div className="flex flex-col w-full mb-8">
            <label className="w-full flex justify-between">
              Enter the code of the course{" "}
              <div className="mb-2 font-normal">
                Selected: <span className="font-bold">{selectedCourses.length}</span>
              </div>
            </label>
            <div className="h-8 w-full  flex">
              <input
                ref={addCourseInputRef}
                placeholder="LTAT.00.000"
                className="h-full w-full rounded   placeholder-gray-300 font-medium bg-gray-100 mr-2"
                type="text"
                name="name"
                value={courseInput}
                onChange={handleCourseInputChange}
              />{" "}
              <button className="bg-orange-400 text-white w-[6em] h-full font-semibold text-[0.85em] rounded-[50px] unselectable" onClick={handleCoursesAdd}>
                ADD
              </button>{" "}
            </div>
            <ul className="text-[0.95em] font-medium mt-5">
              {selectedCourses?.map((course, i) => (
                <li key={i} className="flex w-full  items-start">
                  <span className="w-full">{course}</span> <FaRegTimesCircle onClick={() => handleCourseDelete(course)} size={18} className="text-gray-300 cursor-pointer w-5 mt-[2px]" />
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full mt-8">
            <label>At what times do you want your practises to take place at?</label>
            <div className="flex flex-wrap font-medium text-[0.8em] mt-4">
              {freeLessons.map((lessonValue, i) => {
                const lessons = ["08:15-09:45", "10:15-11:45", "12:15-13:45", "14:15-15:45", "16:15-17:45", "18:15-19:45"]
                return (
                  <div
                    key={i}
                    className={"p-[9px] px-6 unselectable rounded-[50px] mr-2 cursor-pointer flex items-center mb-2 " + (lessonValue ? "bg-orange-200 text-orange-600" : "bg-gray-100 text-gray-400")}
                    onClick={() => handleFreeLesson(i)}
                  >
                    {lessons[i]}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="w-full mt-10">
            <label>If you want to have days without practicals, select them here</label>
            <div className="flex flex-wrap font-medium text-[0.8em] mt-4">
              {freeDays.map((dayValue, i) => {
                const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
                return (
                  <div
                    key={i}
                    className={"p-[9px] px-6 rounded-[50px] mr-2 cursor-pointer flex items-center unselectable mb-2 " + (dayValue ? "bg-orange-200 text-orange-600" : "bg-gray-100 text-gray-400")}
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
                CANCEL
              </div>
            ) : null}

            <button onClick={submitForm} className="bg-blue-400 font-medium p-3 px-8 text-white rounded-[50px] unselectable">
              Generate
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-end mt-10 mb-10">
          <button onClick={() => setFormOpen(true)} className="bg-gray-200 font-medium p-[10px] px-6  text-[0.8em] rounded-[50px] unselectable">
            Generate New
          </button>
        </div>
      )}
    </div>
  )
}

export default Form
