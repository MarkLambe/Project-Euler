function triangle_number_iterator() {
    var curr = 1;
    return {
        next: function() {
            let val = 0;
            for(let i = 0; i <= curr; i++){
                val += i;
            }
            curr++;
            return val;
        }
    }
}

function get_num_divisors(num){
    let num_divisors = 0;
    for(let i = parseInt((num +1) / 2); i > 0;i--){
        if(num % i == 0){
            num_divisors++;
        }
    }
    num_divisors++;
    return num_divisors;
}

let iter = triangle_number_iterator();

let num_divisors = 0;

let num = 0;

while(num_divisors < 500){
    num = iter.next();
    num_divisors = get_num_divisors(num);
}

console.log(num);