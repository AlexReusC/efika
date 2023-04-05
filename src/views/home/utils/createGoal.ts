import { uid } from "uid";
import dayjs from "dayjs";
import errorGoalMessages from "../../../constants/errorGoalMessages";

interface CreateGoalProps {
  name: string;
  portions: number | null;
  category: Category | null;
  durationType: DurationType | null;
  daysOfWeek: number[];
  completionType: CompletionType;
  repetitionsToComplete: number | null;
  timeToComplete: number | null; //change to date
}

const createGoal = ({
  name,
  category,
  completionType,
  daysOfWeek,
  durationType,
  portions,
  repetitionsToComplete,
  timeToComplete,
}: CreateGoalProps): GoalCreated => {
  const errors: FieldError[] = [];
  //input checks
  if (!name || name.length < 3) {
    errors.push({ field: "name", message: errorGoalMessages.NameLonger });
  }
  if (!portions) {
    errors.push({ field: "portions", message: errorGoalMessages.PortionsIsNull });
  } else if (portions < 1) {
    errors.push({ field: "portions", message: errorGoalMessages.PortionsIsZero });
  }
  if (!category) {
    errors.push({ field: "category", message: errorGoalMessages.NoCategory });
  }
  if (!durationType) {
    errors.push({ field: "durationType", message: errorGoalMessages.NoDuration });
  } else if (durationType === "day" && daysOfWeek.length === 0) {
    errors.push({ field: "durationType", message: errorGoalMessages.NoDayOfWeek });
  }
  if (completionType === "repetition") {
    if (!repetitionsToComplete) {
      errors.push({ field: "repetitionsToComplete", message: errorGoalMessages.NoRepetition });
    } else if (repetitionsToComplete === 0) {
      errors.push({ field: "repetitionsToComplete", message: errorGoalMessages.RepetitionIsZero });
    }
  }
  if (completionType === "time" && !timeToComplete) {
    if (!timeToComplete) {
      errors.push({ field: "timeToComplete", message: errorGoalMessages.NoTime });
    } else if (timeToComplete === 0) {
      errors.push({ field: "timeToComplete", message: errorGoalMessages.TimeIsZero });
    }
  }

  if (errors.length > 0) {
    return { goal: null, errors: errors };
  }
  //basic attrs
  const id = uid(16);
  const completed = false;
  const itGoalPortion = 0;
  portions = portions || 1;
  category = category || "work";
  durationType = durationType || "month";

  //dates
  const initialDateObj = dayjs().startOf("day");
  let finalDateObj = initialDateObj;
  const initialDate = initialDateObj.toString();

  const goalPortions: GoalPortion[] = [];

  if (durationType === "day") {
    for (let i = 0; i < portions; i++) {
      finalDateObj = initialDateObj.endOf("day");
      goalPortions.push({
        initialDate: initialDateObj.toString(),
        finalDate: initialDateObj.toString(),
        completionState: false,
      });
      initialDateObj.add(1, "day");
    }
  } else if (durationType === "week") {
    for (let i = 0; i < portions; i++) {
      finalDateObj = initialDateObj.endOf("week");
      goalPortions.push({
        initialDate: initialDateObj.toString(),
        finalDate: finalDateObj.toString(),
        completionState: false,
      });
      initialDateObj.add(1, "week");
    }
  } else {
    for (let i = 0; i < portions; i++) {
      finalDateObj = initialDateObj.endOf("month");
      goalPortions.push({
        initialDate: initialDateObj.toString(),
        finalDate: finalDateObj.toString(),
        completionState: false,
      });
      initialDateObj.add(1, "month");
    }
  }

  const finalDate = finalDateObj.toString();

  //creation of goal
  const goal: Goal = {
    id,
    name,
    portions,
    category,
    durationType,
    completed,
    completionType,
    daysOfWeek,
    initialDate,
    finalDate,
    goalPortions,
    itGoalPortion,
    repetitionsToComplete,
    timeToComplete,
  };

  return { goal: goal, errors: null };
};
