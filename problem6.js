let total_sum_of_squares = 0;
let total_square_of_sums = 0;

for(let i = 0; i <= 100;i++){
    total_sum_of_squares += i*i;
    total_square_of_sums += i;
}
total_square_of_sums *= total_square_of_sums;
console.log(total_square_of_sums - total_sum_of_squares);