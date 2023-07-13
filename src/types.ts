type Category = "work" | "sports" | "health" | "culture" | "money";
type DayOfWeek = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";
type Frequency = "daily" | "weekly" | "monthly";
type Measure = "time" | "sets";
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

interface CategoryObject {
  name: Category;
  icon: any;
  active: boolean;
}

interface FrequencyObject {
  name: Frequency;
  icon: any;
  active: boolean;
}

interface MeasureObject {
  name: Measure;
  icon: any;
  active: boolean;
}

interface DayOfWeekObject {
  name: DayOfWeek;
  active: boolean;
}

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
