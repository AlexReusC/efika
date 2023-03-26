type Category = "work" | "sports" | "health" | "culture" | "finance";
type CompletionType = "normal" | "repetition" | "time";
type DurationType = "day" | "month" | "year";

interface GoalPortion {
  initialDate: string;
  finalDate: string;
  completionState: number;
}

interface Goal {
  id: string;
  name: string;
  portions: number;
  category: Category;
  completionType: CompletionType;
  durationType: DurationType;
  repetionsCompleted: number | null;
  timeCompleted: number | null;
  initialDate: string; //change to some type of date
  finalDate: string;
  timesToDo: number;
  itGoalPortion: number;
  goalPortions: GoalPortion[];
}

interface FieldError {
  field: string;
  message: string;
}

interface GoalCreated {
  goal: Goal | null;
  errors: FieldError[] | null;
}

const createGoal = (): GoalCreated => {
  return { goal: null, errors: [{ field: "name", message: "not entered" }] };
};
