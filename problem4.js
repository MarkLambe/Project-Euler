let num = 0;
for(let i = 999; i > 99; i--){
    for(let j = 999;j >99;j--){
        if(String(i*j) == String(i*j).split("").reverse().join("")){
            num = i*j > num ? i*j: num;
        }
    }
}
console.log(num);