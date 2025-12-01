// Les stats de base pour la journée
export const INITIAL_STATS = {
  fatigue: 50,
  stress: 50,
  joy: 50,
  relax: 50,
  focus: 50,
  hygiene: 50,
  money: 50,
};

// Effets des catégories sur les stats
export const CATEGORY_EFFECTS = {
  travail: {
    stress: +10,
    fatigue: +10,
    focus: +10,
  },
  loisir: {
    joy: +15,
    relax: +10,
  },
  sortie: {
    joy: +15,
    relax: +10,
    fatigue: +5,
    money: -15,
  },
  hygiene: {
    hygiene: +20,
    joy: +5,
  },
  menage: {
    fatigue: +5,
    hygiene: +15,
  },
  etudes: {
    stress: +8,
    fatigue: +8,
    focus: +12,
  },
};

// Liste de catégories proposées dans le select
export const CATEGORY_OPTIONS = [
  { value: 'travail', label: 'Travail' },
  { value: 'etudes', label: 'Études' },
  { value: 'loisir', label: 'Loisir' },
  { value: 'sortie', label: 'Sortie' },
  { value: 'hygiene', label: 'Hygiène' },
  { value: 'menage', label: 'Ménage' },
];

// Helper pour appliquer les effets d'une catégorie à l'état de stats
export function applyCategoryEffects(currentStats, category) {
  const effects = CATEGORY_EFFECTS[category];
  if (!effects) return currentStats;

  const newStats = { ...currentStats };

  Object.keys(effects).forEach((key) => {
    const delta = effects[key];
    const value = (newStats[key] ?? 0) + delta;

    // Clamp 0 - 100
    newStats[key] = Math.max(0, Math.min(100, value));
  });

  return newStats;
}
