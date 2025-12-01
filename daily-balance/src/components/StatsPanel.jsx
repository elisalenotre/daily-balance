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
      <p className="stats-header-note">
        Les valeurs vont de 0 à 100. L’objectif : éviter que stress & fatigue montent
        trop, sans laisser la joie et le relax descendre.
      </p>

      <ul className="stats-list">
        {entries.map(([key, label]) => (
          <li key={key} className="stat-row">
            <div className="stat-row-top">
              <span className="stat-label">{label}</span>
              <span className="stat-value">{stats[key]}</span>
            </div>
            <div className="stat-bar-track">
              <div
                className="stat-bar-fill"
                style={{ '--value': `${stats[key]}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
