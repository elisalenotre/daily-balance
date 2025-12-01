import { useState } from 'react';
import { CATEGORY_OPTIONS } from '../statsConfig';

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
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <div style={{ marginBottom: '0.5rem' }}>
        <label>
          Intitulé :
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="Ex : Appeler le médecin"
            style={{ marginLeft: '0.5rem' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '0.5rem' }}>
        <span>Type : </span>
        <label style={{ marginRight: '1rem' }}>
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

      <div style={{ marginBottom: '0.5rem' }}>
        <label>
          Catégorie :
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{ marginLeft: '0.5rem' }}
          >
            {CATEGORY_OPTIONS.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button type="submit">Ajouter</button>
    </form>
  );
}
