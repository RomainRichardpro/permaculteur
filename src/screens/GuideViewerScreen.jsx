import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { matchSymptom } from '../data/observationGuides'
import { PhoneFrame, StatusBar, NavBar, PrimaryButton, SecondaryButton } from '../components/ui'
import { PlantIllustration } from '../components/icons'
import './GuideViewerScreen.css'

// FEAT-07 (US-14) — Mini-guide visuel, format court façon Stories. La navigation se fait par tap
// (Précédent/Suivant) plutôt que par vrai swipe tactile — le comportement (une idée par écran,
// ≤5 écrans) est ce que l'US demande, le geste exact n'est pas prescrit par les critères
// d'acceptation.
export default function GuideViewerScreen() {
  const { symptomId } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const plantId = location.state?.plantId ?? null
  const guide = matchSymptom(symptomId)
  const [index, setIndex] = useState(0)

  const backTarget = () => navigate('/guides', { state: { plantId } })

  if (!guide) {
    return (
      <PhoneFrame>
        <StatusBar />
        <NavBar title="Guides" onBack={backTarget} />
        <div className="guide-not-found">
          <p>Ce symptôme n'est pas encore couvert par nos guides.</p>
          {plantId && (
            <PrimaryButton onClick={() => navigate(`/plants/${plantId}/diagnostic`)}>
              Lancer un diagnostic photo
            </PrimaryButton>
          )}
        </div>
      </PhoneFrame>
    )
  }

  const slide = guide.slides[index]
  const isLast = index === guide.slides.length - 1

  return (
    <PhoneFrame>
      <StatusBar />
      <NavBar title={guide.symptom} onBack={backTarget} />

      <div className="guide-dots">
        {guide.slides.map((s, i) => (
          <span key={s.cause} className={`guide-dot${i === index ? ' guide-dot--active' : ''}`} />
        ))}
      </div>

      <div className="guide-slide">
        <div className="guide-slide-illustration">
          <PlantIllustration color="var(--color-block-navy)" size={72} />
        </div>
        <h1 className="guide-slide-cause">{slide.cause}</h1>
        <p className="guide-slide-action">{slide.action}</p>
      </div>

      <div className="guide-nav-actions">
        {index > 0 && (
          <SecondaryButton onClick={() => setIndex((i) => i - 1)}>Précédent</SecondaryButton>
        )}
        {isLast ? (
          <PrimaryButton onClick={backTarget}>Terminé</PrimaryButton>
        ) : (
          <PrimaryButton onClick={() => setIndex((i) => i + 1)}>Suivant</PrimaryButton>
        )}
      </div>
    </PhoneFrame>
  )
}
