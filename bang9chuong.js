let table = "<table border='1'>"
for (let i = 0; i <= 10; i++) {
    table = table + "<tr>"
    for (let j = 0; j < 10; j++) {
        table = table + "<td>" + `${i} * ${j} = ${i*j}` + "</td>"
    }
    table = table + "</tr>"
}
table = table + "</table>"
document.write(table)