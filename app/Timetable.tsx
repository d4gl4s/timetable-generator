import { TimetableType } from "@/types/types"
import Lesson from "./Lesson"

const Timetable = (/* { timetable }: { timetable: TimetableType } */) => {
  /* const { monday, tuesday, wednesday, thursday, friday } = timetable */
  return (
    <div className="bg-red-300">
      {/*  <div className="mr-2 bg-blue-200">Ajad</div> 
      https://preline.co/docs/tables.html
      */}

      <div className="w-[80%] m-auto  border rounded-lg overflow-hidden border-current">
        <table className="min-w-[100%] divide-y divide-current">
          <thead>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-current">
            <tr>
              <td>John Brown</td>
              <td>45</td>
              <td>New York No. 1 Lake Park</td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>Jim Green</td>
              <td>27</td>
              <td>London No. 1 Lake Park</td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>Joe Black</td>
              <td>31</td>
              <td>Sidney No. 1 Lake Park</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <table className="bg-blue-200 w-[80%] m-auto border-[1px] border-current rounded-2xl ">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          <tr>
            <td>Anom asdfgds sdjkgh ksdgalh sdlkghjasgdklh skdlagh kdsghk</td>
            <td>19</td>
            <td>Male</td>
            <td>Male</td>
            <td>Male</td>
          </tr>
          <tr>
            <td></td>
            <td>Megha</td>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
          </tr>
          <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
            <td>Male</td>
            <td>Male</td>
          </tr>
        </tbody>
      </table> */}
      {/*  <div className="flex w-full bg-yellow-300">
        <div className="w-[20%] border-solid border-x-[1px] border-current">
          <div className="border-solid border-y-[1px] border-current p-2 font-semibold">Monday</div>

          <Lesson />
          <Lesson />
          <Lesson />
          <Lesson />
        </div>
        <div className="w-[20%] border-solid border-x-[1px] border-current">
          <div className="border-solid border-y-[1px] border-current p-2 font-semibold">Monday</div>
          <div></div>
          <div>Tund</div>
          <div>Tund</div>
        </div>
        <div className="w-[20%] border-solid border-x-[1px] border-current">
          <div className="border-solid border-y-[1px] border-current p-2 font-semibold">Monday</div>
          <div>Tund</div>
          <div>Tund</div>
          <div>Tund</div>
        </div>
        <div className="w-[20%] border-solid border-x-[1px] border-current">
          <div className="border-solid border-y-[1px] border-current p-2 font-semibold">Tuesday dfsdf</div>
          <div>Tund</div>
          <div>Tund</div>
          <div>Tund</div>
        </div>
        <div className="w-[20%] border-solid border-x-[1px] border-current">
          <div className="border-solid border-y-[1px] border-current p-2 font-semibold">Monday</div>
          <div>Tund</div>
          <div>Tund</div>
          <div>Tund</div>
        </div>
      </div> */}
    </div>
  )
}

export default Timetable
