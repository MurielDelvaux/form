import { Container, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/Formulario/FormularioCadastro';
import 'fontsource-roboto'
import {validarCep, validarCpf, validarNome, validarSenha, validarSobrenome} from './models/cadastro'
import ValidacoesCadastro from './contexts/validacoesCadastro';
class App extends Component{
  render(){
    return(
      <Container component='article' maxWidth='sm'>
        <Typography variant='h3' component='h1' align='center' >Fomulário de Cadastro</Typography>
        <ValidacoesCadastro.Provider value={{cpf:validarCpf, senha: validarSenha, nome:validarNome, sobrenome:validarSobrenome, cep:validarCep}}>
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
 
}
function aoEnviarForm(dados){
  console.log(dados)
}

export default App;
