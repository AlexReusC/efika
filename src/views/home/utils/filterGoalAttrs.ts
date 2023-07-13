interface FilterGoalAttrsProps {
  categories: CategoryObject[];
  frequencies: FrequencyObject[];
  daysOfWeekArr: DayOfWeekObject[];
  measures: MeasureObject[];
}

interface FilteredAttrs {
  category: Category | null;
  frequency: Frequency | null;
  daysOfWeek: DayOfWeek[] | null;
  measure: Measure | null;
}

const filterGoalAttrs = ({ categories, frequencies, daysOfWeekArr, measures }: FilterGoalAttrsProps): FilteredAttrs => {
  const categoryArr = categories.filter((x) => x.active).map((x) => x.name);
  const category = categoryArr.length > 0 ? categoryArr[0] : null;
  const frequencyArr = frequencies.filter((x) => x.active).map((x) => x.name);
  const frequency = frequencyArr.length > 0 ? frequencyArr[0] : null;
  let daysOfWeek: DayOfWeek[] | null;
  if (frequency) {
    const daysOfWeekFiltered = daysOfWeekArr.filter((x) => x.active).map((x) => x.name);
    daysOfWeek = daysOfWeekFiltered.length > 0 ? daysOfWeekFiltered : null;
  } else {
    daysOfWeek = null;
  }
  const measuresArr = measures.filter((x) => x.active).map((x) => x.name);
  const measure = measuresArr.length > 0 ? measuresArr[0] : null;

  return { category, frequency, daysOfWeek, measure };
};

export default filterGoalAttrs;
