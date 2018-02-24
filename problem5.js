let ans = 0;
for(let i = 20;;i+=20){
    let is_div = true;
    for(let j = 1;j <= 20;j++){
        if(i % j != 0){
            is_div = false;
            break;
        }
    }
    if(is_div){
        ans = i;
        break;
    }
}
console.log(ans);