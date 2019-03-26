let chest = false;
let back = false;
let biceps = false;
let triceps = false;
let shoulders = false;
let legs = false;

let goal = "strength";

let DesiredTimeMins = 40;

//===============================================
// HIDDEN LOGIC

let reps = 0;
let repTime = 0;
let sets = 0;
let rest = 0;

if (goal === "strength") {
    reps = 6;
    repTime = 4;
    sets = 5;
    rest = 180;
} else if (goal === "size") {
    reps = 12;
    repTime = 6;
    sets = 3;
    rest = 90;
} else if (goal === "endurance") {
    reps = 18;
    repTime = 3;
    sets = 2;
    rest = 60;
}

const changeOverTime = 120;
let DesiredTimeSecs = (DesiredTimeMins * 60) + changeOverTime;


let oneExercise = ((reps * repTime) * sets) + (rest * (sets - 1)) + changeOverTime;
let numOfEx = Math.floor(DesiredTimeSecs / oneExercise);


let workOut =  `You can do ${numOfEx} ${goal} exercises in ${DesiredTimeMins} minutes`;

console.log(oneExercise);
console.log(oneExercise / 60);
console.log(numOfEx);
console.log(workOut);

//===============================================