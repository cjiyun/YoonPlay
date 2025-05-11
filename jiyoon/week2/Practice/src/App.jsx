import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두를 만들어보기' },
    { id: 2, task: '지윤' },
  ]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    if (text.trim().length === 0) {
      alert('할 일을 입력해주세요.');
      return;
    }
    setTodos((prev) => [
      ...prev, 
      { id: Math.floor(Math.random()*100) + 2, task: text },
    ])
    setText('');
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, task: text} : todo))
    setEditingId('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit' onClick={addTodo}>할 일 등록</button>
      </form>
      <div>
        {todos.map(({id, task}, _) => (
          <div key={id} style={{ display: 'flex', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '5px' }}>
              <p>{id}.</p>
              {editingId !== id ? (
                <p>{task}</p>
              ) : (
                <input 
                  type='text'
                  placeholder={task} 
                  onChange={(e) => setEditText(e.target.value)} 
                />
              )}
            </div>
            <button type='submit' onClick={() => deleteTodo(id)}>삭제하기</button>
            {editingId !== id ? (
              <button type='submit' onClick={() => setEditingId(id)}>수정 진행</button>
            ) : (
              <button type='submit' onClick={() => updateTodo(editingId, editText)}>수정 완료</button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;