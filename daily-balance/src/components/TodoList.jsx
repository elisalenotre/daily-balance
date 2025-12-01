export default function TodoList({ todos, onCompleteTodo }) {
  const appointments = todos.filter((t) => t.type === 'appointment');
  const tasks = todos.filter((t) => t.type === 'task');

  return (
    <div className="todo-section">
      <section>
        <h3 className="todo-section-title">Rendez-vous</h3>
        {appointments.length === 0 && (
          <p className="todo-empty">Aucun rendez-vous pour l’instant.</p>
        )}
        <ul className="todo-list">
          {appointments.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onCompleteTodo={onCompleteTodo} />
          ))}
        </ul>
      </section>

      <section style={{ marginTop: '1rem' }}>
        <h3 className="todo-section-title">Tâches</h3>
        {tasks.length === 0 && (
          <p className="todo-empty">Aucune tâche pour l’instant.</p>
        )}
        <ul className="todo-list">
          {tasks.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onCompleteTodo={onCompleteTodo} />
          ))}
        </ul>
      </section>
    </div>
  );
}

function TodoItem({ todo, onCompleteTodo }) {
  const handleChange = () => {
    if (!todo.done) {
      onCompleteTodo(todo.id);
    }
  };

  return (
    <li className="todo-item">
      <label
        className={
          'todo-item-label' + (todo.done ? ' done' : '')
        }
      >
        <input
          type="checkbox"
          checked={todo.done}
          onChange={handleChange}
          disabled={todo.done}
        />
        <span>{todo.label}</span>
        <span className="todo-item-category">{todo.category}</span>
      </label>
    </li>
  );
}
