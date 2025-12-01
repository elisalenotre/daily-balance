export default function StatsPanel({ stats }) {
  const entries = [
    ['fatigue', 'Fatigue'],
    ['stress', 'Stress'],
    ['joy', 'Joie'],
    ['relax', 'Relax'],
    ['focus', 'Concentration'],
    ['hygiene', 'Hygiène'],
    ['money', 'Argent'],
  ];

  return (
    <div>
      <h2>Stats de la journée</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {entries.map(([key, label]) => (
          <li key={key} style={{ marginBottom: '0.5rem' }}>
            <strong>{label} :</strong> {stats[key]}
          </li>
        ))}
      </ul>
    </div>
  );
}
