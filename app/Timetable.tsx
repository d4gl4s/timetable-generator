import { TimetableType } from "@/types/types"
import Lesson from "./Lesson"

const Timetable = ({ timetable }: { timetable: TimetableType }) => {
  const { eight, ten, twelve, two, four, six } = timetable
  return (
    <>
      <div className="border border-[2px] rounded-lg overflow-hidden border-[#f0eff8]">
        <table className="min-w-[100%] divide-y divide-[#f0eff8] ">
          <thead>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f0eff8]">
            <tr>
              {eight.map((lesson, i) => {
                if (eight[i + 1] != null) return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td key={i}></td>
                else return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td className="border-solid border-r-[1px]" key={i}></td>
              })}
            </tr>

            <tr>
              {ten.map((lesson, i) => {
                if (ten[i + 1] != null) return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td key={i}></td>
                else return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td className="border-solid border-r-[1px]" key={i}></td>
              })}
            </tr>

            <tr>
              {twelve.map((lesson, i) => {
                if (twelve[i + 1] != null) return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td key={i}></td>
                else return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td className="border-solid border-r-[1px]" key={i}></td>
              })}
            </tr>

            <tr>
              {two.map((lesson, i) => {
                if (two[i + 1] != null) return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td key={i}></td>
                else return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td className="border-solid border-r-[1px]" key={i}></td>
              })}
            </tr>

            <tr>
              {four.map((lesson, i) => {
                if (four[i + 1] != null) return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td key={i}></td>
                else return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td className="border-solid border-r-[1px]" key={i}></td>
              })}
            </tr>

            <tr>
              {six.map((lesson, i) => {
                if (six[i + 1] != null) return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td key={i}></td>
                else return lesson != null ? <Lesson key={i} lesson={lesson} /> : <td className="border-solid border-r-[1px]" key={i}></td>
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-8">
        <div className="font-medium text-[0.8em]">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-[50px] bg-purple-400 mr-2"></div> Lecture
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-[50px] bg-green-400 mr-2"></div> Lab Practise
          </div>
        </div>
      </div>
    </>
  )
}

export default Timetable
