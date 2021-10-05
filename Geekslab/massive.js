moveZeros([false,1,0,1,2,0,1,3,"a"])

function  moveZeros(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
    if( arr[i] === 0){
        arr.splice(i,1);
        count += 1;
    }
    }
    for( let i = 0; i < count; i++){
        arr.push(0);
    }
 return arr;
}