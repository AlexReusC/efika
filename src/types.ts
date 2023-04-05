type Category = "work" | "sports" | "health" | "culture" | "finance";
type CompletionType = "normal" | "repetition" | "time";
type DurationType = "day" | "week" | "month";
type GoalFields =
  | "name"
  | "portions"
  | "category"
  | "durationType"
  | "daysOfWeek"
  | "completionType"
  | "repetitionsToComplete"
  | "timeToComplete";

interface GoalPortion {
  initialDate: string;
  finalDate: string;
  completionState: number | boolean; //keeps time, repetitons or boolean value
}

interface Goal {
  id: string;
  name: string;
  portions: number;
  completed: boolean;
  category: Category;
  completionType: CompletionType;
  durationType: DurationType;
  daysOfWeek: number[];
  repetitionsToComplete: number | null;
  timeToComplete: number | null;
  initialDate: string; //change to some type of date
  finalDate: string;
  itGoalPortion: number;
  goalPortions: GoalPortion[];
}

interface FieldError {
  field: GoalFields;
  message: string;
}

interface GoalCreated {
  goal: Goal | null;
  errors: FieldError[] | null;
}
