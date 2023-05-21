import { LessonType } from "@/types/types"
import { useState } from "react"
import OutsideClickHandler from "react-outside-click-handler"

const Lesson = ({ lesson }: { lesson: LessonType }) => {
  const [open, setOpen] = useState<boolean>(false)
  const { name, startTime, endTime, lecture, place, lecturer, group, type } = lesson

  return (
    <>
      <td
        onClick={() => setOpen(open ? false : true)}
        className={
          "relative inner-border-[1px] leading-[16px] cursor-pointer rounded-[4px] z-2  break-all break-words  " +
          (lecture ? "bg-purple-200 inner-border-purple-400" : type == "practice" ? "bg-green-100 inner-border-green-300" : "bg-orange-100 inner-border-orange-300")
        }
      >
        <OutsideClickHandler
          onOutsideClick={() => {
            setOpen(false)
          }}
        >
          <div className="w-full h-[100px] z-10">
            <div className="text-[0.8em] sm:text-[0.9em] font-medium px-1 pt-1">
              {startTime}-{endTime}
            </div>
            <div className="mx-1">{name}</div>
            {open ? (
              <div className="absolute bg-gray-100 font-medium rounded inner-border-[1px] inner-border-gray-400 w-[110%] ml-[-5%] z-20 top-[60px] h-fit p-[4px]">
                <div className="text-[0.8em] sm:text-[0.9em] font-black">
                  {startTime}-{endTime}
                </div>
                <div>{name}</div>
                <div className="mt-2 capitalize">{lecture ? "Lecture" : type}</div>
                <div>{place}</div>
                <div className="mt-4">{lecturer}</div>
                {group != null ? <div> {group} </div> : null}
              </div>
            ) : null}
          </div>
        </OutsideClickHandler>
      </td>
    </>
  )
}

export default Lesson
