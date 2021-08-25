
function checkNumber () {
    let number = parseInt(prompt("nhap so "))
    let total = 0;
    while( number != -1 ) {
        number = parseInt(prompt("nhap lai so di  "))
        alert(number)
        total += number
    }
    alert(total)
}
checkNumber()
