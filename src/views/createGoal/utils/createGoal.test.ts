import createGoal from "./createGoal";
import errorGoalMessages from "../../../constants/errorGoalMessages";

test("Test name has less than 2 words", () => {
  expect(
    createGoal({
      name: "",
      category: "culture",
      completionType: "normal",
      daysOfWeek: [],
      durationType: "month",
      portions: 12,
      repetitionsToComplete: null,
      timeToComplete: null,
    }).errors
  ).toEqual([{ field: "name", message: errorGoalMessages.NameLonger }]);
});

test("Test succesful object", () => {
  expect(
    createGoal({
      name: "Read a book",
      category: "culture",
      completionType: "normal",
      daysOfWeek: [],
      durationType: "month",
      portions: 12,
      repetitionsToComplete: null,
      timeToComplete: null,
    }).goal
  ).toBeTruthy();

  expect(
    createGoal({
      name: "Read a book",
      category: "culture",
      completionType: "normal",
      daysOfWeek: [],
      durationType: "month",
      portions: 12,
      repetitionsToComplete: null,
      timeToComplete: null,
    }).errors
  ).toBe(null);
});
