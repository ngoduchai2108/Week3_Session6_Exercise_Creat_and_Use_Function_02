function reserseTwoInteger(num1,num2) {
    let array=[num1,num2];
    let b=array[0];
    array[0]=array[1];
    array[1]=b;
    return document.write("Reserse two integer is: "+array);
}