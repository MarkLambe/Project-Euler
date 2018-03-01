function generate_collatz_sequence(start){
    last = start;
    return {
        next: function(){
            if(last % 2 == 0){
                last = last / 2;
            }
            else{
                last = (3 * last) + 1;
            }
            return last;
        }
    }
}


let longest_curr_chain = 0;
let longest_index = 0

for(let i = 1;i < 1000000; i++){
    let this_chain = 0;
    let iter = generate_collatz_sequence(i);
    while(iter.next() != 1){
        this_chain++;
    };
    if(this_chain > longest_curr_chain){
        longest_curr_chain = this_chain;
        longest_index = i;
    }
}

console.log(longest_index);
