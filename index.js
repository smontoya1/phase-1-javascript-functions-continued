function saturdayFun (someActivity = 'roller-skate') {
    return `This Saturday, I want to ${someActivity}!`
}

function mondayWork (someActivity = 'go to the office') {
    return `This Monday, I will ${someActivity}.`
}

function wrapAdjective (flair = '*') {
    return function inner (adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`
    };
};