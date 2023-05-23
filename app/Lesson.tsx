import { LessonType } from "@/types/types"
import { useState } from "react"
import { motion } from "framer-motion"
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
      <motion.td
        animate={{ backgroundColor: lecture ? "#e9d5ff" : type == "praktikum" ? "#d1fae5" : "#ffedd5" }}
        transition={{ duration: 0.1 }}
        whileHover={{ backgroundColor: lecture ? "#c4b5fd" : type == "praktikum" ? "#a7f3d0" : "#fed7aa" }}
        onClick={() => setOpen(open ? false : true)}
        className={
          "relative 2xl:text-[0.9em] inner-border-[1px] leading-[16px] cursor-pointer rounded-[4px] z-2  break-all break-words  " +
          (lecture ? "inner-border-purple-400" : type == "praktikum" ? " inner-border-emerald-300" : "inner-border-orange-300")
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
            {group != null && <div className="absolute bottom-0 m-1 text-[0.9em] text-emerald-500 max-h-[28px] overflow-hidden">{group.join(", ")}</div>}

            {open && (
              <div className="absolute bg-zinc-50 font-medium rounded inner-border-[1px] inner-border-zinc-400 w-[110%] ml-[-5%] z-20 top-[60px] h-fit p-[4px]">
                <div className="text-[0.8em]  sm:text-[0.9em] font-black">
                  {startTime}-{endTime}
                </div>
                <div>{name}</div>
                <div className="mt-2 capitalize">{lecture ? "Loeng" : type}</div>

                {!lecture ? popUp(place, group, lecturer) : null}
              </div>
            )}
          </div>
        </OutsideClickHandler>
      </motion.td>
    </>
  )
}

export default Lesson
