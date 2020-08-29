/*
os comandos console.log são apenas para controle e
não fazem diferença no corpo do código 
*/

function limpa() {
  if (confirm("Deseja realmente limpar?") == true) {
    document.form1.reset();
  }
}

function validarFormulario() {
  var nome;
  var estadoCivil;
  var objetivo;
  var checkBox = document.getElementsByName("itemCheck");
  var count = 0;

  nome = document.form1.nome.value;

  var s_nome = new String(nome); 
  //transforma em string para pegar a propriedade length

  if (s_nome.length < 4) {
    //caso o nome tenha menos de 3 letras...
    alert("Nome deve ter mais de 3 letras!");
    document.form1.nome.value = "";
    document.form1.nome.focus();
    /*
    .focus() foi usado apenas para indicar ao usuário
    onde o erro ocorreu e se repete ao longo do codigo
    */
    s_nome = document.form1.nome.value;
  } else {
    //caso nome > 4 letras -> passa para letra maiuscula
    s_nome = s_nome.toUpperCase();
    //transforma o campo para letras maiusculas
    document.form1.nome.value = s_nome;
    console.log("Nome OK!");

    estadoCivil = document.form1.estadoCivil.value;

    if (estadoCivil == "") {
      //altera a tag <span>
      document.getElementById("erro").innerHTML =
        "Selecione um estado civil válido!";
      document.form1.estadoCivil.focus();
    } else {
      document.getElementById("erro").innerHTML = ""; 
      //limpa a tag span
      console.log("Estado civil OK!");

      objetivo = document.getElementById("obj").value;
      //transforma em string...
      var s_obj = new String(objetivo);
      //transforma a string em miniscula...
      s_obj = s_obj.toLowerCase();
      //joga a string de volta no campo...
      document.form1.obj.value = s_obj;

      //caso um deles nao esteja preenchido...
      if (
        document.form1.telefone.value == "" &&
        document.form1.email.value == ""
      ) {
        alert("Preencha telefone ou email");
        document.form1.telefone.focus();
      } else {
        console.log("Tel/Email OK");
        //caso um deles nao esteja preenchido...
        if (document.form1.eng.value == "" && document.form1.esp.value == "") {
          alert("Preencha um nível de idioma");
          document.form1.eng.focus();
        } else {
          console.log("Idioma OK!");

          //validar checkbox

          for (let i = 0; i < checkBox.length; i++) {
            if (checkBox[i].checked == false) {
                console.log(checkBox.length);
              count++;
              if (count == 7) {
                //7 opcoes -> nenhuma delas preenchida
                if (confirm("Enviar sem Linguagem de Programção?") == true) {
                  console.log("Sem nenhuma linguagem");
                } else {
                  console.log("Linguagem selecionada");
                  return;
                }
              }
            }
          }
        }
      }
    }
  }
}

function enviar() {
  //se a funcao nao retornar erro
    if (validarFormulario()) {
      document.form1.submit();
      alert("O cadastro foi concluido!");
    
  }
}
