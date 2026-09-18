// FEAT-08 — Post-mortem (US-17). Analyse non-jugeante basée sur l'historique réel de la plante :
// fréquence d'arrosage observée comparée au seuil normal de l'espèce. Pas de maquette Paper pour
// cet écran — logique dérivée directement des critères d'acceptation de l'US.

const GENERIC_CAUSES = [
  'Sur-arrosage — la cause la plus fréquente chez les plantes débutantes',
  'Manque de lumière — beaucoup de pertes viennent d\'un emplacement trop sombre',
  'Choc au rempotage — un changement brutal de pot ou de substrat peut fragiliser une plante',
]

export function computePostMortem(plant) {
  const waterEvents = plant.history.filter((entry) => entry.type === 'water')

  if (waterEvents.length < 2) {
    return {
      hasEnoughHistory: false,
      causes: GENERIC_CAUSES,
      suggestion:
        'Plus tu enregistres tes arrosages, mieux on pourra t\'aider la prochaine fois — même une seule ligne par semaine fait la différence.',
    }
  }

  // waterEvents est trié du plus récent au plus ancien (voir recordWatering).
  const timestamps = waterEvents.map((e) => new Date(e.at).getTime()).sort((a, b) => a - b)
  const spanDays = (timestamps[timestamps.length - 1] - timestamps[0]) / 86_400_000
  const avgIntervalDays = spanDays / (timestamps.length - 1)
  const threshold = plant.wateringThresholdDays

  if (avgIntervalDays < threshold / 2) {
    return {
      hasEnoughHistory: true,
      cause: 'Possible sur-arrosage',
      explanation: `Les données suggèrent un possible sur-arrosage : tu l'as arrosé ${waterEvents.length} fois en ${Math.round(spanDays)} jours, soit bien plus fréquemment que ce que ${plant.name} tolère normalement.`,
      suggestion:
        "La prochaine fois, vérifie la terre avant chaque arrosage plutôt que de suivre une fréquence fixe — laisse-la sécher davantage entre deux passages.",
    }
  }

  if (avgIntervalDays > threshold * 1.5) {
    return {
      hasEnoughHistory: true,
      cause: 'Possible sous-arrosage',
      explanation: `Les données suggèrent un possible manque d'eau : en moyenne ${Math.round(avgIntervalDays)} jours se sont écoulés entre deux arrosages, largement au-delà du rythme habituel de ${plant.name}.`,
      suggestion:
        'Un rappel plus régulier ou une notification pourrait aider la prochaine fois à ne pas laisser passer trop de temps.',
    }
  }

  return {
    hasEnoughHistory: true,
    cause: 'Cause incertaine',
    explanation:
      "Le rythme d'arrosage enregistré semblait pourtant cohérent avec les besoins de l'espèce — la cause est probablement ailleurs (lumière, température, parasite non détecté).",
    suggestion:
      "La prochaine fois, un diagnostic photo dès les premiers signes inhabituels peut aider à repérer une cause moins visible.",
  }
}
