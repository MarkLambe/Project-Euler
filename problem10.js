function isPrime(n){
    if(n < 2){
        return false;
    }
    if(n == 2){
        return true;
    }
    else if(n % 2 == 0){
        return false;
    }
    else{
        for(let i = 2; i < ((n+1)/2)-1;i++){
            if (n % i == 0){
                return false;
            }
        }
        return true;
    }
}

let sum = 0;
for(let i = 1;i < 2000000;i+=2){
    if(isPrime(i)){
        sum += i;
    }
}
sum = sum + 2;
console.log(sum);