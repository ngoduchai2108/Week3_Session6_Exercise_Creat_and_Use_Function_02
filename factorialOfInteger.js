function factorialOfInteger(num) {
    if (num<0){
        return alert('Number wrong!!!')
    }
    else if (num===1||num===2||num===0){
        return num;
    }
    else {
        return num*factorialOfInteger(num-1);
    }
}