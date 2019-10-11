// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

function TodoList(props) {

    return (
        <div className="todo-list-wrapper">
            {props.todoListProp.map((todoTask, index) => (
                <Todo todoProp={todoTask} key={index} toggleItem={props.toggleItem} />
            ))}

            {/* //{todoTask.id} */}
        </div>

    )
}
export default TodoList;