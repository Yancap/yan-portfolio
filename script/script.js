let sendMessager = {
  messager: {}
};

let btn = document.querySelector("#send");
btn.addEventListener("click", function(busca){
  busca.preventDefault();
  let message = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let name = document.getElementById("messager").value;
  let data = {
    "email": email,
    "nome": name,
    "mensagem": message
  };
  sendMessager.messager = data;
  console.log(sendMessager.messager);
})




function showSectionScrolled(){
    const sections = document.querySelectorAll(".scroll")
    sections.forEach((section)=>{
        if (!section.classList.value.includes("active-scroll")) {
          
          const topSection = section.getBoundingClientRect().top - (window.innerHeight * 0.6)
          if(topSection < 0){
            if(section == document.getElementById("capacidades")){
              section.classList.add('active-scroll')
              let cards = document.querySelectorAll(".accordion")
              document.querySelector("#capacidades header").style.animation = "show-title 1s forwards"
              
              let i = 1
              cards.forEach((card)=>{

                  card.style.animation = "skill-content 1s " + i*0.2 +"s forwards"
                  card.style.animationDelay
                  console.log("a");
                  i++
                
              })
            }
            if(section == document.getElementById("soft-skills")){
              
            }
          }
        }else{
          
        }
        

    })
}

window.addEventListener('scroll', showSectionScrolled)