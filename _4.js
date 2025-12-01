// ## 4. Count character types in a text (using loops only) **1 point**
const text = "Hello123! Welcome to JS 2025.";

const chacter = (str) => {

    const digits = str.split('').filter(el => +el).length;
    const spaces = str.split('').filter(el => el === ' ').length;
    const letters = str.split('').filter(el =>  /[a-z]/gi.test(el)).length;
    const symbols =  str.split('').filter(el =>  /[.$-/:-?{-~!"'^_`\\[\]]/.test(el)).length;
    return {
        letters: letters,
        digits: digits,
        spaces: spaces,
        symbols: symbols,

    }
}
console.log(chacter(text));
