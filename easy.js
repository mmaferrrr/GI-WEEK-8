function ExerciseOfTheDay () {

    const STRING_DEFAULT_VAR = "Today's exercise: "

    const today = new Date ();

    const dayOfWeek = today.getDay();

    let exercise;

    switch(dayOfWeek){
        case 0:
        exercise = "running";
        break;
        case 1:
        exercise = "cycling";
        break;
        case 2:
        exercise = "swimming";
        break;
        case 3:
        exercise = "yoga";
        break;
        case 4:
        exercise = "pilates";
        break;
        case 5:
        exercise = "dancing";
        break;
        case 6:
        exercise = "weightlifting";
        break;
        default:
            exercise = "rest";
            break;
    } 
    console.log(STRING_DEFAULT_VAR + exercise)
}

ExerciseOfTheDay()