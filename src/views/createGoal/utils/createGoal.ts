import { uid } from "uid";
import dayjs from "dayjs";
import errorGoalMessages from "../../../constants/errorGoalMessages";

interface CreateGoalProps {
  name: string;
  repetitionsProp: string | null;
  category: Category | null;
  frequency: Frequency | null;
  daysOfWeek: number[] | null;
  measure: Measure | null;
  setsProp: string | null;
  minutesProp: string | null;
  secondsProp: string | null;
}

const WAITING = "waiting";

const createGoal = ({
  name,
  category,
  measure,
  daysOfWeek,
  frequency,
  repetitionsProp,
  setsProp,
  minutesProp,
  secondsProp,
}: CreateGoalProps): GoalCreated => {
  const errors: FieldError[] = [];
  //input checks
  let repetitions = Number(repetitionsProp);
  const sets = Number(setsProp);
  const minutes = Number(minutesProp);
  const seconds = Number(secondsProp);
  if (name.length < 1) {
    errors.push({ field: "name", message: errorGoalMessages.NameLonger });
  }
  if (!repetitions) {
    errors.push({ field: "portions", message: errorGoalMessages.PortionsIsNull });
  } else if (repetitions < 1) {
    errors.push({ field: "portions", message: errorGoalMessages.PortionsIsZero });
  }
  if (!category) {
    errors.push({ field: "category", message: errorGoalMessages.NoCategory });
  }
  if (!frequency) {
    errors.push({ field: "frequency", message: errorGoalMessages.NoDuration });
  } else if (frequency === "daily" && daysOfWeek && daysOfWeek.length === 0) {
    errors.push({ field: "daysOfWeek", message: errorGoalMessages.NoDayOfWeek });
  }
  if (measure === "sets") {
    if (!sets) {
      errors.push({ field: "repetitionsToComplete", message: errorGoalMessages.NoRepetition });
    } else if (sets === 0) {
      errors.push({ field: "repetitionsToComplete", message: errorGoalMessages.RepetitionIsZero });
    }
  }
  if (measure === "time" && !seconds && !minutes) {
    if (!seconds && !minutes) {
      errors.push({ field: "timeToComplete", message: errorGoalMessages.NoTime });
    } else if (seconds === 0 && minutes === 0) {
      errors.push({ field: "timeToComplete", message: errorGoalMessages.TimeIsZero });
    }
  }

  if (errors.length > 0 || !repetitions || !category || !frequency || !daysOfWeek) {
    return { goal: null, errors: errors };
  }
  //basic attrs
  const id = uid(16);
  const completed = false;
  const itGoalPortion = 0;

  //dates
  let initialDateObj = dayjs().startOf("day");
  let finalDateObj = initialDateObj;
  const initialDate = initialDateObj.toJSON();

  const goalPortions: GoalPortion[] = [];

  if (frequency === "daily") {
    for (let i = 0; i < repetitions; i++) {
      while (!daysOfWeek.includes(initialDateObj.get("day"))) {
        initialDateObj = initialDateObj.add(1, "day");
      }
      finalDateObj = initialDateObj.endOf("day");
      goalPortions.push({
        initialDate: initialDateObj.toJSON(),
        finalDate: finalDateObj.toJSON(),
        completionState: WAITING,
        measure: 0,
      });
      initialDateObj = finalDateObj.add(1, "day").startOf("day");
    }
  } else if (frequency === "weekly") {
    for (let i = 0; i < repetitions; i++) {
      finalDateObj = initialDateObj.add(6, "day").endOf("day");
      goalPortions.push({
        initialDate: initialDateObj.toJSON(),
        finalDate: finalDateObj.toJSON(),
        completionState: WAITING,
        measure: 0,
      });
      initialDateObj = finalDateObj.add(1, "day").startOf("day");
    }
  } else {
    for (let i = 0; i < repetitions; i++) {
      finalDateObj = initialDateObj.add(29, "day").endOf("day");
      goalPortions.push({
        initialDate: initialDateObj.toJSON(),
        finalDate: finalDateObj.toJSON(),
        completionState: WAITING,
        measure: 0,
      });
      initialDateObj = initialDateObj.add(1, "day").startOf("day");
    }
  }

  const finalDate = finalDateObj.toJSON();

  let time: number | null = null;
  if (minutes || seconds) {
    time = minutes * 60 + seconds;
  }

  if (frequency === "monthly" || frequency === "weekly") {
    daysOfWeek = null;
  }

  //creation of goal
  const goal: Goal = {
    id,
    name,
    repetitions,
    category,
    frequency,
    completed,
    measure,
    daysOfWeek,
    initialDate,
    finalDate,
    goalPortions,
    itGoalPortion,
    sets,
    time,
  };

  return { goal: goal, errors: null };
};

export default createGoal;
