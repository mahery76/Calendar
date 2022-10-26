
const addone = (x) => {
    y = x + 1
    return y
}
const generate = () => {
    var a = 0;
    var tab = [a]
    var last = a
    for (i = 1; i < 42; i++) {
        last = addone(last)
        tab.push(last)
    }
    return tab
}

const pop = () => {
    const tableau = generate()
    let tab = new Array(6)
        .fill('')
        .map((_,i) => tableau.slice(i * 7, (i+1) * 7))

    return tab
}
console.log(pop())



