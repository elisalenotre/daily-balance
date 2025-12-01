import { useState } from 'react';
import { CATEGORY_OPTIONS } from '../statsConfig';

import buttonBg from '../assets/button-bg.svg';

export default function TodoForm({ onAddTodo }) {
  const [label, setLabel] = useState('');
  const [type, setType] = useState('task'); // 'task' ou 'appointment'
  const [category, setCategory] = useState('travail');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = label.trim();

    if (!trimmed) return;

    onAddTodo({
      label: trimmed,
      type,
      category,
    });

    setLabel('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="todo-form-row">
        <span className="todo-label">Intitulé</span>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Ex : Appeler le médecin"
          className="todo-input-text"
        />
      </div>

      <div className="todo-form-row">
        <span className="todo-label">Type</span>
        <div className="todo-radio-group">
          <label>
            <input
              type="radio"
              name="todoType"
              value="task"
              checked={type === 'task'}
              onChange={() => setType('task')}
            />
            Tâche
          </label>
          <label>
            <input
              type="radio"
              name="todoType"
              value="appointment"
              checked={type === 'appointment'}
              onChange={() => setType('appointment')}
            />
            Rendez-vous
          </label>
        </div>
      </div>

      <div className="todo-form-row">
        <span className="todo-label">Catégorie</span>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="todo-select"
        >
          {CATEGORY_OPTIONS.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <button className="btn-primary">
            <img src={buttonBg} aria-hidden="true" className="btn-bg" />
            <span>Ajouter à la journée</span>
        </button>
      </div>
    </form>
  );
}
