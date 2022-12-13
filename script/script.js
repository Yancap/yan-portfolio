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


