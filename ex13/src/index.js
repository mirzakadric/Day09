// Only change code below this line

function inverseWhile() {
    var fiveNumbers = "5";
    var myString = "";

    while (fiveNumbers >= 0) {
        String(fiveNumbers);
        myString = myString.concat(fiveNumbers) + ",";
        fiveNumbers --
    }
    fiveNumbers = myString.slice(0, -1)
    return fiveNumbers;
}

// Only change code above this line

console.log(inverseWhile());

module.exports = inverseWhile;