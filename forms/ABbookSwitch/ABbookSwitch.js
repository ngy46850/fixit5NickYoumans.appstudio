/*that uses switch to output statement about 
history, math, econ or unknown book. 
History and Math have newlines so two lines of output to console. 
*/

var bookType = prompt("Enter one of these book types: history, math, or economics.")

switch (bookType) 
{
case "history":
    alert("I love history too!")
    break;
case "math":
    alert("Do you like " + bookType + "?" )
    break;   
case "economics":
    alert("Economics Book - that's all I have to say.")
    break;
default:
    alert("Unknown Book")
    break;
}