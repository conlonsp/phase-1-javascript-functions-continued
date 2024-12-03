function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    return function (adj = "Special") {
        return `You are ${flair}${adj}${flair}!`
    }
}


































// function saturdayFun(activity = "roller-skate") {
//     return `This Saturday, I want to ${activity}!`
// }

// const mondayWork = function(activity = "go to the office") {
//     return `This Monday, I will ${activity}.`
// }

// function wrapAdjective(symbol = "*") {
//     return function(msg = "special") {
//         return `You are ${symbol}${msg}${symbol}!`
//     }
// }