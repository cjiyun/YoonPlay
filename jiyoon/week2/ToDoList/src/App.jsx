import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두를 만들어보기', isEditing: false },
    { id: 2, task: '지윤', isEditing: false },
  ]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='header'>
        <h1 className='title'>Todo List</h1>
      </div>
      <div className='main'>
        <form onSubmit={handleSubmit} className='todo-form'>
          <Input
            value={text}
            placeholder='할 일'
            onChange={(e) => setText(e.target.value)}
          />
          <Button 
            setTodos={setTodos} 
            text={text} 
            setText={setText}
            action='add'
          >
            할 일 등록
          </Button>
        </form>
        <div className='todo-list'>
          {todos.map(({id, task, isEditing}, _) => (
            <div key={id} className='todo'>
              <div className='todo-text'>
                <p className='num'>{id}.</p>
                {editingId !== id && !isEditing ? (
                  <p className='task'>{task}</p>
                ) : (
                  <Input 
                    type='text'
                    placeholder={task} 
                    onChange={(e) => setEditText(e.target.value)} 
                  />
                )}
              </div>
              <Button 
                id={id} 
                setTodos={setTodos} 
                action='delete' 
              >
                삭제하기
              </Button>
              {editingId !== id && !isEditing ? (
                <Button 
                  id={id} 
                  setTodos={setTodos}
                  setEditingId={setEditingId} 
                  action='edit' 
                >
                  수정 진행
                </Button>
              ) : (
                <Button 
                  id={id} 
                  todos={todos}
                  setTodos={setTodos} 
                  setEditingId={setEditingId} 
                  editText={editText} 
                  setEditText={setEditText}
                  action='update' 
                >
                  수정 완료
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;