const createGoal = (): GoalCreated => {
  return { goal: null, errors: [{ field: "name", message: "not entered" }] };
};
