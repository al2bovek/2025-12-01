//  6: Flatten a list of arrays using `reduce()` **2 points**
const arrOfArrs = [
    ["aaron", "ake", "anna", "aje"],
    ["becky", "ben", "bright"],
    ["cara", "chris"],
    ["david", "daniel", "danielle", "djenue"],
];

const flat = (arr) => {
    const result = [...arr].reduce((ac, el) => {
        ac.push(...el);
        return ac;
    },[])
    return result
}
console.log(flat(arrOfArrs));
