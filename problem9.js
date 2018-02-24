let lim = 1000;
let single_number_limit = parseInt(lim / 3) + 1;
for(let i = 0; i < single_number_limit;i++){
    for(let j = i + 1; j < lim;j++){
        let k = lim - i - j;
        if(i*i + j*j == k*k && i+j+k == lim && k > j){
            console.log(i*j*k);
        }
    }   
}