import { useLocation, useNavigate } from 'react-router-dom'
import { OBSERVATION_GUIDES } from '../data/observationGuides'
import { PhoneFrame, StatusBar, NavBar } from '../components/ui'
import './GuidesListScreen.css'

// FEAT-07 (US-14) — Liste des guides d'observation, indexés par symptôme. Accessible en
// exploration libre (depuis "Mon jardin") ou depuis une fiche plante (plantId transmis via le
// state de navigation, pour permettre le lien de secours vers le diagnostic photo — US-14 cas
// limite "symptôme non couvert").
export default function GuidesListScreen() {
  const navigate = useNavigate()
  const location = useLocation()
  const plantId = location.state?.plantId ?? null

  return (
    <PhoneFrame>
      <StatusBar />
      <NavBar title="Mon jardin" onBack={() => navigate(plantId ? `/plants/${plantId}` : '/')} />

      <div className="guides-content">
        <h1 className="guides-title">Ma plante a un problème</h1>
        <p className="guides-subtitle">Choisis ce que tu observes pour un mini-guide en quelques secondes.</p>

        <ul className="guides-list">
          {Object.entries(OBSERVATION_GUIDES).map(([id, guide]) => (
            <li key={id}>
              <button
                type="button"
                className="guides-list-item"
                onClick={() => navigate(`/guides/${id}`, { state: { plantId } })}
              >
                {guide.symptom}
              </button>
            </li>
          ))}
        </ul>

        <p className="guides-fallback-hint">
          Symptôme non listé ?{' '}
          {plantId ? (
            <button
              type="button"
              className="guides-fallback-link"
              onClick={() => navigate(`/plants/${plantId}/diagnostic`)}
            >
              Lance un diagnostic photo
            </button>
          ) : (
            'Ouvre le diagnostic photo depuis une fiche plante.'
          )}
        </p>
      </div>
    </PhoneFrame>
  )
}
