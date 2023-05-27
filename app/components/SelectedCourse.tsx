import { motion } from "framer-motion"
import { FaTimes } from "react-icons/fa"

import { CourseType } from "@/types/types"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { useState } from "react"

const SelectedCourse = ({ handleCourseDelete, course, i }: { handleCourseDelete: (code: string) => void; course: CourseType; i: number }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [notWanted, setNotWanted] = useState(course.groupsNotWanted!)

  const handleGroupNotWantedClick = (group: string) => {
    if (notWanted!.includes(group)) {
      course.groupsNotWanted = course.groupsNotWanted?.filter((e) => e !== group)
      const notWantedNew = notWanted!.filter((e) => e !== group)
      setNotWanted(notWantedNew)
    } else {
      course.groupsNotWanted?.push(group)
      setNotWanted((oldArray: string[]) => [...oldArray, group])
    }
  }

  const containsGroup = (groups: string[]): boolean => {
    for (let i = 0; i < groups.length; i++) {
      if (groups[i] !== null) return true
    }
    return false
  }

  const notWantedContainsGroup = (group: string): boolean => {
    return notWanted.includes(group)
  }

  const selectAll = () => {
    course.groupsNotWanted = course.groupNames
    setNotWanted(course.groupNames!)
  }
  const deselectAll = () => {
    course.groupsNotWanted = []
    setNotWanted([])
  }

  return (
    <div>
      <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="flex w-full overflow  items-start justify-between">
        <div className="flex items-start">
          <span className="w-4 text-[1.1em] mr-2">{i + 1 + ".  "} </span>
          <span className=" text-[1.1em]">
            {course.name}
            <span className="font-semibold ml-4 text-[0.9em] text-gray-300">{course.code}</span>
          </span>
        </div>
        <div className="flex h-full items-start">
          {containsGroup(course.groupNames!) && (
            <motion.div whileHover={{ color: "#94a3b8", scale: 1.2 }} onClick={() => setOpen(!open)} className=" mr-8 cursor-pointer w-5 mt-[6px]">
              {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </motion.div>
          )}
          <motion.div whileHover={{ color: "#ef4444" }} initial={{ color: "#f87171" }}>
            <FaTimes onClick={() => handleCourseDelete(course.code)} size={15} className="cursor-pointer w-5 mt-[6px]" />
          </motion.div>
        </div>
      </motion.li>
      {/* siin kontrolli, kas vahemalt uks grupp esineb ruhmal */}
      {open && containsGroup(course.groupNames!) && (
        <div className="flex flex-wrap font-medium text-[0.8em] mt-4 mb-4">
          {course.groupNames!.map((group, i) => {
            if (group !== null)
              return (
                <motion.div
                  key={i}
                  animate={{ backgroundColor: notWantedContainsGroup(group) ? "#fecaca" : "#f3f4f6" }}
                  whileHover={{ backgroundColor: notWantedContainsGroup(group) ? "#fca5a5" : "#e2e8f0" }}
                  className={
                    "p-[9px] px-6 rounded-[50px] bg-slate-100 mr-2 cursor-pointer flex items-center unselectable mb-2 " +
                    (notWantedContainsGroup(group) ? " text-red-600 line-through" : " text-slate-400")
                  }
                  onClick={() => handleGroupNotWantedClick(group)}
                >
                  {group}
                </motion.div>
              )
          })}
          <div className="flex h-10">
            <motion.div className={"ml-3 flex items-center  unselectable mb-2 text-slate-400 "} onClick={selectAll} whileHover={{ color: "#cbd5e1" }}>
              <div className="h-fit cursor-pointer">Eemalda Kõik</div>
            </motion.div>
            <motion.div className={"ml-6 flex items-center  unselectable mb-2 text-slate-400 "} onClick={deselectAll} whileHover={{ color: "#cbd5e1" }}>
              <div className="h-fit cursor-pointer">Tagasi</div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SelectedCourse
