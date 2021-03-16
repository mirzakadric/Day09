// Only change code below this line

function myDoWhile() {
    var myNumbers = "";
    var i = 0;

    do {
        myNumbers = myNumbers.concat(i) + ", ";
        i++;
    } while (i < 10);

    return myNumbers.slice(0, -2);
}

console.log(myDoWhile());
// Only change code above this line

module.exports = myDoWhile;