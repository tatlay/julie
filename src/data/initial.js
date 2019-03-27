const initial = {
    loaded: false,
    exerciseFocus: "Legs",
    goal: "endurance",
    workoutTimeMins: 40,
    restTime: 120,
    sets: 3,
    targetReps: 12,

    Workout: [
        {
            exerciseName: "Squats",
            exerciseDescription: "Kinda jump up and down with a bar on your shoulders.",
            completedReps: 0,
            weight: 0,
            completed: false,
        },
        {
            exerciseName: "Leg Raises",
            exerciseDescription: "Use the machine with the funny-looking seat.",
            completedReps: 0,
            weight: 0,
            completed: false,
        },
        {
            exerciseName: "Sledge Push",
            exerciseDescription: "Push the sledge up and down the aisle.",
            completedReps: 0,
            weight: 0,
            completed: false,
        },
        {
            exerciseName: "Romanian Deadlifts",
            exerciseDescription: "Pick the dumb-bells up keeping your legs straight.",
            completedReps: 0,
            weight: 0,
            completed: false,
        },
    ],
};

export default initial;
