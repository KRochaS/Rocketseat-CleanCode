import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
// import { Input } from './components/Input.old';

// Input Pattern Composição

import * as Input from './components/Input';

export function App() {
    const [todos, setTodo] = useState<string[]>([]);

    // const currentYear = new Date().getFullYear();

    useEffect(() => {
        // carregar uma lista de to-dos do back-end
    }, [])

    function HandleCreateNewTodo() {

    }

    const isTodoListEmpty = todos.length === 0;

    return (
        <div>
            {/* <header>
                <h1>My new revolation to-do list app!</h1>

                <button onClick={() => {}}> Add new Todo</button>
            </header> */}

            <Header onCreateNewTodo={HandleCreateNewTodo}/>

            {/* <Input 
                label="Nome"
                errorMessage="Digite seu nome corretamente"
                icon={<div/>}
            /> */}

            <Input.Root>
                <Input.Label />
                <Input.FormField />
                <Input.Icon>
                    <span />
                </Input.Icon>
                <Input.ErrorMessage message="Digite seu Nome corretamente" />
            </Input.Root>

            <main>
                <h2> Advantages</h2>

                <section>
                    <div>
                        <h3> Blazing fast</h3>
                        <p> This to-do list app insanely fast.</p>
                    </div>

                    <div>
                        <h3>No CSS</h3>
                        <p> Clean and flat design with no CSS.</p>
                    </div>
                </section>

                <ul>
                    {todos.map(todo => <li key={todo}> {todo} </li>)}
                </ul>

                {/* Condicionais no render */}


                {/* Evitar fazer condicionais dentro do HTML */}
                {todos.length === 0 && (
                    <p> 
                        Nenhum todo cadastrado.
                    </p>
                )}


                {/* Utilizar variável de verificação */}
                {isTodoListEmpty && (
                    <p> 
                        Nenhum todo cadastrado.
                    </p>
                )}
            </main>

            {/* <footer>
                Copyright &copy; Rocketseat {currentYear}
            </footer> */}

            <Footer />
        </div>
    )
}