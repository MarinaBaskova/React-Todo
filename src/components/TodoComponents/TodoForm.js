import React from 'react';

function TodoForm(props) {

    return (
        <form>
            <div className="form-wrapper">
                <input
                    type="text"
                    value={props.task}
                    name="task"
                    placeholder="Task"
                    onChange={props.handleChanges}

                />
                <button className="add-todo-btn" onClick={props.updateTodoList}><i class="fa fa-plus"></i></button>
            </div>
        </form>

    )
}

export default TodoForm;

