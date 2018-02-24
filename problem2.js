let total = 0;

function fibGen() {
    let x_prev = 1;
    let x_prev_prev = 0;

    return {
        next: function() {
            let ans = x_prev + x_prev_prev;
            x_prev_prev = x_prev;
            x_prev = ans;
            return ans;
        }
    }
}

let fg = fibGen();
let num = 0;
while(num <= 4000000){
    num = fg.next();
    total += num % 2 == 0 ? num : 0;
}

console.log(total);