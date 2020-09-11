import React, { useState } from 'react';

import { api } from '../api';
import { useServerData } from '../state/serverDataContext';
import Button from '@material-ui/core/Button';

const Home = () => {
  const serverTodos = useServerData(data => {
    console.log('data: ', data);
    return data.todos || [];
  });
  const [text, setText] = useState('');
  const [todos, setTodos] = useState(serverTodos);

  return (
    <div>
      <h1>Home page</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>

      <form
        onSubmit={e => {
          e.preventDefault();

          const newTodo = {
            text
          };

          api.todos.create(newTodo).then(res => {
            setTodos([...todos, res]);
            setText('');
          });
        }}
      >
        <label htmlFor="todo">Add a todo</label>
        <br />
        <input
          id="todo"
          type="text"
          value={text}
          autoComplete="off"
          onChange={e => setText(e.target.value)}
        />
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

Home.fetchData = () => {
  return api.launches.launches().then(launches => {
    return {
      launches
    };
  });
};

export default Home;
