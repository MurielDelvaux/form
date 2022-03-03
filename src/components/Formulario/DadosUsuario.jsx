import { Button, TextField } from "@material-ui/core";
import React, {useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({aoEnviar}){
    const [email, setEmail]= useState("")
    const [senha, setSenha]= useState("")
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos,possoEnviar]=useErros(validacoes);

    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({Usuario:{email,senha}})
            }
        }}>
            <TextField
                name='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                id='email'
                label='Email'
                type='email'
                variant='outlined'
                fullWidth 
                required
                margin='normal'
            />
            <TextField
                value={senha}
                onChange={(e)=>setSenha(e.target.value)}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id='senha'
                label='Senha'
                type='password'
                variant='outlined'
                fullWidth 
                required
                name="senha"
                margin='normal'
            />
            <Button variant='contained' color='primary' type='submit'>Próximo</Button>
        </form>
    )
}

export default DadosUsuario;