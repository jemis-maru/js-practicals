let calc = (str) => {
    try{
        return eval(str);
    }
    catch(e){
        if (e.name !== 'SyntaxError'){
            throw e;
        }
        return 'Not valid';
    }
}

let str = "5 + 2 * 2";
console.log(calc(str));