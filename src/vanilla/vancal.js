// add one day to the given date
const addoneday = (a) => {
    const oneday = 1000 * 60 * 60 * 24
    const b = a.valueOf() + oneday
    return (new Date(b))
}
// substract one day to the given date
const subday = (a) => {
    const oneday = 1000 * 60 * 60 * 24
    const b = a.valueOf() - oneday
    return (new Date(b))
}

// add one month to the given date
export const addmonth = (a) => {
    let b = a.setMonth(a.getMonth() + 1)
    return new Date(b) 
}

// substract one month to the given date
export const submonth = (a) => {
    let b = a.setMonth(a.getMonth() - 1)
    return new Date(b) 
}

// get the first day in the current month
const getBeta = (a) => {
    var x = new Date(a.setDate(1))
    while (x.getDay() !== 0) {
        x = subday(x)
    }
    return x
}

//generate an array which contains the calendar
export const generate = (a) => {
    var calendar = [getBeta(a)]
    var last = getBeta(a)
    var i;
    for(i=1; i<42; i++){
        last = addoneday(last)
        calendar.push(last)
    }
    var newcal = new Array(6)
        .fill('')
        .map((_,i)=> calendar.slice( i*7, (i+1)*7) )
    return newcal
}








