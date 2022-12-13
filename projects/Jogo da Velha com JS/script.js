function startGame(){
    document.getElementById("start").style.visibility = "hidden"
    setInterval(function(){
        document.getElementById("start").style.display = "none"
        document.querySelector(".bg-game").style.display = "grid"
        document.querySelector(".bg-game").style.visibility = "visible"
    }, 500)
    Game.time()
    
}



let Game = {
    turn: 1,
    position: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    round: 0,
    selectSquare: function (cls){
        let turn = this.turnPlayer()
        let icon = document.createElement("i")
        icon.classList.add("fa-solid")
        icon.classList.add("fa-5x")
        icon.classList.add("fa-"+turn)
        let square = document.getElementById(cls)
        square.appendChild(icon)
        square.setAttribute("onclick", " ")
        let index = cls[1]
        this.position[index-1] = turn
        this.round ++;
        let valida = this.validation()
        
        if(this.round == 9 && valida ){
            let win = document.getElementById("screen-win")
            win.style.display = "flex"
            let winText = document.createElement('strong')
            winText.innerText = "Deu Velha"
            win.appendChild(winText)
            this.round = 0
        }
        if(this.turn === 1){
            this.turn = 2
        } else{
            this.turn = 1
        }
    },
    turnPlayer: function(){
        if(this.turn === 1){
            document.getElementById("play"+2).classList.add("turn")
            
            
            document.getElementById("play"+this.turn).classList.remove("turn")
            
            return "x"
            
        } else {
            document.getElementById("play"+1).classList.add("turn")
           
            document.getElementById("play"+this.turn).classList.remove("turn")
            return "o"
        }
    },
    validation: function(){
        
        if((this.position[0] == this.position[1] && this.position[1] == this.position[2]) || (this.position[3] == this.position[4] && this.position[4] == this.position[5]) || (this.position[6] == this.position[7] && this.position[7] == this.position[8])
            || (this.position[0] == this.position[3] && this.position[3] == this.position[6]) || (this.position[1] == this.position[4] && this.position[4] == this.position[7]) || (this.position[2] == this.position[5] && this.position[5] == this.position[8]) 
            || (this.position[0] == this.position[4] && this.position[4] == this.position[8]) || (this.position[2] == this.position[4] && this.position[4] == this.position[6])  ){
                if (this.position[0] == this.position[1] && this.position[1] == this.position[2]){
                    let mark = document.getElementById("mark")
                    mark.style.display = 'block'
                    mark.classList.add("p1")
                } else if (this.position[3] == this.position[4] && this.position[4] == this.position[5]){
                    let mark = document.getElementById("mark")
                    mark.style.display = 'block'
                    mark.classList.add("p2")
                } else if (this.position[6] == this.position[7] && this.position[7] == this.position[8]){
                    let mark = document.getElementById("mark")
                    mark.style.display = 'block'
                    mark.classList.add("p3")
                } else if (this.position[0] == this.position[3] && this.position[3] == this.position[6]){
                    let mark = document.getElementById("mark")
                    mark.style.display = 'block'
                    mark.classList.add("p4")
                } else if  (this.position[1] == this.position[4] && this.position[4] == this.position[7]){
                    let mark = document.getElementById("mark")
                    mark.style.display = 'block'
                    mark.classList.add("p5")
                } else if (this.position[2] == this.position[5] && this.position[5] == this.position[8]){
                    let mark = document.getElementById("mark")
                    mark.style.display = 'block'
                    mark.classList.add("p6")
                } else if (this.position[0] == this.position[4] && this.position[4] == this.position[8]){
                    let mark = document.getElementById("mark")
                    mark.style.display = 'block'
                    mark.classList.add("p7")
                } else{
                    let mark = document.getElementById("mark")
                    mark.style.display = 'block'
                    mark.classList.add("p8")
                }
                
                setTimeout(this.win("win"), 3000)
                return false
        } else{
            return true
        }
    },
    win: function(index){
        let win = document.getElementById("screen-win")
            win.style.display = "flex"
            let winText = document.createElement('strong')
        if(this.round == 9 && index != "win"){
            console.log("ess");
            winText.innerText = "Deu Velha"
            win.appendChild(winText)
            
        } else{
            
            winText.innerText = "Jogador " + this.turn + " Venceu!"
            win.appendChild(winText)
            
        }
        this.round = 0
       let square = document.getElementsByClassName("square")
        for(var i of square){
            i.setAttribute("onclick", " ")  
       }
       
    },
    restart: function(){
        let win = document.getElementById("screen-win")
        win.style.display = "none"
        document.querySelector("strong").remove()
        
        let icon = document.getElementsByClassName("fa-5x")
        this.position = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        while(icon[0] != undefined){
            for (let index = 0; index < icon.length; index++) {
            
            icon[index].remove()
            
            }
        }
        
        
        let square = document.getElementsByClassName("square")
        for(var i = 0; i < square.length; i++){
            square[i].setAttribute("onclick", "Game.selectSquare('q"+(i+1)+"')")
            
        }
        document.getElementById("mark").removeAttribute("class")
        
        document.getElementById("mark").style.display = "none"
        
    },
    time: function(ctr = 0){
        let div = document.getElementById("time")
        let time = document.createElement("span")
        let sec = 0, min = 0;
        
        setInterval(function(){
            
            if(sec < 10){
                time.innerText = "Tempo 0" + min + ":0"+ sec
                div.appendChild(time)
                
            } else if( sec < 60){
                time.innerText = "Tempo 0" + min+ ":"+sec
                div.appendChild(time)
            } else{
                sec = 0;
                min++;
                time.innerText = "Tempo 0" + min+ ":0"+sec
                div.appendChild(time)
            }
            sec++;
        }, 1000)

        
        
    }
}
