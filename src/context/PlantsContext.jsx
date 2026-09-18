import { createContext, useContext, useMemo, useState } from 'react'
import { GENERIC_SIGNALS } from '../data/plantsCatalog'
import { computePostMortem } from '../lib/postMortem'

const PlantsContext = createContext(null)

const DEFAULT_WATERING_THRESHOLD_DAYS = 7
const DEFAULT_RESISTANCE_DAYS = 10
const DOUBLE_REGISTER_WINDOW_HOURS = 2

let nextId = 1
let nextSitterToken = 1

function makePlant({ name, speciesInfo }) {
  return {
    id: String(nextId++),
    name,
    species: speciesInfo?.species ?? null,
    signals: speciesInfo?.signals ?? null,
    wateringThresholdDays:
      speciesInfo?.wateringThresholdDays ?? DEFAULT_WATERING_THRESHOLD_DAYS,
    resistanceDaysWithoutWater:
      speciesInfo?.resistanceDaysWithoutWater ?? DEFAULT_RESISTANCE_DAYS,
    lightNeed: speciesInfo?.lightNeed ?? null,
    lastWateredAt: null,
    notificationsEnabled: true,
    status: 'alive', // FEAT-08 : 'alive' | 'lost'
    postMortem: null,
    activeTreatment: null, // FEAT-06 : { parasiteId, stepIndex, startedAt }
    history: [],
  }
}

export function PlantsProvider({ children }) {
  const [plants, setPlants] = useState([])
  const [homeProfile, setHomeProfileState] = useState(null) // FEAT-05 (US-10) : { orientation, lightLevel }
  const [sitterSheets, setSitterSheets] = useState({}) // FEAT-04 (US-09) : token -> plantIds[]

  const actions = useMemo(
    () => ({
      addPlant({ name, speciesInfo }) {
        const plant = makePlant({ name, speciesInfo })
        setPlants((prev) => [...prev, plant])
        return plant
      },

      // US-02 : enregistre un arrosage. Retourne 'confirm-needed' si un arrosage a déjà
      // été enregistré il y a moins de 2h (cas limite double enregistrement), sinon 'recorded'.
      recordWatering(plantId, { force = false } = {}) {
        const plant = plants.find((p) => p.id === plantId)
        if (!plant) return 'not-found'

        if (!force && plant.lastWateredAt) {
          const hoursSince =
            (Date.now() - new Date(plant.lastWateredAt).getTime()) / 36e5
          if (hoursSince < DOUBLE_REGISTER_WINDOW_HOURS) {
            return 'confirm-needed'
          }
        }

        const now = new Date().toISOString()
        setPlants((prev) =>
          prev.map((p) =>
            p.id === plantId
              ? {
                  ...p,
                  lastWateredAt: now,
                  history: [{ type: 'water', at: now }, ...p.history],
                }
              : p,
          ),
        )
        return 'recorded'
      },

      setNotificationsEnabled(plantId, enabled) {
        setPlants((prev) =>
          prev.map((p) =>
            p.id === plantId ? { ...p, notificationsEnabled: enabled } : p,
          ),
        )
      },

      addDiagnostic(plantId, diagnostic) {
        setPlants((prev) =>
          prev.map((p) =>
            p.id === plantId
              ? {
                  ...p,
                  history: [
                    { type: 'diagnostic', at: new Date().toISOString(), ...diagnostic },
                    ...p.history,
                  ],
                }
              : p,
          ),
        )
      },

      // US-10 : profil lumineux du logement, saisi une fois pour tout le foyer.
      setHomeProfile(orientation, lightLevel) {
        setHomeProfileState({ orientation, lightLevel })
      },

      // US-16 : milestone positif (nouvelle feuille, refloraison...).
      addMilestone(plantId, label) {
        setPlants((prev) =>
          prev.map((p) =>
            p.id === plantId
              ? {
                  ...p,
                  history: [
                    { type: 'milestone', label, at: new Date().toISOString() },
                    ...p.history,
                  ],
                }
              : p,
          ),
        )
      },

      // US-17 : marque une plante comme perdue et calcule le post-mortem à partir de son historique réel.
      markAsLost(plantId) {
        setPlants((prev) =>
          prev.map((p) =>
            p.id === plantId
              ? { ...p, status: 'lost', postMortem: computePostMortem(p) }
              : p,
          ),
        )
      },

      // FEAT-06 (US-12) : démarre un traitement anti-parasites, à la 1ère étape du protocole choisi.
      startParasiteTreatment(plantId, parasiteId) {
        setPlants((prev) =>
          prev.map((p) =>
            p.id === plantId
              ? {
                  ...p,
                  activeTreatment: {
                    parasiteId,
                    stepIndex: 0,
                    startedAt: new Date().toISOString(),
                  },
                }
              : p,
          ),
        )
      },

      // US-13 : suit l'efficacité du traitement en cours. improved=false passe à l'étape suivante ;
      // improved=true clôt le traitement et journalise le résultat dans l'historique.
      recordTreatmentOutcome(plantId, { improved, totalSteps }) {
        setPlants((prev) =>
          prev.map((p) => {
            if (p.id !== plantId || !p.activeTreatment) return p
            if (improved) {
              return {
                ...p,
                activeTreatment: null,
                history: [
                  {
                    type: 'treatment-resolved',
                    parasiteId: p.activeTreatment.parasiteId,
                    at: new Date().toISOString(),
                  },
                  ...p.history,
                ],
              }
            }
            const nextStep = p.activeTreatment.stepIndex + 1
            if (nextStep >= totalSteps) {
              // Protocole épuisé sans amélioration — on arrête de journaliser, l'écran le signale.
              return p
            }
            return {
              ...p,
              activeTreatment: { ...p.activeTreatment, stepIndex: nextStep },
            }
          }),
        )
      },

      // Le protocole est épuisé sans amélioration — on l'arrête et on journalise l'échec plutôt
      // que de boucler indéfiniment sur la dernière étape.
      abandonTreatment(plantId) {
        setPlants((prev) =>
          prev.map((p) => {
            if (p.id !== plantId || !p.activeTreatment) return p
            return {
              ...p,
              activeTreatment: null,
              history: [
                {
                  type: 'treatment-unresolved',
                  parasiteId: p.activeTreatment.parasiteId,
                  at: new Date().toISOString(),
                },
                ...p.history,
              ],
            }
          }),
        )
      },

      // US-09 : génère un lien de fiche plant sitter pour les plantes données (pas de compte requis).
      createSitterSheet(plantIds) {
        const token = `sitter-${nextSitterToken++}`
        setSitterSheets((prev) => ({ ...prev, [token]: plantIds }))
        return token
      },
    }),
    [plants],
  )

  const value = useMemo(
    () => ({ plants, homeProfile, sitterSheets, ...actions }),
    [plants, homeProfile, sitterSheets, actions],
  )

  return <PlantsContext.Provider value={value}>{children}</PlantsContext.Provider>
}

