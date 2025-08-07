import '../css/Button.css'

function Button({id, todos, setTodos, text, setText, setEditingId, editText, setEditText, action, children}) {

  const addTodo = () => {
    if (!text.trim()) {
      alert('할 일을 입력해주세요.');
      return;
    }
    setTodos((prev) => [
      ...prev, 
      { id: Math.floor(Math.random()*100) + 2, task: text },
    ])
    setText('');
  };

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editMode = () => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, isEditing: true} : todo))
  }

  const updateTodo = () => {
    const newTask = editText.trim() ? editText : todos.find(todo => todo.id === id).task;
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, task: newTask, isEditing: false} : todo));
    setEditText('');
    setEditingId('');
  };

  let handleClick;
  switch (action) {
    case 'add': handleClick = addTodo; break;
    case 'delete': handleClick = deleteTodo; break;
    case 'edit': handleClick = editMode; break;
    case 'update': handleClick = updateTodo; break;
  }

  return (
    <button type="submit" onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button;