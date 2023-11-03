// Race Day Project 

let raceNumber = Math.floor(Math.random() * 1000); 
let registeredEarly = true;
let runnerAge = '28'; 


if (registeredEarly && runnerAge > 18) {
    raceNumber += 1000;
} 


if (registeredEarly && runnerAge > 18) {
    console.log(`Your race will begin at 9:30 AM and your number is ${raceNumber}!`); 
} else if (runnerAge > 18 && !registeredEarly) { 
    console.log(`Your race will begin at 11:00 AM and your number is ${raceNumber}`);
} else if (runnerAge < 18) { 
    console.log(`Your race will begin at 12:30 PM and your number is ${raceNumber}`);
}
