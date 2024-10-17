const board = [ 
    ["*","*","*","*","*","*","*",],
    ["*","*","R","*","*","*","*",],
    ["*","*","*","*","*","*","*",],
    ["*","*","*","*","*","*","*",],
    ["*","*","*","*","*","*","*",],
    ["*","*","*","*","*","*","K",],
]

let rowR = 0
let columnR = 0

let rowK = 0
let columnK = 0
for(let i =0; i<board.length;i++){
    for(let j =0;j<board[i].length;j++){
        if(board[i][j]=="R"){
            rowR =i
            columnR =j
        }
        if(board[i][j]=="K"){
            rowK =i
            columnK =j
        }
    }
}
if(rowR == rowK || columnR == columnK){
    console.log(`check`);
}
else{
    console.log(`king is safe`)
}