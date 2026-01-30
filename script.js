let h=document.getElementById("heading");
let xclick=[];
let oclick=[];
let buttons=document.querySelectorAll("button");
let count=0;
let gamenotover=true;
let winningcondns=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]
function wincheck(k){
    return winningcondns.some(x =>
        x.every(y =>
            k.includes(y)
        )
    )
}
buttons.forEach(btn =>{
    btn.addEventListener("click" , function(event){
        if(btn.textContent=="" && gamenotover==true){
            if(count%2==0){
            h.textContent="Os TURN";
            btn.textContent="X";
            count++;
            xclick.push(Number(btn.dataset.index));
        }

            else{
            h.textContent="Xs TURN";
            btn.textContent="O";
            count++;
            oclick.push(Number(btn.dataset.index));
            }

        if(oclick.length>=3){
            if(wincheck(oclick)==true){
                h.textContent="O wins";
                gamenotover=false;
            }
        }

        if(xclick.length>=3){
            if(wincheck(xclick)==true){
                h.textContent="X wins";
                gamenotover=false;
            }
             
        }

        else if(count==9){
            h.textContent="DRAW";
            gamenotover=false;
        }
        if(count==9){
            h.textContent="DRAW";
            gamenotover=false;
        }
        }
    })
})

        
