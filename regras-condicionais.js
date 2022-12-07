// NEGAÇÃO DENTRO DE IFs

// Evite negações

const isUserOlderThan18Years = true;
const isUserLiveOnBrazil = true;

if(!isUserOlderThan18Years && !isUserLiveOnBrazil) {

}

// Sem negação


const isUserYoungerThan18Years = true;
const doesUserLivesOutsideBrazil = true;

if(isUserYoungerThan18Years && doesUserLivesOutsideBrazil) {

}

// EARLY RETURN VS ELSE


// Com else
function isUserOlderThan18Years(user) {
    if(!user) {
        return {error: true}
    } else {
        return user.age >= 18;
    }
}

// com early return

function isUserOlderThan18Years(user) {
    if(!user) {
        return {error: true}
    }
    return user.age >= 18;
    
}

// Evite condicionais aninhadas (uma condicionl dentro de outra)