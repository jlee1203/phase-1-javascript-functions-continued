// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`)
}

function mondayWork(errand = 'go to the office'){
    return (`This Monday, I will ${errand}.`)
}

function wrapAdjective(string = "*"){
    return function (a = 'special'){
        return (`You are ${string}${a}${string}!`)
    }
    
}