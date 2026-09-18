import { useNavigate, useParams } from 'react-router-dom'
import { usePlant, usePlants } from '../context/PlantsContext'
import { PARASITE_CATALOG } from '../data/parasiteCatalog'
import {
  PhoneFrame,
  StatusBar,
  NavBar,
  PrimaryButton,
  SecondaryButton,
  ProtocolStep,
  EyebrowLabel,
} from '../components/ui'
import './ParasiteScreen.css'

// FEAT-06 (US-12/US-13) — Identifier un parasite et suivre l'efficacité du traitement. Pas de
// maquette Paper : réutilise le composant ProtocolStep déjà établi par le diagnostic photo
// (US-03/04) pour rester visuellement cohérent avec DESIGN.md. L'alerte de contamination
// (US-12 cas limite) est affichée systématiquement au démarrage d'un traitement — ce prototype
// ne modélise pas la proximité réelle entre plantes.
export default function ParasiteScreen() {
  const { plantId } = useParams()
  const plant = usePlant(plantId)
  const { startParasiteTreatment, recordTreatmentOutcome, abandonTreatment } = usePlants()
  const navigate = useNavigate()

  if (!plant) {
    return (
      <PhoneFrame>
        <StatusBar />
        <div className="parasite-not-found">
          <p>Cette plante n'existe plus.</p>
        </div>
      </PhoneFrame>
    )
  }

  const treatment = plant.activeTreatment
  const parasite = treatment ? PARASITE_CATALOG[treatment.parasiteId] : null

  if (treatment && parasite) {
    const currentStep = parasite.steps[treatment.stepIndex]
    const isLastStep = treatment.stepIndex === parasite.steps.length - 1

    function handleOutcome(improved) {
      if (!improved && isLastStep) {
        // Protocole épuisé sans amélioration (US-13, cas non couvert par l'exemple nominal mais
        // nécessaire pour ne pas boucler indéfiniment) : on arrête et on oriente vers le diagnostic.
        abandonTreatment(plant.id)
        return
      }
      recordTreatmentOutcome(plant.id, { improved, totalSteps: parasite.steps.length })
    }

    return (
      <PhoneFrame>
        <StatusBar />
        <NavBar title="Mon jardin" onBack={() => navigate(`/plants/${plant.id}`)} />

        <div className="parasite-content">
          <div className="parasite-eyebrow-wrap">
            <EyebrowLabel>TRAITEMENT EN COURS</EyebrowLabel>
          </div>
          <h1 className="parasite-title">{parasite.label}</h1>

          <div className="parasite-contamination-warning">
            Les plantes voisines sont à risque — pense à les isoler ou à les inspecter.
          </div>

          <ProtocolStep
            number={treatment.stepIndex + 1}
            title={currentStep.title}
            description={currentStep.description}
          />
          <p className="parasite-reapply-hint">
            À ré-appliquer si pas d'amélioration après {parasite.reapplyAfterDays} jours.
          </p>

          <div className="parasite-outcome">
            <p className="parasite-outcome-question">Amélioration observée ?</p>
            <div className="parasite-outcome-actions">
              <SecondaryButton onClick={() => handleOutcome(false)}>
                {isLastStep ? 'Toujours pas' : 'Pas encore'}
              </SecondaryButton>
              <PrimaryButton onClick={() => handleOutcome(true)}>Oui, ça va mieux</PrimaryButton>
            </div>
          </div>
        </div>
      </PhoneFrame>
    )
  }

  return (
    <PhoneFrame>
      <StatusBar />
      <NavBar title="Mon jardin" onBack={() => navigate(`/plants/${plant.id}`)} />

      <div className="parasite-content">
        <h1 className="parasite-title">Quel parasite observes-tu ?</h1>
        <div className="parasite-choice-list">
          {Object.entries(PARASITE_CATALOG).map(([id, info]) => (
            <button
              key={id}
              type="button"
              className="parasite-choice-item"
              onClick={() => startParasiteTreatment(plant.id, id)}
            >
              {info.label}
            </button>
          ))}
        </div>
      </div>
    </PhoneFrame>
  )
}
