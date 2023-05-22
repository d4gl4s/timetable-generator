import { LessonType } from "@/types/types"
import { useState } from "react"
import OutsideClickHandler from "react-outside-click-handler"

const popUp = (places: any, groups: any, lecturers: any) => {
  return (
    <div>
      {places.map((place: any, i: any) => (
        <div key={i} className="mt-3">
          <div className="font-bold">{groups[i]}</div>
          <div>{places[i]}</div>
          <div>{lecturers[i]}</div>
        </div>
      ))}
    </div>
  )
}

const Lesson = ({ lesson }: { lesson: LessonType }) => {
  const [open, setOpen] = useState<boolean>(false)
  const { name, startTime, endTime, lecture, place, lecturer, group, type } = lesson

  return (
    <>
      <td
        onClick={() => setOpen(open ? false : true)}
        className={
          "relative 2xl:text-[0.9em] inner-border-[1px] leading-[16px] cursor-pointer rounded-[4px] z-2  break-all break-words  " +
          (lecture ? "bg-purple-200 inner-border-purple-400" : type == "praktikum" ? "bg-green-100 inner-border-green-300" : "bg-orange-100 inner-border-orange-300")
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
            {group != null ? <div className="absolute bottom-0 m-1 text-[0.9em] text-green-500 max-h-[28px] overflow-hidden">{group.join(", ")}</div> : null}

            {open ? (
              <div className="absolute bg-gray-100 font-medium rounded inner-border-[1px] inner-border-gray-400 w-[110%] ml-[-5%] z-20 top-[60px] h-fit p-[4px]">
                <div className="text-[0.8em]  sm:text-[0.9em] font-black">
                  {startTime}-{endTime}
                </div>
                <div>{name}</div>
                <div className="mt-2 capitalize">{lecture ? "Loeng" : type}</div>

                {!lecture ? popUp(place, group, lecturer) : null}
                {/* {place.map((lesson, i) => ())} */}
                {/* <div>{place}</div>
                <div className="mt-4">{lecturer}</div>
                <div className="mt-4">{group}</div> */}
              </div>
            ) : null}
          </div>
        </OutsideClickHandler>
      </td>
    </>
  )
}

export default Lesson
