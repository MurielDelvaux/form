import React from "react";

const ValidacoesCadastro= React.createContext({
    cpf:semValidacao,
    senha: semValidacao,
    nome:semValidacao,
    sobrenome:semValidacao,
    cep:semValidacao
});

function semValidacao(dados){
    console.log('dados-->',dados)
    return {valido:true, texto:''}
}
export default ValidacoesCadastro;