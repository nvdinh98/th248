function checkNumber() {
    let number = parseFloat(prompt("nhap so di "))
    while (number < 20 || number > 100  ) {
        number = parseFloat(prompt("nhap lai so di "))
        
    }
    alert(number)
}
checkNumber()