function validarCpf(cpf){
    if(cpf.length !==11){
      return {valido:false, texto:"CPF deve ter 11 dígitos."}
    }else{
      return {valido:true, texto:""}
    }
}
function validarSenha(senha){
    if(senha.length<4 || senha.length>72){
      return {valido:false, texto:"Senha deve ter entre 4 e 72 dígitos."}
    }else{
      return {valido:true, texto:""}
    }
}
function validarNome(nome){
    if(nome.length<4 || nome.length>72){
      return {valido:false, texto:"Nome deve ter entre 4 e 72 dígitos."}
    }else{
      return {valido:true, texto:""}
    }
}
function validarSobrenome(sobrenome){
    if(sobrenome.length<4 || sobrenome.length>72){
      return {valido:false, texto:"Sobrenome deve ter entre 4 e 72 dígitos."}
    }else{
      return {valido:true, texto:""}
    }
}
function validarCep(cep){
    if(cep.length !==8){
        return {valido:false, texto:"CEP deve ter 8 dígitos."}
      }else{
        return {valido:true, texto:""}
      }
}

export {validarCpf,validarSenha, validarNome, validarSobrenome, validarCep}
  