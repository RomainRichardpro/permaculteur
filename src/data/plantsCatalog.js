// Catalogue d'espèces connues — sert à simuler l'identification (photo/nom) de l'onboarding (US-05)
// et à alimenter les signaux d'arrosage réels d'une fiche plante (US-01).
// Chaque signal { title, description } correspond au contenu réel du fichier Paper (fiche Pothos, US-01).
// lightNeed alimente FEAT-05 (compatibilité logement) : 'faible' | 'moyenne' | 'élevée'.
// resistanceDaysWithoutWater alimente FEAT-04 (mode vacances) : nombre de jours que la plante
// supporte sans arrosage au-delà de son seuil normal, avant d'être jugée "à risque".
export const SPECIES_CATALOG = {
  pothos: {
    name: 'Pothos',
    species: 'Epipremnum aureum',
    wateringThresholdDays: 7,
    lightNeed: 'faible',
    resistanceDaysWithoutWater: 12,
    signals: [
      {
        icon: 'droplet',
        title: 'Terre sèche sur 3 cm',
        description:
          "Enfonce ton doigt dans la terre : si c'est sec sur les 3 premiers cm, il est temps d'arroser.",
      },
      {
        icon: 'leaf',
        title: 'Feuilles légèrement tombantes',
        description:
          'Elles perdent en tonicité avant même que la terre soit complètement sèche.',
      },
    ],
  },
  monstera: {
    name: 'Monstera',
    species: 'Monstera deliciosa',
    wateringThresholdDays: 9,
    lightNeed: 'moyenne',
    resistanceDaysWithoutWater: 15,
    signals: [
      {
        icon: 'droplet',
        title: 'Terre sèche sur 5 cm',
        description:
          "Le monstera tolère un substrat plus sec que le pothos : vérifie en profondeur avant d'arroser.",
      },
      {
        icon: 'leaf',
        title: 'Nouvelles feuilles qui peinent à se fendre',
        description:
          "Un manque d'eau régulier ralentit l'apparition des fenestrations caractéristiques.",
      },
    ],
  },
  cactus: {
    name: 'Cactus',
    species: 'Cactaceae',
    wateringThresholdDays: 21,
    lightNeed: 'élevée',
    resistanceDaysWithoutWater: 45,
    signals: [
      {
        icon: 'droplet',
        title: 'Substrat entièrement sec',
        description:
          "Le cactus stocke l'eau dans ses tissus : n'arrose que lorsque le substrat est sec en profondeur.",
      },
      {
        icon: 'leaf',
        title: 'Légère ride sur la tige',
        description:
          "Une tige qui se plisse légèrement indique une réserve d'eau qui commence à s'épuiser.",
      },
    ],
  },
}

// Profil lumineux du logement → niveau de lumière disponible (FEAT-05, US-10).
export const ORIENTATION_LIGHT_LEVEL = {
  nord: 'faible',
  est: 'moyenne',
  ouest: 'moyenne',
  sud: 'élevée',
}

const LIGHT_RANK = { faible: 0, moyenne: 1, élevée: 2 }

// Une plante est incompatible si son besoin dépasse ce que le logement peut offrir (US-11).
export function isIncompatibleWithLight(speciesInfo, lightLevel) {
  if (!speciesInfo || !lightLevel) return false
  return LIGHT_RANK[speciesInfo.lightNeed] > LIGHT_RANK[lightLevel]
}

// Signaux universels affichés quand l'espèce n'a pas pu être identifiée (US-01, cas limite "espèce inconnue").
export const GENERIC_SIGNALS = {
  title: 'Signaux universels',
  description: 'Terre sèche en surface · feuilles molles au toucher',
}

export function matchSpecies(rawName) {
  const key = rawName.trim().toLowerCase()
  return SPECIES_CATALOG[key] ?? null
}
