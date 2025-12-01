import { useState } from 'react';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import StatsPanel from './components/StatsPanel.jsx';
import CuteIllustration from './components/CuteIllustration.jsx';
import { INITIAL_STATS, applyCategoryEffects } from './statsConfig';

import cardTodo from './assets/card-todo.svg';
import cardStats from './assets/card-stats.svg';

function App() {
  const [todos, setTodos] = useState([]);
  const [stats, setStats] = useState(INITIAL_STATS);

  const handleAddTodo = ({ label, type, category }) => {
    const newTodo = {
      id: Date.now(),
      label,
      type,
      category,
      done: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const handleCompleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id && !todo.done) {
          setStats((prevStats) => applyCategoryEffects(prevStats, todo.category));
          return { ...todo, done: true };
        }
        return todo;
      }),
    );
  };

  return (
    <div className="app-root">
      <div className="app-shell">
        {/* Header */}
      <header className="app-header">
        <div className="app-header-layout">
          <div>
            <div className="app-badge">
              <span> Mimio &amp; Popi veillent sur ta journée</span>
            </div>
            <h1 className="app-title">Daily Balance</h1>
            <p className="app-subtitle">
              Ajoute tes tâches et rendez-vous, coche-les, et laisse le tableau de bord
              t&apos;indiquer si ta journée tire trop sur le stress, la fatigue ou la joie.
            </p>
          </div>
          <CuteIllustration />
        </div>
      </header>

        {/* Grille principale */}
        <main className="app-grid">
          {/* Colonne gauche : To-do */}
<section className="card card--todo">
  <img src={cardTodo} alt="" aria-hidden="true" className="card-bg" />
  <div className="card-inner">
    <div className="card-header">
      <h2 className="card-title">To-do du jour</h2>
      <span className="card-tag">routines & rendez-vous</span>
    </div>

    <TodoForm onAddTodo={handleAddTodo} />
    <TodoList todos={todos} onCompleteTodo={handleCompleteTodo} />
  </div>
</section>

{/* Colonne droite : Stats */}
<aside className="card card--stats">
    <img src={cardStats} alt="" aria-hidden="true" className="card-bg" />
  <div className="card-inner">
    <div className="card-header">
      <h2 className="card-title">Stats de la journée</h2>
      <span className="card-tag">équilibre global</span>
    </div>

    <StatsPanel stats={stats} />

    <p className="app-balance-note">
      Astuce : Pour éviter de te surmener, pense à intégrer des moments de self-care
      et des petits plaisirs pour mieux équilibrer ta journée. Bonne journée !
    </p>
  </div>
</aside>
        </main>
      </div>
    </div>
  );
}

export default App;
