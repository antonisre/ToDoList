import * as React from 'react';

function reducer(state, action) {
  switch(action.type) {
    case "add-todo":
      return { 
        todos: [...state.todos, {text: action.text, completed: false }]
      };
    case "todo-done":
      return { 
        todos: state.todos.map((todo,index) =>
          index == todo.index ? { ...todo, completed: !todo.completed} : todo
        )
      };
    default:
      return state;
  }
}

const ToDoList = () => {
  const [{todos}, dispatch] = React.useReducer(reducer, { todos: [] });
  const [text, setText] = React.useState();
  const [numberOfItems, setnumberOfItems] = React.useState(0);

  return (<div id="container">
    <form onSubmit={e => {
      e.preventDefault();
      dispatch({type: 'add-todo', text });
      setText("");
      setnumberOfItems(() => numberOfItems + 1);
    }}>
    <input value={text} onChange={e => setText(e.target.value)} placeholder="Insert new task!"/>
    </form>
    <h3>Things to do: {numberOfItems}</h3>
    <ol>
  {todos.map((todo, index) => 
    <li onClick={ (e) => {
      () => dispatch({type:"todo-done", index});
      const target = e.target as HTMLTextAreaElement;
      target.classList.toggle('done_item');

      target.className == 'done_item' ? setnumberOfItems(() => numberOfItems - 1) : setnumberOfItems(() => numberOfItems + 1); //
    }}>
      {todo.text}
    </li>
  )}
    </ol>
  </div>
  );
}

export default ToDoList;