function map(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }


  const numberlist = [1,2,3,4,5];
  console.log(map(numberlist,(num)=>(num*2)));
  