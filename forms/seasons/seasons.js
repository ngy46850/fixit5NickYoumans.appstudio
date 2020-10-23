/* Program on ' seasons ' form that gets a 
3 letter month from the user 
( first three letters in form Jan, Feb, etc) 
and tells user the season using a popup. 
Uses an if, else, and/or elseif as needed 
and a Prompt and an Alert.
*/

var seasons = prompt("Enter the first three letters of a month, capitalized.")

if (seasons == "Dec" || seasons == "Jan" || seasons == "Feb"){
  alert("That month is in the Winter.");
}
else if (seasons == "Mar" || seasons == "Apr" || seasons == "May") {
  alert("That month is in the Spring.");
}
else if (seasons == "Jun" || seasons == "Jul" || seasons == "Aug") {
  alert("That month is in the Summer.");
}
else if (seasons == "Sep" || seasons == "Oct" || seasons == "Nov") {
  alert("That month is in the Fall.");
}
else {
  alert("please enter the first three letter of a month, capitalized.");
}
