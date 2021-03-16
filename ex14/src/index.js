// Only change code below this line

function myForLoop1() {
    var evenNumbers =""
    for (var i = 0; i <= 8; i += 2) {
        var evenNumbers = evenNumbers.concat(i) + ", ";
    }
    return evenNumbers.slice(0, -2);
}

function myForLoop2() {
    var evenInverseNumbers =""
    for (var i = 8; i >= 0; i -= 2) {
        evenInverseNumbers = evenInverseNumbers.concat(i) + ", ";
    }
    return evenInverseNumbers.slice(0, -2);
}


console.log(myForLoop1());
console.log(myForLoop2());

// Only change code above this line

module.exports = {
    myForLoop1,
    myForLoop2
};