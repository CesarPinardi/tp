alert("Este script foi feito sem o arquivo index, precisa refazer")

function limpa() {
  if (confirm("Deseja realmente limpar?") == true) {
    document.form1.reset();
  }
}

function validar() {
  //aqui os campos que vem do index;
  var nome;
  var estadoCivil;
  var objetivo;         

  nome = document.form1.nome.value;

  var s_nome = new String(nome); //transforma em string para pegar a propriedade length

  if (s_nome.length < 4) {
    //caso o nome tenha menos de 3 letras...
    alert("Nome deve ter mais de 3 letras!");
    document.form1.nome.value = "";
    s_nome = document.form1.nome.value;

  } else {
    //caso nome > 4 letras -> passa para letra maiuscula
    s_nome = s_nome.toUpperCase();
    //transforma o campo para letras maiusculas
    document.form1.nome.value = s_nome;

    estadoCivil = document.form1.estadoCivil.value;
    
    if(estadoCivil == ""){
      //colocar a tag <span id="erro" style="color: red"></span>
      document.getElementById("erro").innerHTML = "Selecione um estado civil válido!"
      
    } else{
      document.getElementById("erro").innerHTML = ""; //limpa a tag span

      objetivo = document.getElementById("obj").value;
      //transforma em string...
      var s_obj = new String(objetivo);
      //transforma a string em miniscula...
      s_obj = s_obj.toLowerCase();
      //joga a string de volta no campo...
      document.form1.obj.value = s_obj;

      //retirar required do campo
      //caso um deles nao esteja preenchido...
      if((document.form1.telefone.value == "") && (document.form1.email.value == "")){
        alert("Preencha telefone ou email");        
      }
      else{

      }

    }



  }

}
