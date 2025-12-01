import { useState } from 'react';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import StatsPanel from './components/StatsPanel.jsx';
import { INITIAL_STATS, applyCategoryEffects } from './statsConfig';

function App() {
  const [todos, setTodos] = useState([]);
  const [stats, setStats] = useState(INITIAL_STATS);

  const handleAddTodo = ({ label, type, category }) => {
    const newTodo = {
      id: Date.now(), // simple id
      label,
      type,       // 'task' ou 'appointment'
      category,   // ex: 'travail'
      done: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const handleCompleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id && !todo.done) {
          // Met à jour les stats UNE SEULE FOIS quand on coche
          setStats((prevStats) => applyCategoryEffects(prevStats, todo.category));
          return { ...todo, done: true };
        }
        return todo;
      }),
    );
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '1.5rem',
        boxSizing: 'border-box',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      <h1 style={{ marginBottom: '1rem' }}>Daily Balance V0</h1>
      <p style={{ marginBottom: '1.5rem' }}>
        Ajoute tes tâches et rendez-vous, coche-les, et regarde comment tes stats évoluent pour garder une journée équilibrée.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '2rem',
          alignItems: 'flex-start',
        }}
      >
        <section>
          <h2>To-do du jour</h2>
          <TodoForm onAddTodo={handleAddTodo} />
          <TodoList todos={todos} onCompleteTodo={handleCompleteTodo} />
        </section>

        <aside>
          <StatsPanel stats={stats} />
        </aside>
      </div>
    </div>
  );
}

export default App;
