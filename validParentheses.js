var isValid = function(s) {

    if(s.length <= 1){
        return false;
    }

    let strArr = s.split('');
    let stack = [];
    let flag = false;
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] == '(' || strArr[i] == '{' || strArr[i] == '['){
            stack.push(strArr[i]);
            flag = false;
        }
        else if(strArr[i] == ')' && stack[stack.length-1] == '('){
            stack.splice(stack.length-1, 1);
            flag = true;
        }
        else if(strArr[i] == '}' && stack[stack.length-1] == '{'){
            stack.splice(stack.length-1, 1);
            flag = true;
        }
        else if(strArr[i] == ']' && stack[stack.length-1] == '['){
            stack.splice(stack.length-1, 1);
            flag = true;
        }
        else{
            flag = false;
            break;
        }
    }

    if(stack.length >= 1){
        return false;
    }

    return flag;
};

let result1 = isValid('([]})');
result1 ? console.log("Valid") : console.log("Invalid");