export function usePlants() {
  const ctx = useContext(PlantsContext)
  if (!ctx) throw new Error('usePlants must be used within a PlantsProvider')
  return ctx
}

export function usePlant(plantId) {
  const { plants } = usePlants()
  return plants.find((p) => p.id === plantId) ?? null
}

export function useSitterSheet(token) {
  const { plants, sitterSheets } = usePlants()
  const plantIds = sitterSheets[token]
  if (!plantIds) return null
  return plantIds.map((id) => plants.find((p) => p.id === id)).filter(Boolean)
}

// Statut d'arrosage (US-01) : à arroser dès que le seuil de l'espèce est dépassé,
// ou si aucun arrosage n'a jamais été enregistré n'affiche PAS "à arroser" par défaut
// (on ne culpabilise pas une plante tout juste ajoutée) — seul "aucun historique" est montré.
export function needsWater(plant) {
  if (!plant.lastWateredAt) return false
  const daysSince =
    (Date.now() - new Date(plant.lastWateredAt).getTime()) / 86_400_000
  return daysSince >= plant.wateringThresholdDays
}

export function daysSinceWatered(plant) {
  if (!plant.lastWateredAt) return null
  return Math.floor(
    (Date.now() - new Date(plant.lastWateredAt).getTime()) / 86_400_000,
  )
}

export function getSignals(plant) {
  return plant.signals ?? null
}

export const GENERIC_SIGNALS_INFO = GENERIC_SIGNALS
