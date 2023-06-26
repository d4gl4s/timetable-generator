import { Dictionary } from "./../../types/types"
;("server-only")
import { en } from "../../translations/en.json"
import { et } from "../../translations/et.json"

const dictionaries = {
  "en-US": en, //English
  "et-EE": et, //Estonian
}

export const getDictionary = (locale: "en-US" | "et-EE"): Dictionary => {
  return dictionaries[locale]
}
