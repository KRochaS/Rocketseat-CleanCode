// Composição vs Customização



// Padrão de configuração
// possíveis configurações do componente
// label, icon, error 
import { ReactNode } from "react";

interface InputProps {
    label?: string;
    leftIcon?: ReactNode;
    icon?: ReactNode;
    errorMessage?: string;
}

export function Input({label, icon = null, leftIcon = null, errorMessage}: InputProps) {
    return (
        <div>
            {label ? <label>{label}</label> : null}
            {leftIcon}
            <input type="text"/>
            {icon}

            {errorMessage ? <p> {errorMessage}</p> : null}
        </div>
    )
}