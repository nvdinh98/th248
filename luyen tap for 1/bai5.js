
    let number1 = 0;
    let number2 = 1;
    let total = 0
    let count = parseInt(prompt("nhap Count vao de"))
    for (let i = 0; i < count; i++) {
        let number3 = number1 + number2
        number1 = number2;
        number2 = number3;
        total += number3
    }
document.write(total)
