interface HeaderProps {
    onCreateNewTodo: () => void;
}


export function Header({onCreateNewTodo}: HeaderProps) {

    // deixa de ser um componente puro.
    // function createTodo() {
    //     // chamada para API
    // }

    return (
        <header>
        <h1>My new revolation to-do list app!</h1>

        <button onClick={onCreateNewTodo}> Add new Todo</button>
    </header>
    )
}