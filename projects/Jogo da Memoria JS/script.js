

let game = {
            
            arrayVerify: [],
            dataGame: [],
            clickCard: function (){
                if(this.classList[1] != "flip"){
                    this.classList.add("flip")
                    for(i of document.getElementsByClassName("card")){
                        i.onclick = game.awaitCard
                    }
                    
                    game.saveCard(this)
                    

                }                    
            },

            awaitCard: function(){
                
                if(this.classList[1] != "flip"){
                    this.classList.add("flip")
                    
                    game.saveCard(this)
                    game.verify()
                } 
            },
            saveCard: function(card){
                game.arrayVerify.push(card.dataset.info)
                
            },
            
            verify: function() {
                console.log(game.arrayVerify);
                if (game.arrayVerify[0] == game.arrayVerify[1]) {
                    game.dataGame.push(game.arrayVerify.slice())
                    
                    for(i of document.getElementsByClassName("card")){
                        
                        if(i.dataset.info != game.arrayVerify[0] && i.dataset.info != "turn" ){
                            i.classList.remove("flip")
                            i.onclick = game.clickCard
                            
                        } else{
                            i.dataset.info = "turn"
                        }
                    }
                    game.arrayVerify = []
                    game.reset()
                } else{
                    setTimeout(function () {
                        for(i of document.getElementsByClassName("card")){
                            console.log(i);
                            if(i.dataset.info != "turn" ){
                                i.classList.remove("flip")
                                i.onclick = game.clickCard
                            }
                            game.arrayVerify = [] 
                        }
                    }, 500)
                }

            },
            shuffle: function(){
                function inArray(string, vetor){
                    for(var i = 0; i < vetor.length; i++){
                        if(string == vetor[i]){
                            return true
                        }
                    }
                    return false
                }  
                let cards = document.getElementsByClassName("card")
                let randomControl = []
                for(var card of cards){
                    random = Math.floor(Math.random() * (21 - 1) + 1);
                    while(inArray(random, randomControl)){
                        random = Math.floor(Math.random() * (21 - 1) + 1);
                    }
                    randomControl.push(random)
                    card.setAttribute('style', "order:"+random+';')
                }
                

            },
            reset: function () {
                if(this.dataGame.length == 10){
                    let reset = document.querySelector('.message-win')
                    reset.style.display = 'flex'
                }
            }
}

let c1 = document.getElementById("c1").onclick = game.clickCard
let c2 = document.getElementById("c2").onclick = game.clickCard
let c3 = document.getElementById("c3").onclick = game.clickCard
let c4 = document.getElementById("c4").onclick = game.clickCard
let c5 = document.getElementById("c5").onclick = game.clickCard
let c6 = document.getElementById("c6").onclick = game.clickCard
let c7 = document.getElementById("c7").onclick = game.clickCard
let c8 = document.getElementById("c8").onclick = game.clickCard
let c9 = document.getElementById("c9").onclick = game.clickCard
let c10 = document.getElementById("c10").onclick = game.clickCard
let c11 = document.getElementById("c11").onclick = game.clickCard
let c12 = document.getElementById("c12").onclick = game.clickCard
let c13 = document.getElementById("c13").onclick = game.clickCard
let c14 = document.getElementById("c14").onclick = game.clickCard
let c15 = document.getElementById("c15").onclick = game.clickCard
let c16 = document.getElementById("c16").onclick = game.clickCard
let c17 = document.getElementById("c17").onclick = game.clickCard
let c18 = document.getElementById("c18").onclick = game.clickCard
let c19 = document.getElementById("c19").onclick = game.clickCard
let c20 = document.getElementById("c20").onclick = game.clickCard
let index = document.getElementsByClassName("front")
// for(var i of index){
//     i.onmouseover = game.saveCard
// }