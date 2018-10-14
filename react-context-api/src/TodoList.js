import React from 'react';


const ToDoContext = React.createContext();


class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
    }

    render() {
        return (
            <ToDoContext.Provider value={{ list: this.state.list }}>
                <div id="myDIV" class="header">
                    <h2>Lista de cosas</h2>
                    <input type="text" id="myInput" placeholder="Título..." />
                    <span onclick="newElement()" class="addBtn">Agregar</span>
                </div>

                {this.props.children}
            </ToDoContext.Provider>
        );
    }
}

export default TodoList;
