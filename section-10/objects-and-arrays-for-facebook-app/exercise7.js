/* Create an object and an array which we will use in our facebook exercise. 
    1. Create an object that has properties "username" and "password". Fill those values in with strings.
    2. Create an array which contains the object you have made above and name the array "database".
    3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
*/

const database = [
    {
        username: "Jorde",
        password: "SzechuanSauce"
    }
];

const newsfeed = [
    {
        username: "Hopeful",
        timeline: "We can timetravel"
    },
    {
        username: "Hippopotamus",
        timeline: "From ancient Egypt untill now"
    },
    {
        username: "Caesar",
        timeline: "From Rome to Egypt"
    }
];

let usernamePrompt = prompt("What's your username?");
let passwordPrompt = prompt("What's your password?");

const signIn = (user, pass) => {
    if(user === database[0].username && pass === database[0].password) {
        console.log(newsfeed);
    } else {
        console.log("Sorry, wrong username and/or password");
    }
}

signIn(usernamePrompt, passwordPrompt);