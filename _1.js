// ## 1. Transform list of usernames into detailed user objects **1 point**
const userNames = ["alice_01", "Bob99", "charlie_dev", "DANA", "eve-test"];

const transform = (arr) => {
  const result = [...arr].map(el => {
    const lower = el.toLowerCase();
    const length = el.length;
    const hasNumber = el.split('').some(chr => chr == +chr);
    return { original: el, lower: lower, length: length, hasNumber: hasNumber }
  })
  return result;
}

console.log(transform(userNames));

