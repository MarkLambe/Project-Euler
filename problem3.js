let num = 600851475143;
let factors = [];
for(let i = 2; i < num;i++){
    if(num % i == 0){
        num /= i;
        factors.push(i);
    }
}
if(num > 1){
    factors.push(num)
}
console.log(Math.max(...factors));