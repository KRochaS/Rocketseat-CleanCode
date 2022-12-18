
// Forma tradicional de injetar dependências

import {createUserOnDatabase} from 'db';

function createdUser() {
    createUserOnDatabase();
}


// Utilizando o princípio DIP - Dependency Inversion Principle

function createdUserWithDIP(
    createdUserOnDatabase: () => void
) {
    // a função receberia por parametro invés de fazer o import e 
    // após chamaria a função
    createdUserOnDatabase();
}


import {createUserOnDatabaseDIP} from 'db';

// Ao chamar a função necessita passar como parâmetro as dependencias 
createdUserWithDIP(createUserOnDatabaseDIP);