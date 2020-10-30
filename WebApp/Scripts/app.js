import { BasicCalculation } from './Calculator/Calculator.js';
const
    /**
     * Self Created Elements
     */
    calc = new BasicCalculation(),
    log = calc.log,
    app = calc.pick('app'),

    /**
     * Default Document Operation
     */
    input = document.createElement('input'),
    div = document.createElement('div'),
    resultDiv = document.createElement('div'),
    result = document.createElement('h2'),
    button = document.createElement('button');


div.setAttribute('Id', 'InputDiv');
div.classList.add('container')
div.classList.add('text-center')
div.classList.add('bg-primary')
div.classList.add('m-2')
div.classList.add('p-2')

input.placeholder = 'Equation in String';
input.setAttribute('Id', 'Input');
input.setAttribute('Name', 'Input');
input.setAttribute('type', 'text');

button.innerHTML = 'Result';
button.classList.add('btn');
button.classList.add('btn-danger');
button.classList.add('btn-sm');
button.classList.add('m-2');

div.append(input);
div.append(button);


resultDiv.setAttribute('Id', 'ResultDiv');
resultDiv.classList.add('container')
resultDiv.classList.add('text-center')
resultDiv.classList.add('bg-danger')
resultDiv.classList.add('text-Light')
resultDiv.classList.add('m-2')
resultDiv.classList.add('p-2')



result.classList.add('text-light');
resultDiv.append(result);


app.append(div);
app.append(resultDiv);


// After elements are initialized
resultDiv.style.setProperty('display', 'none');
app.style.setProperty('display', 'none');

document.addEventListener('DOMContentLoaded', (e) => {
    app.style.setProperty('display', 'block');

    button.addEventListener('click', e => {
        if (input.value.length !== 0) {
            if (calc.calculate(input.value).status === 'Success')
                result.innerText = `Result : ${calc.calculate(input.value).result}/-`;
            else
                result.innerText = `Result : ${calc.calculate(input.value).Message}`;
            resultDiv.style.setProperty('display', 'block');
        } else
            resultDiv.style.setProperty('display', 'none');
    });
});