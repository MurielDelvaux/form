import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import ValidacoesCadastro from '../../contexts/validacoesCadastro';
import useErros from '../../hooks/useErros';


function DadosPessoais({aoEnviar}) {
    const [nome, setNome]=useState('')
    const [sobrenome, setSobrenome]=useState('')
    const [cpf, setCpf]=useState('')
    const [promocoes, setPromocoes]=useState(true)
    const [novidades, setNovidades]=useState(true)
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar]=useErros(validacoes);

    return(
        <>
            <form onSubmit={(event)=>{
                event.preventDefault();
                if(possoEnviar()){
                    aoEnviar({Pessoais:{nome,sobrenome,cpf,promocoes,novidades}})
                }
               }}>
                <TextField id='nome'
                    name='nome' 
                    label='Nome' 
                    variant='outlined' 
                    fullWidth 
                    margin='normal' 
                    value={nome} 
                    onChange={event=>{
                    /*  let tmpNome = event.target.value
                        if(tmpNome.length>=3){
                        tmpNome=tmpNome.substring(0,3)
                        }
                        setNome(tmpNome) */
                        setNome(event.target.value)
                    }}
                    onBlur={validarCampos}
                    error={!erros.nome.valido}
                    helperText={erros.nome.texto}
                />
                <TextField 
                    name= 'sobrenome'
                    id='sobrenome'
                    label='Sobrenome'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    value={sobrenome}
                    onChange={event=> setSobrenome(event.target.value)}
                    onBlur={validarCampos}
                    error={!erros.sobrenome.valido}
                    helperText={erros.sobrenome.texto}
                />
                <TextField 
                    name='cpf'
                    id='CPF'
                    label='CPF'
                    variant='outlined'
                    fullWidth
                    error={!erros.cpf.valido}
                    helperText={erros.cpf.texto}
                    margin='normal'
                    onBlur={validarCampos}
                    value={cpf}
                    onChange={event => setCpf(event.target.value)}
                />
                <FormControlLabel label="Promoções" control={
                    <Switch 
                    name='promocoes'
                    checked={promocoes}
                    onChange={event=>setPromocoes(event.target.checked)}
                    color='primary'
                    />
                }
                />
                <FormControlLabel label="Novidades" control={
                    <Switch 
                    name='novidades'
                    checked={novidades}
                    onChange={event=>setNovidades(event.target.checked)}
                    color='primary'
                    />
                }
                />
                        
               
                <Button variant='contained' color='primary' type='submit'>Próximo</Button>
            </form>
        </>
    )
}

export default DadosPessoais;