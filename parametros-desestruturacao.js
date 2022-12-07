// PARAMETROS E DESESTRUTURAÇÃO

// Rota para criação do usuário (name, email, password)

// Controller (name, email, password)

// Repository (name, email, password)


function createUserRoute(body) {
// validações

createUserController(body);
}

function createUserController(data) {
    userRepository.create(data);
}

function userRepository = {
    create(data) {
        // criar usuário (name, email,  password)
    }
}

// Usando desestruturação

function createUserRoute(body) {
    const {name, email, password} = body;
    
    createUserController({name, email, password});
}


// Utilize parametros nomeados

createUserRoute(body, params);

createUserRoute({
    body: {name, email, password},
    params: {id: 1}
});

createUserRoute({
    params: {id: 1}
})