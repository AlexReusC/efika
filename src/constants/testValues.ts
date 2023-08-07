const testValues: Goal[] = [
  {
    id: "aaaa",
    name: "sets",
    repetitions: 23,
    completed: false,
    category: "culture",
    measure: "sets",
    frequency: "daily",
    daysOfWeek: [1, 2, 3],
    sets: 20,
    time: null,
    initialDate: "01",
    finalDate: "02",
    itGoalPortion: 0,
    goalPortions: [
      { completionState: "completed", finalDate: "01", initialDate: "01", measure: 1 },
      { completionState: "uncompleted", finalDate: "01", initialDate: "01", measure: 0 },
      { completionState: "partial", finalDate: "01", initialDate: "01", measure: 0 },
      { completionState: "waiting", finalDate: "01", initialDate: "01", measure: 0 },
    ],
  },
  {
    id: "aaa1",
    name: "time",
    repetitions: 23,
    completed: false,
    category: "culture",
    measure: "time",
    frequency: "daily",
    daysOfWeek: [1, 2, 3],
    sets: null,
    time: null,
    initialDate: "01",
    finalDate: "02",
    itGoalPortion: 0,
    goalPortions: [
      { completionState: "completed", finalDate: "01", initialDate: "01", measure: 0 },
      { completionState: "completed", finalDate: "01", initialDate: "01", measure: 0 },
      { completionState: "partial", finalDate: "01", initialDate: "01", measure: 0 },
      { completionState: "waiting", finalDate: "01", initialDate: "01", measure: 0 },
      { completionState: "waiting", finalDate: "01", initialDate: "01", measure: 0 },
    ],
  },
  {
    id: "aaa2",
    name: "Normal",
    repetitions: 23,
    completed: false,
    category: "culture",
    measure: null,
    frequency: "daily",
    daysOfWeek: [1, 2, 3],
    sets: null,
    time: null,
    initialDate: "01",
    finalDate: "02",
    itGoalPortion: 0,
    goalPortions: [
      { completionState: "completed", finalDate: "01", initialDate: "01", measure: 0 },
      { completionState: "completed", finalDate: "01", initialDate: "01", measure: 0 },
      { completionState: "uncompleted", finalDate: "01", initialDate: "01", measure: 0 },
      { completionState: "waiting", finalDate: "01", initialDate: "01", measure: 0 },
      { completionState: "waiting", finalDate: "01", initialDate: "01", measure: 0 },
    ],
  },
  {
    id: "aaa3",
    name: "Correr",
    repetitions: 23,
    completed: true,
    category: "money",
    measure: null,
    frequency: "monthly",
    daysOfWeek: null,
    sets: null,
    time: null,
    initialDate: "01",
    finalDate: "02",
    itGoalPortion: 0,
    goalPortions: [
      { completionState: "completed", finalDate: "01", initialDate: "01", measure: 0 },
      { completionState: "completed", finalDate: "01", initialDate: "01", measure: 0 },
      { completionState: "uncompleted", finalDate: "01", initialDate: "01", measure: 0 },
      { completionState: "waiting", finalDate: "01", initialDate: "01", measure: 0 },
      { completionState: "waiting", finalDate: "01", initialDate: "01", measure: 0 },
    ],
  },
];

export default testValues;
