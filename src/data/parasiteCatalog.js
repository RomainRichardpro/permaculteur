// FEAT-06 — Protocole anti-parasites (US-12/US-13). Contenu inféré à partir des critères
// d'acceptation des US (produit, mode d'application, fréquence, indicateur de ré-application) —
// aucune maquette Paper n'existe pour cet écran, contrairement au diagnostic photo (FEAT-02).
// Le protocole "Cochenilles farineuses" reprend celui déjà validé dans diagnosticOutcomes.js
// pour rester cohérent avec le résultat de diagnostic photo (US-12 : "reliée à FEAT-02").
import { COCHENILLES_PROTOCOL } from './diagnosticOutcomes'

export const PARASITE_CATALOG = {
  cochenilles: {
    label: 'Cochenilles farineuses',
    reapplyAfterDays: 7,
    steps: COCHENILLES_PROTOCOL,
  },
  araignees: {
    label: 'Araignées rouges',
    reapplyAfterDays: 5,
    steps: [
      {
        title: 'Augmenter l\'humidité ambiante',
        description: "Les araignées rouges prolifèrent en air sec — brumisation légère autour de la plante, jamais sur les fleurs",
      },
      {
        title: 'Douche des feuilles',
        description: "Rinçage du feuillage à l'eau tiède, dessus et dessous des feuilles, pour déloger les acariens",
      },
      {
        title: 'Traitement acaricide',
        description: 'Savon insecticide ou huile de neem en dernier recours, à renouveler si pas d\'amélioration après 5 jours',
      },
    ],
  },
  pucerons: {
    label: 'Pucerons',
    reapplyAfterDays: 4,
    steps: [
      {
        title: 'Retrait manuel',
        description: 'Élimine les colonies visibles au doigt ou avec un chiffon humide sur les jeunes pousses',
      },
      {
        title: 'Pulvérisation savon noir',
        description: 'Solution de savon noir diluée, pulvérisée sur les zones infestées, en dehors du plein soleil',
      },
      {
        title: 'Auxiliaires naturels',
        description: "Favorise les coccinelles si la plante est en extérieur — prédateur naturel des pucerons",
      },
    ],
  },
  autre: {
    label: 'Autre / je ne sais pas',
    reapplyAfterDays: 7,
    steps: [
      {
        title: 'Isolation',
        description: 'Éloigne la plante des autres le temps d\'observer, quel que soit le parasite suspecté',
      },
      {
        title: 'Nettoyage doux',
        description: "Douche des feuilles à l'eau claire pour retirer un maximum de résidus visibles",
      },
      {
        title: 'Diagnostic photo',
        description: 'Si le problème persiste, lance un diagnostic photo pour identifier précisément la cause',
      },
    ],
  },
}
