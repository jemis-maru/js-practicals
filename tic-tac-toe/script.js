let player = "x";

let winArr = [
    [0,1,2],
    [10,11,12],
    [20,21,22],
    [0,10,20],
    [1,11,21],
    [2,12,22],
    [0,11,22],
    [1,11,20],
];

let arrForX = [];
let arrForO = [];
let count = 0;
let winner = "";

function clickedCell(cell)
{
    count++;
    if(player == "x"){
        cell.innerHTML = "X";
        arrForX.push(Number(cell.id));
        for(let i = 0; i < winArr.length; i++){
            let flag = false;
            let nestedArr = winArr[i];
            for(let j = 0; j < nestedArr.length; j++){
                let ele = nestedArr[j]; 
                if(arrForX.includes(ele)){
                    flag = true;
                }
                else{
                    flag = false;
                    break;
                }
            }
            if(flag){
                winner = "X";
                if(!alert("X won!")){
                    location.reload();
                }
                break;
            }
        }
        player = "o";
    }
    else{
        cell.innerHTML = "O";
        arrForO.push(Number(cell.id));
        for(let i = 0; i < winArr.length; i++){
            let flag = false;
            let nestedArr = winArr[i];
            for(let j = 0; j < nestedArr.length; j++){
                let ele = nestedArr[j]; 
                if(arrForO.includes(ele)){
                    flag = true;
                }
                else{
                    flag = false;
                    break;
                }
            }
            if(flag){
                winner = "O";
                if(!alert("O won!")){
                    location.reload();
                }
                break;
            }
        }
        player = "x";
    }
    if(!winner && count >= 9){
        if(!alert("Draw!")){
            location.reload();
        }
    }
}