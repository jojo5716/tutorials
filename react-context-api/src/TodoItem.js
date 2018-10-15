import React from 'react';

import { ToDoContext } from './contexts/';


class TodoItem extends React.PureComponent {
    render() {
        return (
            <ul>
                <ToDoContext.Consumer>
                    {
                        ({ list, deleteCallback }) =>
                            list.map((item, key) =>
                                <li key={key}>
                                    {item}
                                    <button onClick={deleteCallback.bind(this, key)}>Delete</button>
                                </li>
                            )

                    }
                </ToDoContext.Consumer>
            </ul>
        );
    }
}

export default TodoItem;
