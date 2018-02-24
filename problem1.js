let total = 0;
for(let i = 0; i < 1000; i++){
    total += i % 3 == 0 || i % 5 == 0 ? i : 0;
}
console.log(total);