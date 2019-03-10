function reserseArray(array) {
    for (let i=0;i<array.length/2;i++){
        let b=array[i];
        array[i]=array[array.length-i-1];
        array[array.length-i-1]=b;
    }
    return showArray(array);
}