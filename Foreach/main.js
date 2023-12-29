function Foreach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
    
        callback(arr[i],i,arr);      
    }
  }


const numberlist = [11,24,32,45,56,69,19,22,52];

const doubleNumberList = [];

Foreach(numberlist,(num)=>{doubleNumberList.push(num*2)})
console.log(doubleNumberList);
