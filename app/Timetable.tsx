/* import { TimetableType } from "@/types/types" */
import { LessonType } from "@/types/types"
import Lesson from "./Lesson"

const Timetable = ({ timetable }: { timetable: (LessonType | null)[][] }) => {
  return (
    <>
      <div className="border border-[2px] rounded-lg overflow-hidden border-[#f0eff8] overflow-visible">
        {timetable != null ? (
          <table className="min-w-[100%] divide-y divide-[#f0eff8] ">
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
              <tr>
                {timetable[0].map((lesson, i) => {
                  if (timetable[0][i + 1] != null) return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td key={i}></td>
                  else return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td className="border-solid border-r-[1px]" key={i}></td>
                })}
              </tr>

              <tr>
                {timetable[1].map((lesson, i) => {
                  if (timetable[1][i + 1] != null) return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td key={i}></td>
                  else return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td className="border-solid border-r-[1px]" key={i}></td>
                })}
              </tr>

              <tr>
                {timetable[2].map((lesson, i) => {
                  if (timetable[2][i + 1] != null) return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td key={i}></td>
                  else return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td className="border-solid border-r-[1px]" key={i}></td>
                })}
              </tr>

              <tr>
                {timetable[3].map((lesson, i) => {
                  if (timetable[3][i + 1] != null) return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td key={i}></td>
                  else return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td className="border-solid border-r-[1px]" key={i}></td>
                })}
              </tr>

              <tr>
                {timetable[4].map((lesson, i) => {
                  if (timetable[4][i + 1] != null) return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td key={i}></td>
                  else return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td className="border-solid border-r-[1px]" key={i}></td>
                })}
              </tr>

              <tr>
                {timetable[5].map((lesson, i) => {
                  if (timetable[5][i + 1] != null) return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td key={i}></td>
                  else return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td className="border-solid border-r-[1px]" key={i}></td>
                })}
              </tr>
            </tbody>
          </table>
        ) : null}
      </div>
      <div className="flex justify-end mt-8">
        <div className="font-medium text-[0.8em]">
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
