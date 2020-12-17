import React, { useState } from 'react';
import ToDoList from './ToDoList';
import ListContainer from './ListContainer';
import Form from './Form';

let count = 3;

const App = () => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {
      id: 1,
      text: 'There is no passion, there is serenity.'
    },
    {
      id: 2,
      text: 'There is no chaos, there is harmony.'
    }
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    setItems([...items, {id: count, text: value}])
    setValue('')
    count++;
  };

  return (
    <main className="container">
      <section className="row justify-content-center mt-3">
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </section>
      <section className="row justify-content-center mt-2">
        <ListContainer items={items} />
      </section>
      <hr />
      <section className="row justify-content-center">
        <ToDoList />
      </section>
    </main>
  );
}

export default App;