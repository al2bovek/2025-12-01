// ## 7 DOM: Build a Temperature Converter  **3 points**
const result = document.querySelector("#result")
const value = document.querySelector('#value');
const unit = document.querySelector("#unit");
const celsius = document.querySelector('#celsius');
const fahrenheit = document.querySelector('#fahrenheit');
const btn = document.querySelector("#convert");
value.addEventListener("focus", () =>  value.value = '');
let select = '';
unit.addEventListener('click', (e) => select = e.target.value);
const formula = (temp, unit = select) => {
    if(!unit) unit = celsius.value;
    let result = '';
  if (unit === "celsius") {
    result = `${((temp * 9/5) + 32).toFixed(2)}° Celsius`;
  } else {
    result = `${((temp - 32) * 5/9).toFixed(2)}° Fahrenheit`;
  }
  return result;
}

btn.addEventListener("click", () => {result.textContent = formula(value.value)});



