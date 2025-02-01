//votre code ici

function printNumbers(n) {
    var res = "";
    for (let number = 1; number < n + 1; number++) {
        if (number == n) {
            res += number;
        } else {
            res += number + " "
        }
    }
    return res;
}



export default printNumbers
