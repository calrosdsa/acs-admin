'use client';
import { Button as ButtonMui } from "@mui/material";

const Button = ({onClick,text,variant}:{
    onClick:()=>void
    text:string
    variant: 'text' | 'outlined' | 'contained'
}) => {
    return(
        <ButtonMui variant={variant} onClick={()=>onClick()}>
       {text}
        </ButtonMui>
    )
}

export default Button;