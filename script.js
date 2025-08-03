let box = document.querySelectorAll(".box")
let msg_container = document.querySelector(".hidden")
let msg = document.querySelector("#msg")
let reset = document.querySelector(".reset")
let newbtn = document.querySelector(".new")

let turn0 = true;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

    box.forEach((boxes) => {
        boxes.addEventListener("click",() => {
            if(turn0){
                boxes.innerText = "O";
                turn0 = false;
            }
            else{
                boxes.innerText = "X";
                turn0 = true;
            }
            boxes.disabled = true;
            boxes.classList.add("clicked");
            checkWinner();
        })
    })

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let p1 = box[pattern[0]].innerText;
        let p2 = box[pattern[1]].innerText;
        let p3 = box[pattern[2]].innerText;
        
        if(p1!= "" && p2!="" && p3!=""){
            if(p1===p2 && p2 === p3){
                console.log("Winner");
                if(p1 === "X"){
                    msg.innerText = "Winner is X";
                }
                else{
                    msg.innerText = "Winner is O";
                };
                msg_container.classList.remove("hide");
                reset.classList.add("hide")
                for(x of box){
                    x.disabled = true;
                }
                newfunc();
            } 
        }
    }
    resetfunc();
};

const newfunc = () =>{
    newbtn.addEventListener("click",()=>{
        for( y of box){
            y.innerText = "";
            y.disabled = false;
            y.classList.remove("clicked")
        }
        turn0 = true;
        msg_container.classList.add("hide");
        reset.classList.remove("hide")
    })
}

const resetfunc = () =>{
    reset.addEventListener("click", ()=>{
        for( z of box){
            z.innerText = "";
            z.disabled = false;
            z.classList.remove("clicked")
        }
        turn0 = true;
    })
}