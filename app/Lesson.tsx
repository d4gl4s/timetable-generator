const Lesson = () => {
  /* const { name, startTime, endTime, lecture } = lesson */
  const name = "Sissejuhatus erialasse"
  const startTime = "10:15"
  const endTime = "11:45"
  const lecture = false
  return (
    <div className="p-2 border-solid border-b-[1px] border-current">
      {lecture ? "loeng" : "praktikum"}
      <div>
        {startTime}-{endTime}{" "}
      </div>{" "}
      {name}
    </div>
  )
}

export default Lesson
