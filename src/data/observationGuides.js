// FEAT-07 — Guide d'observation progressive (US-14). Contenu inféré depuis l'exemple donné par
// l'US ("feuilles jaunes" : sur-arrosage / manque de lumière / âge naturel des feuilles) —
// aucune maquette Paper pour cet écran. Indexé par symptôme, pas par espèce.
export const OBSERVATION_GUIDES = {
  'feuilles-jaunes': {
    symptom: 'Feuilles jaunes',
    slides: [
      {
        cause: 'Sur-arrosage',
        action:
          "Vérifie si la terre est détrempée. Si oui, espace les arrosages et assure-toi que le pot draine bien.",
      },
      {
        cause: 'Manque de lumière',
        action:
          "Si les feuilles jaunissent en partant de la base, rapproche la plante d'une source de lumière indirecte.",
      },
      {
        cause: 'Âge naturel des feuilles',
        action:
          "Une feuille isolée qui jaunit en fin de vie est normal — retire-la simplement, rien à corriger.",
      },
    ],
  },
  'feuilles-tombantes': {
    symptom: 'Feuilles tombantes',
    slides: [
      {
        cause: 'Manque d\'eau',
        action: "Touche la terre : si elle est sèche en profondeur, un arrosage suffit à redresser le feuillage en quelques heures.",
      },
      {
        cause: 'Choc thermique',
        action: "Un courant d'air froid ou la proximité d'un radiateur peut faire tomber les feuilles — éloigne la plante de la source.",
      },
    ],
  },
  'taches-brunes': {
    symptom: 'Taches brunes',
    slides: [
      {
        cause: 'Brûlure de soleil direct',
        action: 'Des taches sèches et cassantes sur les feuilles exposées indiquent un excès de soleil direct — déplace la plante.',
      },
      {
        cause: 'Excès d\'engrais',
        action: 'Des bords de feuilles bruns et croustillants peuvent signaler une accumulation de sels minéraux — rince le substrat à l\'eau claire.',
      },
      {
        cause: 'Maladie fongique',
        action: 'Des taches molles qui s\'étendent nécessitent un diagnostic photo pour confirmer et traiter à temps.',
      },
    ],
  },
}

export function matchSymptom(symptomId) {
  return OBSERVATION_GUIDES[symptomId] ?? null
}
