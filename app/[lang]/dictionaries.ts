"server-only"

import { Dictionary } from "./../../types/types"
import english from "../../translations/en.json"
import estonian from "../../translations/et.json"

const dictionaries = {
  "en-US": english.en, //English
  "et-EE": estonian.et, //Estonian
}

export const getDictionary = (locale: "en-US" | "et-EE"): Dictionary => {
  return dictionaries[locale]
}
