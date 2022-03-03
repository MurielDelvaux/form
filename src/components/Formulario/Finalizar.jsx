import { Typography } from "@material-ui/core";
import { CheckCircle } from "@mui/icons-material";
import React from "react";

function Finalizar(){
    return(
        <>
            <div style={{display:'flex', justifyContent:'center'}}>
                <CheckCircle style={{color:'#2aaa2a', fontSize:'2em'}}/>
                <Typography variant='h5'>Obrigada pelo Cadastro!</Typography>
            </div>
           
        </>

    )
}

export default Finalizar;