$(document).ready(function(){
    $("#cpf").Mask("000.000.000-00")
    
    $(".signin").click(function(){
        
        // //pegando os dados dos campos
        
        
        let cpf = $("#cpf").val();
        let usuario = $("#usuario").val();
        let senha = $("#senha").val();

        if(nome.trim() == "" || usuario.trim() == "" || senha == ""){
            alert("Favor preencher todos os campos");
        } else {
            $(".mensagem").text("Dados prontos para cadastrar!!");

            
        }
    });
});