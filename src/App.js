import React from 'react';
import './styles.css'

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todoData,
      task: '',
      // id: '',
      // completed: Boolean,
    }
  }

  handleChanges = event => {
    console.log(event.target.name, event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  updateTodoList = event => {

    event.preventDefault();

    const newList = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newList],
      task: '',
    });
  };


  toggleItem = id => {
    console.log(id)
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });

  }


  render() {

    return (
      <div className="app-wrapper">
        <h2 className="todo-title">Todos</h2>
        <TodoList
          todoListProp={this.state.todos}
          toggleItem={this.toggleItem}
        />
        <TodoForm
          task={this.state.task}
          // id={this.state.id}
          // completed={this.state.completed}
          handleChanges={this.handleChanges}
          updateTodoList={this.updateTodoList}
          clearCompleted={this.clearCompleted}
        />
        <button className="clear-todo-btn" onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
