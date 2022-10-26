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


// get the first day in the current month
const getBeta = () => {
    const today = new Date()
    var x = new Date(today.setDate(1))
    while (x.getDay() !== 0) {
        x = subday(x)
    }
    return x
}

//generate an array which contains the calendar
export const generate = () => {
    var calendar = [getBeta()]
    var last = getBeta()
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








