
var week = prompt("please enter a capitalized day name: (Ex. Monday, Tuesday)") 

const weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekend = ['Saturday', 'Sunday']

  if (weekDay.includes(week)) {
    alert('It is a weekday!');
}
  else if (weekend.includes(week)) {
  alert('It is a weekend!');
}
else {
  alert('Your input: ' + week + ' was not a capitalized, full name of a day.')
}
