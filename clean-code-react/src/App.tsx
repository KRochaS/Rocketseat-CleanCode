import { useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export function App() {
    const [todos, setTodo] = useState<string[]>([]);

    // const currentYear = new Date().getFullYear();

    useEffect(() => {
        // carregar uma lista de to-dos do back-end
    }, [])

    function HandleCreateNewTodo() {

    }

    return (
        <div>
            {/* <header>
                <h1>My new revolation to-do list app!</h1>

                <button onClick={() => {}}> Add new Todo</button>
            </header> */}

            <Header onCreateNewTodo={HandleCreateNewTodo}/>

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
            </main>

            {/* <footer>
                Copyright &copy; Rocketseat {currentYear}
            </footer> */}

            <Footer />
        </div>
    )
}