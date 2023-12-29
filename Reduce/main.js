function Reduce(arr,callback,initialValue){
    let accumulator = initialValue;
    const indexStart = 0;
    for(let i =indexStart ; i<arr.length ; i++){
       accumulator = callback(accumulator,arr[i],i,arr)
    }
    return accumulator;

}

const numberlist = [1,2,3,4,5];
const sum = Reduce(numberlist,(accumulator,num)=>(accumulator+num),0);
console.log("Sum of numbers : ",sum)