// Issues simulées du diagnostic photo (US-03/US-04). Le contenu de la cause "Cochenilles
// farineuses" (confiance probable) reproduit exactement l'artboard Paper DL-0. Les causes
// alternatives listées dans le cas "incertain" (artboard F7-0 ne documente que leurs noms,
// pas leur protocole détaillé) ont un protocole générique ajouté ici pour rendre l'écran
// fonctionnel — signalé comme tel plutôt que fabriqué en silence.

export const COCHENILLES_PROTOCOL = [
  {
    title: 'Isolation',
    description: 'Éloigne la plante des autres pendant le traitement',
  },
  {
    title: 'Nettoyage manuel',
    description: "Coton-tige imbibé d'alcool à 70° sur chaque cochenille visible",
  },
  {
    title: 'Traitement savon noir',
    description: "Pulvérisation complète, à renouveler si pas d'amélioration après 7 jours",
  },
]

// Protocole inféré (non présent dans le fichier Paper) — à valider avec un designer avant usage réel.
export const CARENCE_FER_PROTOCOL = [
  {
    title: 'Vérifier le pH du substrat',
    description: 'Un sol trop calcaire bloque l\'absorption du fer même s\'il est présent',
  },
  {
    title: 'Apport de fer chélaté',
    description: 'Arrosage avec un engrais chélaté, en respectant le dosage indiqué',
  },
  {
    title: 'Observer les nouvelles feuilles',
    description: 'Le verdissement doit apparaître sur les jeunes pousses sous 2-3 semaines',
  },
]

export const DIAGNOSTIC_OUTCOMES = {
  nominal: {
    kind: 'result',
    cause: 'Cochenilles farineuses',
    confidence: 'probable',
    steps: COCHENILLES_PROTOCOL,
  },
  incertain: {
    kind: 'uncertain',
    causes: [
      { cause: 'Cochenilles farineuses', confidence: 'possible', steps: COCHENILLES_PROTOCOL },
      { cause: 'Carence en fer', confidence: 'possible', steps: CARENCE_FER_PROTOCOL },
    ],
  },
  inexploitable: {
    kind: 'unreadable',
  },
}

// Cycle déterministe (pas de vraie vision par ordinateur) pour pouvoir démontrer les trois
// états documentés en reprenant simplement une photo plusieurs fois de suite.
const OUTCOME_ORDER = ['nominal', 'incertain', 'inexploitable']
let cursor = 0

export function nextDiagnosticOutcome() {
  const key = OUTCOME_ORDER[cursor % OUTCOME_ORDER.length]
  cursor += 1
  return key
}
