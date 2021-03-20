function switchCase(letter) {

    // Only change code below this line

    switch(letter) {
        case "a":
            var animals = "antelope";
            break;

        case "b":
            var animals = "bird";
            break;

        case "c":
            var animals = "cat";
            break;

        default:
            var animals = "stuff";
            break;
    }


    // Only change code above this line
    return animals;
}

console.log(switchCase("a")); // Change this line
console.log(switchCase("b")); // Change this line
console.log(switchCase("c")); // Change this line
console.log(switchCase("d")); // Change this line
console.log(switchCase(4)); // Change this line

module.exports = switchCase;