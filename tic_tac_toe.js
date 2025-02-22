let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#reset") ;
rstBtn.addEventListener("click" , () => {
    boxes.forEach((box) => {
        box.innerText = "" ;
        box.disabled = false;
        currTurn = "O"
    })
})
let container = document.querySelector(".container")
let winfunc = () => {
    for(let patterns of winPatterns) {
    let pos1 = boxes[patterns[0]].innerText ;
    let pos2 = boxes[patterns[1]].innerText ;
    let pos3 = boxes[patterns[2]].innerText ;
    if(pos1 != "" && pos1 != "" && pos1 != ""){
    if(pos1 == pos2 && pos2 == pos3){
        console.log("winner" , pos1)
        boxes.forEach((box) =>{
            box.disabled = true
        })
        let win = document.createElement("div") ;
        win.innerText = `Congratulations! "${pos1}" Won`
        container.before(win) ;
        win.style.fontSize = "8vmin" ;
        win.style.height = "45vmin" ;
        win.style.display = "flex" ;
        win.style.justifyContent = "center" ; 
        win.style.alignItems = "center"
        let newgm = document.createElement("button") ;
        newgm.innerText = "New Game" ; 
        container.before(newgm) ; 
        newgm.style.fontSize = "4.4vmin" ;
        newgm.style.fontWeight = "500" ;
        newgm.style.height = "9vmin" ;
        newgm.style.width = "26vmin" ;
        newgm.style.borderRadius = "2.6vmin"
        newgm.style.color = "white" ;
        newgm.style.backgroundColor = "black" ;
        newgm.style.display = "flex" ;
        newgm.style.justifyContent = "center" ; 
        newgm.style.alignItems = "center"
        newgm.style.marginBottom = "20vmin"
        newgm.style.marginTop = "10vmin"
        

        newgm.addEventListener("click" , () => {
            boxes.forEach((box) => {
                box.innerText = "" ;
                box.disabled = false;
                currTurn = "O" ;
                win.remove();
                newgm.remove();
            })
        })
    }
    }
}
}
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let currTurn = "X" ;
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(currTurn === "X"){
            box.innerText = "X";
            currTurn = "O" ;
        }
        else{
            box.innerText = "O" ;
            currTurn = "X"
        }
        box.disabled = true;
        winfunc() ;
        if(boxes[0].innerText != "" && boxes[1].innerText != "" && boxes[2].innerText != "" && boxes[3].innerText != "" && boxes[4].innerText != "" && boxes[5].innerText != "" && boxes[6].innerText != "" && boxes[7].innerText != "" && boxes[8].innerText != ""){
            console.log("reset to start")
        }
    })
    
})
