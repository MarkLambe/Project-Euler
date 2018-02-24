let counter = 0;
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

let ans = 0;
for(let i = 0;counter < 10001;i++){
    if(isPrime(i)){
        counter++;
        ans = i;
    }
}

console.log(ans);