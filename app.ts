import moment from "moment";

function getCalendar(year: number, startDayOfWeek: number): Array<any> {
  const calendar: Array<any> = [];
  const months: number = 12; // Total number of months in a year
  const weeks: number = 6; // Maximum number of weeks to display in a month

  // Iterate through each month
  for (let month = 0; month < months; month++) {
    const startDate: Date = new Date(year, month, 1); // Setting the start date of the month
    const endDate: Date = new Date(year, month + 1, 0); // Setting the end date of the month
    const numDays: number = endDate.getDate(); // Setting the number of days in the month

    // Finding the first day of the first week of the month
    let currentDate: Date = new Date(startDate);
    while (currentDate.getDay() !== startDayOfWeek) {
      currentDate.setDate(currentDate.getDate() - 1);
    }

    // Generating calendar data for each week of the month
    for (let week = 0; week < weeks; week++) {
      const weekDates: Array<any> = [];

      // Generating calendar data for each day of the week
      for (let day = 0; day < 7; day++) {
        const date: Date = new Date(currentDate);
        const yearString: string = date.getFullYear().toString();
        const monthString: string = (date.getMonth() + 1).toString().padStart(2, '0');
        const dayString: string = date.getDate().toString().padStart(2, '0');
        const dateString: string = `${yearString}-${monthString}-${dayString}`;
        const weekdayString: string = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
        weekDates.push({ date, dateString, weekdayString });
        currentDate.setDate(currentDate.getDate() + 1);
      }

      calendar.push({ weekDates, year, month: month + 1 });
    }
  }

  return calendar.flat(); // Flattening the nested arrays into a single array
}

const year: string = moment().format("YYYY");
const startDayOfWeek: number = 0; // 0: Sunday, 1: Monday, 2: Tuesday, and so on
const calendarArray: Array<any> = getCalendar(Number(year), startDayOfWeek);
const [a, b, c, d, e, f, g] = calendarArray;
console.log(calendarArray[1]);

//   console.log(a)
