let get_num_chars_in_int = function(int){
  if(int <= 0 || int > 1000){
    throw "Not supported number!";
  }
  let num = 0;
  if(int > 0 && int <= 19){
    console.log(int + " a number between 1 and 19");
    switch(int){
      case 1:
      case 2:
      case 6:
      case 10:
        num = 3;
        break;
      case 4:
      case 5:
      case 9:
        num = 4;
        break;
      case 3:
      case 7:
      case 8:
        num = 5;
        break;
      case 11:
      case 12:
        num = 6;
        break;      
      case 15:
      case 16:
        num = 7;
        break
      case 13:
      case 14:
      case 18:
      case 19:
        num = 8;
        break
      case 17: 
        num = 9;
        break;
    }
  }
  else if(int % 10 == 0 && int < 100){
    switch (int){
      case 40:
      case 50:
      case 60:
        num = 5;
        break;
      case 20:
      case 30:
      case 80:
      case 90:
        num = 6;
        break;
      case 70:
        num = 70;
        break;
    }
  }
  else if(int % 100 == 0 && int < 1000){
    console.log(int + " a number divisible by 100 less than 1000");

      num = get_num_chars_in_int(int / 100) + 7;
  }
  else if(int < 100){
    console.log(int + " a number less than 100 and not div by 100 or 1 -> 19");

    num = get_num_chars_in_int(parseInt(int / 10) * 10) + get_num_chars_in_int(int % 10);
  }
  else if(int > 100 && int < 1000){
    console.log(int + " a number > 100 and < 1000 and not div by 100");
    let a = parseInt(int / 100) * 100;
    let b = int % 100;
    console.log("a: "+a);
    console.log("b: "+b);
    num = get_num_chars_in_int(a) + 3 + get_num_chars_in_int(b);
  }
  else{
    console.log(int + " 1000");

    //int == 1,000
    num = 11
  }
  console.log("There are " + num + " characters in " + int);

  return num;
}

let total = 0;

for(let i = 998; i <= 1000; i++){
  console.log("\n\n\nChecking " + i);
  let ans = get_num_chars_in_int(i); 
  total += ans;
  console.log("There are " + ans + " characters in " + i);
}

console.log(total);