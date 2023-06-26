import { LessonType } from "@/types/types"
import { useState } from "react"

import OutsideClickHandler from "react-outside-click-handler"

const popUp = (places: string[] | string | null, groups: string[] | null, lecturers: string[] | null) => {
  return (
    <div>
      {/* we know that places.length == groups.length == lecturers.length */}
      {groups != null &&
        groups.map((group: string | null, i: number) => (
          <div key={i} className="mt-3">
            {group != null && <div className="font-bold">{group}</div>}
            {places != null && <div>{places[i]}</div>}
            {lecturers != null && <div>{lecturers[i]}</div>}
          </div>
        ))}
    </div>
  )
}

const Lesson = ({ lesson }: { lesson: LessonType }) => {
  const [open, setOpen] = useState<boolean>(false)
  const { name, startTime, endTime, lecture, place, lecturer, group, type } = lesson

  return (
    <td
      onClick={() => setOpen(open ? false : true)}
      className={
        "relative 2xl:text-[0.9em] inner-border-[1px] leading-[16px] cursor-pointer rounded-[4px] z-2  break-all break-words  " +
        (lecture ? "bg-purple-100 inner-border-purple-400" : type == "praktikum" || type == "practical session" ? " bg-emerald-100 inner-border-emerald-300" : "bg-orange-100 inner-border-orange-300")
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
          {group != null && <div className="absolute bottom-0 m-1 text-[0.9em] text-emerald-500 max-h-[30px] overflow-hidden">{group.join(", ")}</div>}

          {open && (
            <div className="absolute bg-zinc-50 font-medium rounded inner-border-[1px] inner-border-slate-400 w-[110%] ml-[-5%] z-20 top-[60px] h-fit p-[4px]">
              <div className="text-[0.8em]  sm:text-[0.9em] font-black">
                {startTime}-{endTime}
              </div>
              <div>{name}</div>
              <div className="mt-2 capitalize">{lecture ? "Loeng" : type}</div>

              {lecture && <div>{place}</div>}
              {!lecture ? popUp(place, group, lecturer) : null}
            </div>
          )}
        </div>
      </OutsideClickHandler>
    </td>
  )
}

export default Lesson
