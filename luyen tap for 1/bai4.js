let number1 = 0;
let number2 = 1;
let num = parseInt(prompt("nhap num"))
for (let i = 0; i < num; i++) {
    let number3 = number1 + number2
    number1 = number2;
    number2 = number3;
    let resul =number3
    if (resul %5==0)
        document.write(number3 +"<br>")
}