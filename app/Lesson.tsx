import { LessonType } from "@/types/types"

const Lesson = ({ lesson }: { lesson: LessonType }) => {
  const { name, startTime, endTime, lecture } = lesson
  return (
    <td className={"border-solid leading-[16px] border-[1px] break-all break-words overflow-hidden " + (lecture ? "bg-purple-200 border-purple-400" : "bg-green-100 border-green-300")}>
      {/* {lecture ? "loeng" : "praktikum"} */}
      <div className="text-[0.8em] sm:text-[0.9em] font-medium">
        {startTime}-{endTime}{" "}
      </div>
      {name}
    </td>
  )
}

export default Lesson
