function filter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
    
     if(callback(arr[i], i, arr))   
     {
        result.push(arr[i]);
     }
      
    }
    return result;
  }


  const numberlist = [11,24,32,45,56,69,19,22,52];
  console.log(filter(numberlist,(num)=>num%2===0 ));
  