import { CourseType, LessonType, Dictionary } from "@/types/types"

const dataEst: CourseType[] = [
  {
    name: "Sissejuhatus andmeteadusesse",
    code: "LTAT.02.002",
    eap: 6,
    lecture: [],
    groups: [
      {
        group: ["Group 2 (Est)", "Group 1 (Eng) - Bioengineering"],
        lecturer: ["Markus Haug", "Victor Henrique Cabral Pinheiro"],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "16:15:00",
            endTime: "18:00:00",
            place: ["Narva mnt 18 - 2010", null],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Group 3 (Est)", "Group 4 (Est)"],
        lecturer: ["Friedrich Krull", "Karl Kaspar Haavel"],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "10:15:00",
            endTime: "12:00:00",
            place: ["Narva mnt 18 - 1008", "Narva mnt 18 - 2048"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Group 5 (Est)", "Group 6 (Eng)"],
        lecturer: ["Anna Aljanaki", "Novin Shahroudi"],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "12:15:00",
            endTime: "14:00:00",
            place: ["Narva mnt 18 - 2048", "Narva mnt 18 - 1022"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Group 7 (Eng)"],
        lecturer: ["Lilou Gras"],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "16:15:00",
            endTime: "18:00:00",
            place: [null],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Group 8 (Est)"],
        lecturer: ["Carel Kuusk"],
        practicalSessions: [
          {
            weekday: 2,
            startTime: "12:15:00",
            endTime: "14:00:00",
            place: ["Narva mnt 18 - 2010"],
            type: "praktikum",
          },
        ],
      },
    ],
    groupsNotWanted: [],
    groupNames: ["Group 8 (Est)", "Group 7 (Eng)", "Group 5 (Est)", "Group 6 (Eng)", "Group 3 (Est)", "Group 4 (Est)", "Group 2 (Est)", "Group 1 (Eng) - Bioengineering"],
  },
  {
    name: "Tarkvaratehnika",
    code: "LTAT.05.003",
    eap: 6,
    lecture: [
      {
        weekday: 4,
        startTime: "10:15:00",
        endTime: "12:00:00",
        place: "Narva mnt 18 - 1037",
      },
    ],
    groups: [
      {
        group: ["Group 1", "Group 2"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "10:15:00",
            endTime: "12:00:00",
            place: ["Narva mnt 18 - 2010", "Narva mnt 18 - 2034"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Group 3", "Group 4"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "12:15:00",
            endTime: "14:00:00",
            place: ["Narva mnt 18 - 2034", "Narva mnt 18 - 2045"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Group 6", "Group 5"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "10:15:00",
            endTime: "12:00:00",
            place: ["Narva mnt 18 - 1022", "Narva mnt 18 - 2047"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Group 7", "Group 8"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "12:15:00",
            endTime: "14:00:00",
            place: ["Narva mnt 18 - 2010", "Narva mnt 18 - 2034"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Group 10", "Group 9"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 2034", "Narva mnt 18 - 2010"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Group 11", "Group 12"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 2,
            startTime: "16:15:00",
            endTime: "18:00:00",
            place: ["Narva mnt 18 - 2045", "Narva mnt 18 - 2047"],
            type: "praktikum",
          },
        ],
      },
    ],
    groupsNotWanted: [],
    groupNames: ["Group 11", "Group 12", "Group 10", "Group 9", "Group 7", "Group 8", "Group 6", "Group 5", "Group 3", "Group 4", "Group 1", "Group 2"],
  },
  {
    name: "Algoritmid ja andmestruktuurid",
    code: "LTAT.03.005",
    eap: 6,
    lecture: [
      {
        weekday: 2,
        startTime: "10:15:00",
        endTime: "12:00:00",
        place: "Narva mnt 18 - 1037",
      },
    ],
    groups: [
      {
        group: ["Inf_01", "Inf_03", "Inf_02"],
        lecturer: [null, null, null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "10:15:00",
            endTime: "12:00:00",
            place: ["Narva mnt 18 - 1022", "Narva mnt 18 - 2047", "Narva mnt 18 - 2045"],
            type: "praktikum",
          },
          {
            weekday: 2,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 1037", "Narva mnt 18 - 1037", "Narva mnt 18 - 1037"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Inf_11"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "10:15:00",
            endTime: "12:00:00",
            place: ["Narva mnt 18 - 1008"],
            type: "praktikum",
          },
          {
            weekday: 2,
            startTime: "16:15:00",
            endTime: "18:00:00",
            place: ["Narva mnt 18 - 1019"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Inf_04", "Inf_05"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "12:15:00",
            endTime: "14:00:00",
            place: ["Narva mnt 18 - 1008", "Narva mnt 18 - 2047"],
            type: "praktikum",
          },
          {
            weekday: 2,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 1008", "Narva mnt 18 - 1008"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Mat-stat"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 1007"],
            type: "praktikum",
          },
          {
            weekday: 2,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 1019"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Inf_13"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 2047"],
            type: "praktikum",
          },
          {
            weekday: 2,
            startTime: "16:15:00",
            endTime: "18:00:00",
            place: ["Narva mnt 18 - 1037"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Inf_06", "Inf_07"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "12:15:00",
            endTime: "14:00:00",
            place: ["Narva mnt 18 - 2045", "Narva mnt 18 - 2047"],
            type: "praktikum",
          },
          {
            weekday: 2,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 1008", "Narva mnt 18 - 1019"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Inf_08"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 1022"],
            type: "praktikum",
          },
          {
            weekday: 2,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 1019"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Inf_09", "Inf_10", "Inf_12"],
        lecturer: [null, null, null],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 2045", "Narva mnt 18 - 2047", "Narva mnt 18 - 1008"],
            type: "praktikum",
          },
          {
            weekday: 2,
            startTime: "16:15:00",
            endTime: "18:00:00",
            place: ["Narva mnt 18 - 1019", "Narva mnt 18 - 1019", "Narva mnt 18 - 1037"],
            type: "praktikum",
          },
        ],
      },
    ],
    groupsNotWanted: [],
    groupNames: ["Inf_01", "Inf_03", "Inf_02", "Inf_11", "Inf_09", "Inf_10", "Inf_12", "Inf_08", "Inf_06", "Inf_07", "Inf_13", "Mat-stat", "Inf_04", "Inf_05"],
  },
  {
    name: "Veebirakenduste loomine",
    code: "LTAT.05.004",
    eap: 6,
    lecture: [
      {
        weekday: 4,
        startTime: "14:15:00",
        endTime: "16:00:00",
        place: "Narva mnt 18 - 1037",
      },
    ],
    groups: [
      {
        group: ["Group 1", "Group 2", "Group 3"],
        lecturer: [null, null, null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 2010", "Narva mnt 18 - 2034", "Narva mnt 18 - 2045"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Group 5", "Group 4"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "16:15:00",
            endTime: "18:00:00",
            place: ["Narva mnt 18 - 2047", "Narva mnt 18 - 1022"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Group 7", "Group 6"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 2,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 2047", "Narva mnt 18 - 1022"],
            type: "praktikum",
          },
        ],
      },
    ],
    groupsNotWanted: [],
    groupNames: ["Group 1", "Group 2", "Group 3", "Group 5", "Group 4", "Group 7", "Group 6"],
  },
  {
    name: "Programmeerimine C-keeles ja assembleris",
    code: "MTAT.03.219",
    eap: 3,
    lecture: [
      {
        weekday: 0,
        startTime: "16:15:00",
        endTime: "18:00:00",
        place: "Narva mnt 18 - 1021",
      },
    ],
    groups: [
      {
        group: ["4. r\u00fchm (arvutitehnika)", "3. r\u00fchm (arvutitehnika)"],
        lecturer: ["Savelii Vorontcov", "Rait Tooming"],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "12:15:00",
            endTime: "14:00:00",
            place: ["Ravila 14A - 2075", "W. Ostwaldi tn 1 - A204", "Ravila 14A - 2075"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["1. r\u00fchm", "5. r\u00fchm (arvutitehnika)"],
        lecturer: ["Deivid Saad", "Sander Saarpere"],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "16:15:00",
            endTime: "18:00:00",
            place: ["Narva mnt 18 - 1017", "Ravila 14A - 2075"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["2. r\u00fchm"],
        lecturer: ["Kerdo Kurs"],
        practicalSessions: [
          {
            weekday: 2,
            startTime: "10:15:00",
            endTime: "12:00:00",
            place: ["Narva mnt 18 - 2045"],
            type: "praktikum",
          },
        ],
      },
    ],
    groupsNotWanted: [],
    groupNames: ["3. r\u00fchm (arvutitehnika)", "4. r\u00fchm (arvutitehnika)", "1. r\u00fchm", "5. r\u00fchm (arvutitehnika)", "2. r\u00fchm"],
  },
  {
    name: "V\u00f5rgutehnoloogia I",
    code: "LTAT.06.004",
    eap: 6,
    lecture: [],
    groups: [
      {
        group: ["Inf_01"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "08:15:00",
            endTime: "10:00:00",
            place: ["Narva mnt 18 - 2003"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["AT_01"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "08:15:00",
            endTime: "10:00:00",
            place: ["Narva mnt 18 - 2003"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["AT_02"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "10:15:00",
            endTime: "12:00:00",
            place: ["Narva mnt 18 - 2003"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Inf_02"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 2,
            startTime: "08:15:00",
            endTime: "10:00:00",
            place: ["Narva mnt 18 - 2003"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Inf_03"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 2,
            startTime: "12:15:00",
            endTime: "14:00:00",
            place: ["Narva mnt 18 - 2003"],
            type: "praktikum",
          },
        ],
      },
      {
        group: ["Inf_04"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 4,
            startTime: "08:15:00",
            endTime: "10:00:00",
            place: ["Narva mnt 18 - 2003"],
            type: "praktikum",
          },
        ],
      },
    ],
    groupsNotWanted: [],
    groupNames: ["Inf_01", "AT_01", "AT_02", "Inf_02", "Inf_03", "Inf_04"],
  },
]
const dataEng: CourseType[] = [
  {
    name: "Introduction to Data Science",
    code: "LTAT.02.002",
    eap: 6,
    lecture: [],
    groups: [
      {
        group: ["Group 2 (Est)", "Group 1 (Eng) - Bioengineering"],
        lecturer: ["Markus Haug", "Victor Henrique Cabral Pinheiro"],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "16:15:00",
            endTime: "18:00:00",
            place: ["Narva mnt 18 - 2010", null],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Group 3 (Est)", "Group 4 (Est)"],
        lecturer: ["Friedrich Krull", "Karl Kaspar Haavel"],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "10:15:00",
            endTime: "12:00:00",
            place: ["Narva mnt 18 - 1008", "Narva mnt 18 - 2048"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Group 5 (Est)", "Group 6 (Eng)"],
        lecturer: ["Anna Aljanaki", "Novin Shahroudi"],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "12:15:00",
            endTime: "14:00:00",
            place: ["Narva mnt 18 - 2048", "Narva mnt 18 - 1022"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Group 7 (Eng)"],
        lecturer: ["Lilou Gras"],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "16:15:00",
            endTime: "18:00:00",
            place: [null],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Group 8 (Est)"],
        lecturer: ["Carel Kuusk"],
        practicalSessions: [
          {
            weekday: 2,
            startTime: "12:15:00",
            endTime: "14:00:00",
            place: ["Narva mnt 18 - 2010"],
            type: "practical session",
          },
        ],
      },
    ],
    groupsNotWanted: [],
    groupNames: ["Group 8 (Est)", "Group 7 (Eng)", "Group 5 (Est)", "Group 6 (Eng)", "Group 3 (Est)", "Group 4 (Est)", "Group 2 (Est)", "Group 1 (Eng) - Bioengineering"],
  },
  {
    name: "Software Engineering",
    code: "LTAT.05.003",
    eap: 6,
    lecture: [
      {
        weekday: 4,
        startTime: "10:15:00",
        endTime: "12:00:00",
        place: "Narva mnt 18 - 1037",
      },
    ],
    groups: [
      {
        group: ["Group 1", "Group 2"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "10:15:00",
            endTime: "12:00:00",
            place: ["Narva mnt 18 - 2010", "Narva mnt 18 - 2034"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Group 3", "Group 4"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "12:15:00",
            endTime: "14:00:00",
            place: ["Narva mnt 18 - 2034", "Narva mnt 18 - 2045"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Group 6", "Group 5"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "10:15:00",
            endTime: "12:00:00",
            place: ["Narva mnt 18 - 1022", "Narva mnt 18 - 2047"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Group 7", "Group 8"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "12:15:00",
            endTime: "14:00:00",
            place: ["Narva mnt 18 - 2010", "Narva mnt 18 - 2034"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Group 10", "Group 9"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 2034", "Narva mnt 18 - 2010"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Group 11", "Group 12"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 2,
            startTime: "16:15:00",
            endTime: "18:00:00",
            place: ["Narva mnt 18 - 2045", "Narva mnt 18 - 2047"],
            type: "practical session",
          },
        ],
      },
    ],
    groupsNotWanted: [],
    groupNames: ["Group 11", "Group 12", "Group 10", "Group 9", "Group 7", "Group 8", "Group 6", "Group 5", "Group 3", "Group 4", "Group 1", "Group 2"],
  },
  {
    name: "Algorithms and Data Structures",
    code: "LTAT.03.005",
    eap: 6,
    lecture: [
      {
        weekday: 2,
        startTime: "10:15:00",
        endTime: "12:00:00",
        place: "Narva mnt 18 - 1037",
      },
    ],
    groups: [
      {
        group: ["Inf_01", "Inf_03", "Inf_02"],
        lecturer: [null, null, null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "10:15:00",
            endTime: "12:00:00",
            place: ["Narva mnt 18 - 1022", "Narva mnt 18 - 2047", "Narva mnt 18 - 2045"],
            type: "practical session",
          },
          {
            weekday: 2,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 1037", "Narva mnt 18 - 1037", "Narva mnt 18 - 1037"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Inf_11"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "10:15:00",
            endTime: "12:00:00",
            place: ["Narva mnt 18 - 1008"],
            type: "practical session",
          },
          {
            weekday: 2,
            startTime: "16:15:00",
            endTime: "18:00:00",
            place: ["Narva mnt 18 - 1019"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Inf_04", "Inf_05"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "12:15:00",
            endTime: "14:00:00",
            place: ["Narva mnt 18 - 1008", "Narva mnt 18 - 2047"],
            type: "practical session",
          },
          {
            weekday: 2,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 1008", "Narva mnt 18 - 1008"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Mat-stat"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 1007"],
            type: "practical session",
          },
          {
            weekday: 2,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 1019"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Inf_13"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 2047"],
            type: "practical session",
          },
          {
            weekday: 2,
            startTime: "16:15:00",
            endTime: "18:00:00",
            place: ["Narva mnt 18 - 1037"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Inf_06", "Inf_07"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "12:15:00",
            endTime: "14:00:00",
            place: ["Narva mnt 18 - 2045", "Narva mnt 18 - 2047"],
            type: "practical session",
          },
          {
            weekday: 2,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 1008", "Narva mnt 18 - 1019"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Inf_08"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 1022"],
            type: "practical session",
          },
          {
            weekday: 2,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 1019"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Inf_09", "Inf_10", "Inf_12"],
        lecturer: [null, null, null],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 2045", "Narva mnt 18 - 2047", "Narva mnt 18 - 1008"],
            type: "practical session",
          },
          {
            weekday: 2,
            startTime: "16:15:00",
            endTime: "18:00:00",
            place: ["Narva mnt 18 - 1019", "Narva mnt 18 - 1019", "Narva mnt 18 - 1037"],
            type: "practical session",
          },
        ],
      },
    ],
    groupsNotWanted: [],
    groupNames: ["Inf_01", "Inf_03", "Inf_02", "Inf_11", "Inf_09", "Inf_10", "Inf_12", "Inf_08", "Inf_06", "Inf_07", "Inf_13", "Mat-stat", "Inf_04", "Inf_05"],
  },
  {
    name: "Web Application Development",
    code: "LTAT.05.004",
    eap: 6,
    lecture: [
      {
        weekday: 4,
        startTime: "14:15:00",
        endTime: "16:00:00",
        place: "Narva mnt 18 - 1037",
      },
    ],
    groups: [
      {
        group: ["Group 1", "Group 2", "Group 3"],
        lecturer: [null, null, null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 2010", "Narva mnt 18 - 2034", "Narva mnt 18 - 2045"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Group 5", "Group 4"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "16:15:00",
            endTime: "18:00:00",
            place: ["Narva mnt 18 - 2047", "Narva mnt 18 - 1022"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Group 7", "Group 6"],
        lecturer: [null, null],
        practicalSessions: [
          {
            weekday: 2,
            startTime: "14:15:00",
            endTime: "16:00:00",
            place: ["Narva mnt 18 - 2047", "Narva mnt 18 - 1022"],
            type: "practical session",
          },
        ],
      },
    ],
    groupsNotWanted: [],
    groupNames: ["Group 1", "Group 2", "Group 3", "Group 5", "Group 4", "Group 7", "Group 6"],
  },
  {
    name: "Programming in C and Assembly Language",
    code: "MTAT.03.219",
    eap: 3,
    lecture: [
      {
        weekday: 0,
        startTime: "16:15:00",
        endTime: "18:00:00",
        place: "Narva mnt 18 - 1021",
      },
    ],
    groups: [
      {
        group: ["4. r\u00fchm (arvutitehnika)", "3. r\u00fchm (arvutitehnika)"],
        lecturer: ["Savelii Vorontcov", "Rait Tooming"],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "12:15:00",
            endTime: "14:00:00",
            place: ["Ravila 14A - 2075", "W. Ostwaldi tn 1 - A204", "Ravila 14A - 2075"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["1. r\u00fchm", "5. r\u00fchm (arvutitehnika)"],
        lecturer: ["Deivid Saad", "Sander Saarpere"],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "16:15:00",
            endTime: "18:00:00",
            place: ["Narva mnt 18 - 1017", "Ravila 14A - 2075"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["2. r\u00fchm"],
        lecturer: ["Kerdo Kurs"],
        practicalSessions: [
          {
            weekday: 2,
            startTime: "10:15:00",
            endTime: "12:00:00",
            place: ["Narva mnt 18 - 2045"],
            type: "practical session",
          },
        ],
      },
    ],
    groupsNotWanted: [],
    groupNames: ["3. r\u00fchm (arvutitehnika)", "4. r\u00fchm (arvutitehnika)", "1. r\u00fchm", "5. r\u00fchm (arvutitehnika)", "2. r\u00fchm"],
  },
  {
    name: "Network Technology I",
    code: "LTAT.06.004",
    eap: 6,
    lecture: [],
    groups: [
      {
        group: ["Inf_01"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 0,
            startTime: "08:15:00",
            endTime: "10:00:00",
            place: ["Narva mnt 18 - 2003"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["AT_01"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "08:15:00",
            endTime: "10:00:00",
            place: ["Narva mnt 18 - 2003"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["AT_02"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 1,
            startTime: "10:15:00",
            endTime: "12:00:00",
            place: ["Narva mnt 18 - 2003"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Inf_02"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 2,
            startTime: "08:15:00",
            endTime: "10:00:00",
            place: ["Narva mnt 18 - 2003"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Inf_03"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 2,
            startTime: "12:15:00",
            endTime: "14:00:00",
            place: ["Narva mnt 18 - 2003"],
            type: "practical session",
          },
        ],
      },
      {
        group: ["Inf_04"],
        lecturer: [null],
        practicalSessions: [
          {
            weekday: 4,
            startTime: "08:15:00",
            endTime: "10:00:00",
            place: ["Narva mnt 18 - 2003"],
            type: "practical session",
          },
        ],
      },
    ],
    groupsNotWanted: [],
    groupNames: ["Inf_01", "AT_01", "AT_02", "Inf_02", "Inf_03", "Inf_04"],
  },
]

export function generateDemoData(lang: string) {
  if (lang == "et") return dataEst
  else return dataEng
}
