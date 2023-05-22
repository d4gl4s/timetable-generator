/* import { TimetableType } from "@/types/types" */
import { LessonType } from "@/types/types"
import Lesson from "./Lesson"

const Timetable = ({ timetable }: { timetable: (LessonType | null)[][] }) => {
  const containsLesson = (timeFrame: (LessonType | null)[]) => {
    for (let i = 0; i < timeFrame.length; i++) {
      if (timeFrame[i] != null) return true
    }
    return false
  }
  const emptyRows = [true, true, true, true, true, true]

  for (let k = timetable.length - 1; k >= 0; k--) {
    if (containsLesson(timetable[k])) break
    else {
      emptyRows[k] = false
    }
  }

  return (
    <>
      <div className=" tableShadow  rounded-lg overflow-hidden border-[#f0eff8] overflow-visible pb-1">
        {timetable != null ? (
          <table className="min-w-[100%] divide-y divide-[#f0eff8]">
            <thead>
              <tr>
                <th>Esmaspäev</th>
                <th>Teisipäev</th>
                <th>Kolmapäev</th>
                <th>Neljapäev</th>
                <th>Reede</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f0eff8]">
              {emptyRows[0] ? (
                <tr>
                  {timetable[0].map((lesson, i) => {
                    if (timetable[0][i + 1] != null) return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td key={i}></td>
                    else return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td className="border-solid border-r-[1px]" key={i}></td>
                  })}
                </tr>
              ) : null}
              {emptyRows[1] ? (
                <tr>
                  {timetable[1].map((lesson, i) => {
                    if (timetable[1][i + 1] != null) return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td key={i}></td>
                    else return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td className="border-solid border-r-[1px]" key={i}></td>
                  })}
                </tr>
              ) : null}
              {emptyRows[2] ? (
                <tr>
                  {timetable[2].map((lesson, i) => {
                    if (timetable[2][i + 1] != null) return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td key={i}></td>
                    else return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td className="border-solid border-r-[1px]" key={i}></td>
                  })}
                </tr>
              ) : null}
              {emptyRows[3] ? (
                <tr>
                  {timetable[3].map((lesson, i) => {
                    if (timetable[3][i + 1] != null) return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td key={i}></td>
                    else return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td className="border-solid border-r-[1px]" key={i}></td>
                  })}
                </tr>
              ) : null}

              {emptyRows[4] ? (
                <tr>
                  {timetable[4].map((lesson, i) => {
                    if (timetable[4][i + 1] != null) return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td key={i}></td>
                    else return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td className="border-solid border-r-[1px]" key={i}></td>
                  })}
                </tr>
              ) : null}

              {emptyRows[5] ? (
                <tr>
                  {timetable[5].map((lesson, i) => {
                    if (timetable[5][i + 1] != null) return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td key={i}></td>
                    else return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td className="border-solid border-r-[1px]" key={i}></td>
                  })}
                </tr>
              ) : null}
            </tbody>
          </table>
        ) : null}
      </div>
      <div className="flex justify-end mt-8 mb-48">
        <div className="font-medium text-[0.85em] 2xl:text-[1em]">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-[50px] bg-purple-400 mr-2"></div> Loeng
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-[50px] bg-green-400 mr-2"></div> Praktikum
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-[50px] bg-orange-400 mr-2"></div> Seminar
          </div>
        </div>
      </div>
    </>
  )
}

export default Timetable
