import { useState } from 'react';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import StatsPanel from './components/StatsPanel.jsx';
import CuteIllustration from './components/CuteIllustration.jsx';
import { INITIAL_STATS, applyCategoryEffects } from './statsConfig';

import cardTodo from './assets/card-todo.svg';
import cardStats from './assets/card-stats.svg';

import BackgroundMusic from './components/BackgroundMusic';

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
      <BackgroundMusic />
      <div className="app-root">
        <div className="app-shell">
          <header className="app-header">
            <h1 className="app-title">Mimio&amp;Popi daily</h1>
          </header>

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
        </div>
      </div>
    </>
  );
}

export default App;
