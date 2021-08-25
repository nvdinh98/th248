// let number1 = 0;
// let number2 = 1;
// let num = parseInt(prompt("nhap num"))
// for (let i = 0; i < num; i++) {
//     var number3 = number1 + number2
//     number1 = number2;
//     number2 = number3;
//     document.write(number3 + "<br>")
// }
// if (number3 % 5 == 0) {
//     alert(number3)
// }


function fiBo() {
    let number1 = 0;
    let number2 = 1;
    let count = parseInt(prompt("nhap Count vao de"))
    for (let i = 0; i < count; i++) {
        let number3 = number1 + number2
        number1 = number2;
        number2 = number3;
        document.writeln(number3)
    }
}
fiBo()