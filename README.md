# JS-CALENDRE-LIB

A javascript calendar library to parsing, validating, manipulating and formatting date.

##  How To Install

### 
```javascript
* npm install js-calendre-lib
```

## How To Use
First, import the library using 

```javscript
* import getCalendar from "js-calendre-lib"
```

***

Next, invoke the function which generates the calendar data for the specified year.
```javascript
* getCalendar();
```

***
Next, Pass the calendar data to your frontend component or template. You can store the calendar data in a variable or pass it as a prop to your frontend component.

*** 

## these are some examples 

```javascript
try {
    data = await getCalendar(2023, 0)
    console.log(data)
 } catch (error) {
   console.log(error)
 }
```

```javascript
let data;
console.log(getCalendar);
(async () => {
  data = await getCalendar(2022, 0);
   console.log(JSON.stringify(data));
})();
```

```javascript
getCalendar(2019, 0).then((res) => console.log(res));
```

NOTE: getCalendar() function takes two arguments 'year' and 'startWeekDay'. example
```javascript
getCalendar(2023, 0)
```


Then, go ahead to Iterate over the calendar data. Use a loop or mapping function in your frontend code to iterate over the calendar data and generate the necessary HTML or UI elements to display the calendar. You can extract the required information such as the date, weekday, or month from the calendar data object and use it to populate your calendar UI.

*** 

By following these steps, you can integrate the output of the calendar function into your frontend development and use it to set up and display a date calendar in your application.

visit [documentation](https://github.com/Princecodes4115/JS-Calendre)) for more details.
Follow me on [Likendin](https://www.linkedin.com/in/ezekiel-moses-557a63233)
follow me on [Twitter](https://www.linkedin.com/in/ezekiel-moses-557a63233)


