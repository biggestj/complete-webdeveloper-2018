//#1 change this function into a ternary and assign it to variable called experiencePoints
const experiencePoints = () => winBattle ? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
// Nothing you break before you set whatHappens
//#3 return value when moveCommand("back");
// "You arrived home" is what gets returned
//#4 return value when moveCommand("right");
// "you found a river"
//#5 return value when moveCommand("left");
// Nothing you break before you set whatHappens
//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!
// Fixed it instead.
