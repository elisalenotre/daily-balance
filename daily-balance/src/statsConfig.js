// Les stats de base pour la journée
export const INITIAL_STATS = {
  fatigue: 30,
  stress: 20,
  joy: 30,
  relax: 20,
  focus: 10,
  hygiene: 50,
  money: 50,
};

// Effets des catégories sur les stats
export const CATEGORY_EFFECTS = {
  // Grosse activité "obligation"
  travail: {
    stress: +12,
    fatigue: +10,
    focus: +15,
    joy: -4,
    relax: -5,
  },
  etudes: {
    stress: +10,
    fatigue: +8,
    focus: +18,
    joy: -3,
    relax: -4,
  },

  // Activités plaisir
  loisir: {
    joy: +15,
    relax: +10,
    stress: -5,
    fatigue: -2,
  },
  sortie: {
    joy: +18,
    relax: +12,
    fatigue: +8,
    stress: -3,
    money: -20,
  },

  // Self-care / maison
  hygiene: {
    hygiene: +25,
    joy: +5,
    relax: +3,
    fatigue: +2,
  },
  menage: {
    hygiene: +15,
    fatigue: +5,
    stress: -2,
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