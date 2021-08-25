let number = 20;
let count = 0;
let N = 2;

while (count < number) {
    let check = false;
    for (let i = 2; i < N ; i++) {

        if (N %  i == 0) {
            check = true;
            break;
        }
    }
    if(check == false ){
        document.write(N + "<br>")
        count++;
    }
    N++;
}
