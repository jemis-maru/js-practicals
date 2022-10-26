Array.prototype.doubleItem = function(){
    return this.map(item => {
        if(typeof item == "number"){
            return item * 2;
        }
        else{
            return item;
        }
    });
};

let arr = [1,2,"3",4,5];

arr = arr.doubleItem();

console.log(arr);