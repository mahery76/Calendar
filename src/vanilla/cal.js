// get the first day in the current month
const getBeta = () => {
    const today = new Date()
    const currentYear = today.getFullYear()
    const currentMonth = today.getMonth()
    const alphadate = new Date("2000-01-01T00:00:00Z");
    const betadate = new Date(alphadate.setFullYear(currentYear, currentMonth, 1));

    var x = betadate

    while (x.getDay() !== 0) {
        x = new Date(x.setDate(x.getDate() - 1))
    }
    return x
}
// add one day in the selected day
const addoneday = (a) => {
    var b = a.setDate(a.getDate() + 1)
    return (new Date(b))
}
//generate an array which contains the calendar
export const generate = () => {
    var calendar = [getBeta()]
    var last = getBeta()
    var i;
    for(i=0; i<41; i++){
        calendar.push(last)
        last = addoneday(last)
    }
    return calendar
}








