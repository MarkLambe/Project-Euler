// data is in 2D array


let x_dim = 20;
let y_dim = 20;

let data;

let curr_greatest_prod = -1;

for(let i = 0; i < x_dim; i++){
    for(let j = 0; j < y_dim; j++){
        
        let vert_prod = -1;
        if(i < x_dim - 3){
            vert_prod = data[i][j] * data[i][j+1] * data[i][j+2] * data[i][j+3]; 
            if(vert_prod > curr_greatest_prod){
                curr_greatest_prod = vert_prod;
            }
        }

        let horz_prod = -1;
        if(j < y_dim - 3){
            horz_prod = data[i][j] * data[i+1][j] * data[i+2][j] * data[i+3][j]; 
            if(horz_prod > curr_greatest_prod){
                curr_greatest_prod = horz_prod;
            }
        }

        let vert_dr_prod = -1;
        if(i < x_dim - 3 && j < ydim - 3){
            vert_dr_prod = data[i][j] * data[i+1][j+1] * data[i+2][j+2] * data[i+3][j+3];
            if(vert_dr_prod > curr_greatest_prod){
                curr_greatest_prod = vert_dr_prod;
            }
        }

        let vert_dl_prod = -1;
        if(i > x_dim + 3 && j > ydim + 3){
            vert_dl_prod = data[i][j] * data[i-1][j-1] * data[i-2][j-2] * data[i-3][j-3];
            if(vert_dl_prod > curr_greatest_prod){
                curr_greatest_prod = vert_dl_prod;
            }
        }
    }
}