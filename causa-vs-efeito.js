function Button() {
    const isButtonDisabled = true;

    return (
        <button disabled={isButtonDisabled}> 
            <span> 

            </span>
            {isButtonDisabled ? 'Carregando' : 'Enviar'}
        </button>
    )
}

// variável isButtonDisabled foi criada apartir do
// efeito que ela irá ter na interface
// as variáveis deve ser criadas sempre pelo motivo
// a causa, e não do efeito.

function Button() {
    const isFormSubmitting = true;

    return (
        <button disabled={isFormSubmitting}> 
            <span> 

            </span>
            {isFormSubmitting ? 'Carregando' : 'Enviar'}
        </button>
    )
}