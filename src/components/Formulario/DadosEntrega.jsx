import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosEntrega({aoEnviar}){
    const [cep,setCep]=useState('')
    const [endereco,setEndereco]=useState('')
    const [numero,setNumero]=useState('')
    const [estado,setEstado]=useState('')
    const [cidade,setCidade]=useState('')
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos,possoEnviar]=useErros(validacoes);
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            if(possoEnviar()){
            aoEnviar({Entrega:{cep,endereco,numero,estado,cidade}})
            }
        }}>
            <TextField 
                name='cep'
                value={cep}
                onChange={(e)=>setCep(e.target.value)}
                id='cep'
                label='CEP'
                variant='outlined'
                type='text'
                required
                margin='normal'
                onBlur={validarCampos}
                error={!erros.cep.valido}
                helperText={erros.cep.texto}

            />
            <TextField 
                name= 'endereco'
                value={endereco}
                onChange={(e)=>setEndereco(e.target.value)}
                id='endereco'
                label='Endereço'
                type='text'
                variant='outlined'
                margin='normal'
                fullWidth
            />
            <TextField 
                name='numero'
                value={numero}
                onChange={(e)=>setNumero(e.target.value)}
                id='numero'
                label='Numero'
                type='number'
                variant='outlined'
                margin='normal'
            />
            <TextField 
                name='estado'
                value={estado}
                onChange={(e)=>setEstado(e.target.value)}
                id='estado'
                label='Estado'
                type='text'
                variant='outlined'
                margin='normal'
                   
            />
            <TextField 
                name='cidade'
                value={cidade}
                onChange={(e)=>setCidade(e.target.value)}
                id='cidade'
                label='Cidade'
                type='text'
                variant='outlined'
                margin='normal'
                   
            />
            <Button variant='contained' color='primary' type='submit' fullWidth>Finalizar Cadastro</Button>
        </form>
    )

}

export default DadosEntrega;