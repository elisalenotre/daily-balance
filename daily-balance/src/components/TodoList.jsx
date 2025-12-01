export default function TodoList({ todos, onCompleteTodo }) {
  const appointments = todos.filter((t) => t.type === 'appointment');
  const tasks = todos.filter((t) => t.type === 'task');

  return (
    <div>
      <section style={{ marginBottom: '1.5rem' }}>
        <h3>Rendez-vous</h3>
        {appointments.length === 0 && <p>Aucun rendez-vous pour l’instant.</p>}
        <ul>
          {appointments.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onCompleteTodo={onCompleteTodo} />
          ))}
        </ul>
      </section>

      <section>
        <h3>Tâches</h3>
        {tasks.length === 0 && <p>Aucune tâche pour l’instant.</p>}
        <ul>
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
    // On ne permet pas de décocher pour ne pas "retirer" les stats
  };

  return (
    <li style={{ marginBottom: '0.25rem' }}>
      <label style={{ opacity: todo.done ? 0.6 : 1 }}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={handleChange}
          disabled={todo.done}
          style={{ marginRight: '0.5rem' }}
        />
        {todo.label}{' '}
        <span style={{ fontSize: '0.85rem', color: '#666' }}>
          ({todo.category})
        </span>
      </label>
    </li>
  );
}
