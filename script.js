// 1) С помощью prompt запрашиваем у пользователя что он хочет сделать (+ - / *). Спрашиваем до тех пор, пока он не введет допустимое значение

// 2) Запрашиваем сколько операндов он хочет использовать. Это должно быть ЧИСЛО больше 1 и меньше 7. Спрашиваем пока пользователь не введет допустимое значение

// 3) Запрашиваем у пользователя каждый операнд. Это должно быть ЧИСЛО. Запрашиваем пока пользователь не введет допустимое значение

// 4) С помощью alert или console.log выводим финальный результат действия (+ - / *).

debugger;

let operations = ["+", "-", "/", "*"];
let mathOperation;
let operandsCount;
let operand = [];

do {
    mathOperation = prompt(`Що ви хочете зробити? Напишіть "${operations.join('", "')}"`);
} while (!operations.includes(mathOperation));

do {
    operandsCount = +prompt("Скілки операндів ви хочете використати? Напишіть число більше 1 і менше 7");
} while (operandsCount < 1 || operandsCount > 7 || isNaN(operandsCount));

for (let i = 0; i < operandsCount; i++) {
    operand[i] = prompt(`Введіть значення операнда ${i + 1}`);
}

let result = +operand[0];

for (let i = 1; i < operand.length; i++) {
    switch (mathOperation) {
        case "*": 
            result *= +operand[i];
            break;  
        case "+":
            result += +operand[i];
            break;
        case "-":
            result -= +operand[i]; 
            break;
        case "/":
            result /= operand[i]; 
            break;
    }
}

alert(`Результат: ${result}`);
