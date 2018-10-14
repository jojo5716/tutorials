import React from 'react';
import TodoList from './TodoList';

import logo from './logo.svg';
import './App.css';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Ejemplo básico del uso de React Context API
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org/docs/context.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        Documentación oficial
                    </a>
                </header>
                <TodoList/>
            </div>
        );
    }
}

export default App;
