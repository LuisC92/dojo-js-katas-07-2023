/*
Create a function `convertTime` which converts a time formatted as "hh:mm" in a duration in minutes.

If the argument is not correctly formatted, return null.

* "02:30" -> 150
* "01:45" -> 105
* "01h45m" -> null

Add you own tests.

*/

// TODO add your code here

// function `convertTime` 
const convertTime = (time) => {
    // which converts a time formatted as "hh:mm" in a duration in minutes.
    const timePattern = /^(\d{1,2}):(\d{2})$/;
    const match = time.match(timePattern);
  
    if (match) {
      const hours = parseInt(match[1]);
      const minutes = parseInt(match[2]);
      return hours * 60 + minutes;
    } else {
      return null;
    }
}

module.exports = convertTime;
