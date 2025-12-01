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

  const barContainerStyle = {
    height: '10px',
    width: '100%',
    backgroundColor: '#eee',
    borderRadius: '999px',
    overflow: 'hidden',
    marginTop: '0.25rem',
  };

  const barFillStyle = (value) => ({
    height: '100%',
    width: `${value}%`,
    backgroundColor: '#333',
    transition: 'width 0.3s ease',
  });

  return (
    <div>
      <h2>Stats de la journée</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {entries.map(([key, label]) => (
          <li key={key} style={{ marginBottom: '0.75rem' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.95rem',
              }}
            >
              <strong>{label}</strong>
              <span>{stats[key]}</span>
            </div>
            <div style={barContainerStyle}>
              <div style={barFillStyle(stats[key])} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
