import React from 'react';

function TodoForm(props) {

    return (
        <form onSubmit={props.updateTodoList}>
            <div className="form-wrapper">
                <input
                    type="text"
                    value={props.task}
                    name="task"
                    placeholder="Task"
                    onChange={props.handleChanges}
                    required
                />
                <button type="submit" className="add-todo-btn"><i className="fa fa-plus"></i></button>
            </div>
        </form>

    )
}

export default TodoForm;

