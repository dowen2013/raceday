var raceNumber = Math.floor(Math.random() * 1000);
var runnerRegisteredEarly = true;
var runnerAge = 14;

console.log(`Race Number is ${raceNumber}.`);
console.log(`Registered Early is ${runnerRegisteredEarly}.`);
console.log(`Runner Age is ${runnerAge}.`);

if (runnerAge > 18 && runnerRegisteredEarly === true) {
    raceNumber += 1000;
}

if (runnerAge > 18 && runnerRegisteredEarly === true) {
    console.log(`Adult runners race at 9:30 am. Your race number is ${raceNumber}.`);
} else if (runnerAge >= 18 && runnerRegisteredEarly === false) {
    console.log(`Late registered adult runners race at 11:00 am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
    console.log(`Youth runners race at 12:30 pm. Your race number is ${raceNumber}.`);
}
