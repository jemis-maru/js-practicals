let chunkArr = (arr, chuunkSize) => {
    let result = [];
    while(arr.length){
      result.push(arr.splice(0, chuunkSize));
    }
    return result;
}
  
let resultArr = chunkArr(["a", "b", "c", "d"], 2);
console.log(resultArr);