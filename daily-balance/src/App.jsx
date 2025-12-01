import { useState } from 'react';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import StatsPanel from './components/StatsPanel.jsx';
import CuteIllustration from './components/CuteIllustration.jsx';
import MimioPopiRoom from './components/MimioPopiRoom.jsx';
import { INITIAL_STATS, applyCategoryEffects } from './statsConfig';

import cardTodo from './assets/card-todo.svg';
import cardStats from './assets/card-stats.svg';
import defaultMusic from './assets/bg-music.mp3';

import BackgroundMusic from './components/BackgroundMusic';

function App() {
  const [todos, setTodos] = useState([]);
  const [stats, setStats] = useState(INITIAL_STATS);
  const [activePage, setActivePage] = useState('daily');
  const [musicSrc, setMusicSrc] = useState(defaultMusic);
  const [musicLabel, setMusicLabel] = useState('chocolate milk – yawn');

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
    setTodos((prevTodos) => {
      let completedTodo = null;

      const updated = prevTodos.map((todo) => {
        if (todo.id === id && !todo.done) {
          completedTodo = { ...todo, done: true };
          return completedTodo;
        }
        return todo;
      });

      if (completedTodo) {
        setStats((prevStats) => applyCategoryEffects(prevStats, completedTodo.category));
      }

      return updated;
    });
  };

  function handleDeleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <BackgroundMusic src={musicSrc} />
      <div className="app-root">
        <div className="app-shell">
          <header className="app-header">
            <div className="app-badge">
              <span>Mimio &amp; Popi daily</span>
            </div>

            <h1 className="app-title">Daily Balance</h1>
            <p className="app-subtitle">
              Ajoute tes tâches et rendez-vous, coche-les, et laisse le tableau de bord
              t&apos;indiquer si ta journée tire trop sur le stress, la fatigue ou la joie.
            </p>

            <nav className="app-tabs">
              <button
                type="button"
                className={`app-tab ${activePage === 'daily' ? 'is-active' : ''}`}
                onClick={() => setActivePage('daily')}
              >
                Journal de la journée
              </button>
              <button
                type="button"
                className={`app-tab ${activePage === 'room' ? 'is-active' : ''}`}
                onClick={() => setActivePage('room')}
              >
                Mimio &amp; Popi&apos;s room
              </button>
            </nav>
          </header>

          {activePage === 'daily' ? (
            <main className="app-grid">
              <section className="card card--todo">
                <img src={cardTodo} alt="" aria-hidden="true" className="card-bg" />
                <div className="card-inner card-inner--todo">
                  <div className="card-header">
                    <h2 className="card-title">To-do du jour</h2>
                    <span className="card-tag">routines &amp; rendez-vous</span>
                  </div>

                  <TodoForm onAddTodo={handleAddTodo} />
                  <TodoList todos={todos} onCompleteTodo={handleCompleteTodo} onDeleteTodo={handleDeleteTodo} />

                  <div className="todo-mascot">
                    <CuteIllustration />
                  </div>
                </div>
              </section>

              <aside className="card card--stats">
                <img src={cardStats} alt="" aria-hidden="true" className="card-bg" />
                <div className="card-inner">
                  <div className="card-header">
                    <h2 className="card-title">Stats de la journée</h2>
                    <span className="card-tag">équilibre global</span>
                  </div>

                  <StatsPanel stats={stats} />
                </div>
              </aside>
            </main>
          ) : (
            <main className="app-grid">
                <MimioPopiRoom
                  musicLabel={musicLabel}
                  onSelectDefault={() => {
                    setMusicSrc(defaultMusic);
                    setMusicLabel('chocolate milk – yawn');
                  }}
                  onSelectCustom={(file) => {
                    const url = URL.createObjectURL(file);
                    setMusicSrc(url);
                    setMusicLabel(file.name);
                  }}
                />
            </main>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
