import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { usePlants } from '../context/PlantsContext'
import { DIAGNOSTIC_OUTCOMES } from '../data/diagnosticOutcomes'
import {
  PhoneFrame,
  StatusBar,
  NavBar,
  PrimaryButton,
  SecondaryButton,
  ProtocolStep,
  ConfidenceBadge,
  EyebrowLabel,
} from '../components/ui'
import './DiagnosticResultScreen.css'

// US-03/US-04 — résultat du diagnostic. `outcome` vient de l'écran de capture (state de
// navigation) ; sans lui (accès direct à l'URL, rechargement) on retombe sur le cas nominal.
export default function DiagnosticResultScreen() {
  const { plantId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const { addDiagnostic } = usePlants()

  const outcomeKey = location.state?.outcome ?? 'nominal'
  const outcome = DIAGNOSTIC_OUTCOMES[outcomeKey]
  const [chosen, setChosen] = useState(outcome.kind === 'result' ? outcome : null)

  function handleStartTreatment() {
    addDiagnostic(plantId, { cause: chosen.cause, confidence: chosen.confidence })
    navigate(`/plants/${plantId}`)
  }

  if (outcome.kind === 'unreadable') {
    return (
      <PhoneFrame>
        <StatusBar />
        <NavBar title="Diagnostic photo" onBack={() => navigate(`/plants/${plantId}/diagnostic`)} />
        <div className="result-unreadable">
          <p className="result-unreadable-title">Photo difficile à analyser</p>
          <div className="result-unreadable-card">
            Guide de cadrage : rapproche-toi à 15-20 cm de la zone abîmée, en pleine lumière du
            jour et sans flash. Fonctionne aussi sans connexion via les guides de symptômes
            hors-ligne.
          </div>
        </div>
        <div className="cta-bar">
          <PrimaryButton onClick={() => navigate(`/plants/${plantId}/diagnostic`)}>
            Reprendre la photo
          </PrimaryButton>
        </div>
      </PhoneFrame>
    )
  }

  if (outcome.kind === 'uncertain' && !chosen) {
    return (
      <PhoneFrame>
        <StatusBar />
        <NavBar title="Diagnostic photo" onBack={() => navigate(`/plants/${plantId}/diagnostic`)} />
        <div className="result-uncertain-banner">
          <p className="result-uncertain-title">Diagnostic incertain — plusieurs causes possibles</p>
          <p className="result-uncertain-desc">
            Choisis la cause qui correspond le mieux à ce que tu observes pour voir son protocole.
          </p>
        </div>
        <div className="result-cause-list">
          {outcome.causes.map((cause) => (
            <button
              key={cause.cause}
              type="button"
              className="result-cause-item"
              onClick={() => setChosen(cause)}
            >
              <span>{cause.cause}</span>
              <ConfidenceBadge level={cause.confidence} />
            </button>
          ))}
        </div>
      </PhoneFrame>
    )
  }

  // outcome.kind === 'result', ou 'uncertain' avec une cause choisie.
  return (
    <PhoneFrame>
      <StatusBar />
      <NavBar title="Diagnostic photo" onBack={() => navigate(`/plants/${plantId}`)} />

      <div className="result-photo-frame" />

      <div className="result-header">
        <EyebrowLabel>RÉSULTAT DU DIAGNOSTIC</EyebrowLabel>
        <h1>{chosen.cause}</h1>
        <ConfidenceBadge level={chosen.confidence} />
      </div>

      <div className="result-protocol-header">
        <EyebrowLabel>PROTOCOLE DE TRAITEMENT</EyebrowLabel>
        <h2>{chosen.steps.length} étapes, du plus doux au plus fort</h2>
      </div>

      {chosen.steps.map((step, index) => (
        <ProtocolStep
          key={step.title}
          number={index + 1}
          title={step.title}
          description={step.description}
        />
      ))}

      <div className="result-spacer" />

      <div className="cta-bar">
        <PrimaryButton onClick={handleStartTreatment}>Commencer le traitement</PrimaryButton>
        {outcomeKey === 'incertain' && (
          <SecondaryButton onClick={() => setChosen(null)}>Choisir une autre cause</SecondaryButton>
        )}
      </div>
    </PhoneFrame>
  )
}
