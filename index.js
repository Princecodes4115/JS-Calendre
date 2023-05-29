import moment from "moment";

/// TRYING TO FLATEN THE NESTED ARRAYS

const  getCalendar = async (year, startDayOfWeek) => {
  const calendar = [];
  const months = 12; // Total number of months in a year
  const weeks = 6; // Maximum number of weeks to display in a month

  // Iterate through each month
  for (let month = 0; month < months; month++) {
    const startDate = new Date(year, month, 1); // Setting the start date of the month
    const endDate = new Date(year, month + 1, 0); // Setting the end date of the month
    const numDays = endDate.getDate(); // Setting the number of days in the month

    // Finding the first day of the first week of the month
    let currentDate = new Date(startDate);
    while (currentDate.getDay() !== startDayOfWeek) {
      currentDate.setDate(currentDate.getDate() - 1);
    }

    // Generating calendar data for each week of the month
    for (let week = 0; week < weeks; week++) {
      const weekDates = [];

      // Generating calendar data for each day of the week
      for (let day = 0; day < 7; day++) {
        const date = new Date(currentDate);
        const yearString = date.getFullYear().toString();
        const monthString = (date.getMonth() + 1).toString().padStart(2, "0");
        const dayString = date.getDate().toString().padStart(2, "0");
        const dateString = `${yearString}-${monthString}-${dayString}`;
        const weekdayString = new Intl.DateTimeFormat("en-US", {
          weekday: "short",
        }).format(date);
        weekDates.push({ date, dateString, weekdayString });
        currentDate.setDate(currentDate.getDate() + 1);
      }

      calendar.push({ weekDates, year, month: month + 1 });
    }
  }

  return calendar.flat(); // Flattening the nested arrays into a single array
};

const year = moment().format("2003");
const startDayOfWeek = 0; // 0: Sunday, 1: Monday, 2: Tuesday, and so on
const calendarArray = await getCalendar(year, startDayOfWeek);
//console.timeLog(calendarArray);
// const [a, b, c, d, e, f, g] = calendarArray;
// console.log(JSON.stringify(calendarArray));

//console.log(a);

export default getCalendar();