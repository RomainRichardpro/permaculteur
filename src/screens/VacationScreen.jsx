import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePlants, daysSinceWatered } from '../context/PlantsContext'
import { PhoneFrame, StatusBar, NavBar, PrimaryButton, EyebrowLabel } from '../components/ui'
import './VacationScreen.css'

// FEAT-04 (US-08) — Générer un plan de préparation vacances. Pas de maquette Paper : mise en page
// dérivée de DESIGN.md. La durée d'absence est saisie en nombre de jours (plus simple qu'un
// double date-picker pour ce prototype, sans changer la logique métier de l'US).
function computePlan(plant, absenceDays) {
  const elapsed = daysSinceWatered(plant) ?? 0
  const remaining = plant.resistanceDaysWithoutWater - elapsed
  const atRisk = remaining < absenceDays

  let resistance
  if (remaining >= absenceDays) resistance = 'résistera sans arrosage'
  else if (remaining > 0) resistance = 'à risque'
  else resistance = 'ne résistera pas'

  const action = atRisk
    ? 'Arrose abondamment avant de partir, et regroupe-la avec les autres plantes pour limiter l\'évaporation.'
    : 'Peut attendre ton retour sans intervention particulière.'

  return { plant, resistance, action, atRisk }
}

export default function VacationScreen() {
  const { plants: allPlants, createSitterSheet } = usePlants()
  const navigate = useNavigate()
  const [absenceDays, setAbsenceDays] = useState(7)

  // Une plante marquée comme perdue n'a plus besoin d'être arrosée pendant l'absence.
  const plants = useMemo(() => allPlants.filter((p) => p.status === 'alive'), [allPlants])

  const plan = useMemo(() => {
    const computed = plants.map((p) => computePlan(p, absenceDays))
    // US-08 cas limite : les plantes à risque sont signalées visuellement en premier.
    return computed.sort((a, b) => Number(b.atRisk) - Number(a.atRisk))
  }, [plants, absenceDays])

  const atRiskCount = plan.filter((p) => p.atRisk).length
  const showSitterOffer = atRiskCount >= 2

  function handleCreateSitterSheet() {
    const token = createSitterSheet(plants.map((p) => p.id))
    navigate(`/plant-sitter/${token}`)
  }

  return (
    <PhoneFrame>
      <StatusBar />
      <NavBar title="Mon jardin" onBack={() => navigate('/')} />

      <div className="vacation-content">
        <h1 className="vacation-title">Partir en vacances</h1>

        <label className="vacation-days-label" htmlFor="absence-days">
          Durée de l'absence (en jours)
        </label>
        <input
          id="absence-days"
          type="number"
          min="1"
          className="vacation-days-input"
          value={absenceDays}
          onChange={(event) => setAbsenceDays(Math.max(1, Number(event.target.value) || 1))}
        />

        {plants.length === 0 ? (
          <p className="vacation-empty">Ajoute d'abord une plante pour générer un plan.</p>
        ) : (
          <>
            <EyebrowLabel>PLAN PAR PLANTE</EyebrowLabel>
            <ul className="vacation-plan-list">
              {plan.map(({ plant, resistance, action, atRisk }) => (
                <li key={plant.id} className={`vacation-plan-item${atRisk ? ' vacation-plan-item--risk' : ''}`}>
                  <p className="vacation-plan-name">{plant.name}</p>
                  <p className="vacation-plan-resistance">{resistance}</p>
                  <p className="vacation-plan-action">{action}</p>
                </li>
              ))}
            </ul>

            {showSitterOffer && (
              <div className="vacation-sitter-offer">
                <p className="vacation-sitter-text">
                  {atRiskCount} plantes sur {plants.length} sont à risque sur cette durée.
                </p>
                <PrimaryButton onClick={handleCreateSitterSheet}>
                  Créer une fiche pour un plant sitter
                </PrimaryButton>
              </div>
            )}
          </>
        )}
      </div>
    </PhoneFrame>
  )
}
