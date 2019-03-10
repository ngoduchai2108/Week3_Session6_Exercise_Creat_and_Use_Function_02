function searchMinInteger(num1,num2,num3) {
    let Min;
    if (num1<=num2 && num1<=num3){
        Min=num1;
    }
    else if (num2<=num3){
        Min=num2;
    }
    else {
        Min=num3;
    }
    return alert('The smallest of three integer ( '+num1+', '+num2+', '+num3+' ) is: '+ Min+ "!!!");
}