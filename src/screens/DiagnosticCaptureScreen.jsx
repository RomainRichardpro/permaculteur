import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PhoneFrame } from '../components/ui'
import { CloseIcon } from '../components/icons'
import { nextDiagnosticOutcome } from '../data/diagnosticOutcomes'
import './DiagnosticCaptureScreen.css'

// US-03 — capture photo (artboard D2-0). Sans vraie prise de vue ni analyse d'image, l'obturateur
// simule une capture (courte attente) puis navigue vers le résultat. Les trois issues documentées
// (nominal / incertain / photo inexploitable, artboards DL-0 et F7-0) sont montrées à tour de
// rôle à chaque nouvelle capture, pour pouvoir démontrer les trois états sans vraie IA de vision.
export default function DiagnosticCaptureScreen() {
  const { plantId } = useParams()
  const navigate = useNavigate()
  const [capturing, setCapturing] = useState(false)

  function handleCapture() {
    setCapturing(true)
    const outcome = nextDiagnosticOutcome()
    setTimeout(() => {
      navigate(`/plants/${plantId}/diagnostic/resultat`, { state: { outcome } })
    }, 1100)
  }

  return (
    <PhoneFrame variant="camera">
      <div className="capture-top-bar">
        <button
          type="button"
          className="capture-close-btn"
          onClick={() => navigate(`/plants/${plantId}`)}
          aria-label="Fermer"
        >
          <CloseIcon />
        </button>
        <span className="capture-title">Diagnostic photo</span>
        <span className="capture-title-spacer" />
      </div>

      <div className="capture-viewfinder">
        <svg className="capture-corners" viewBox="0 0 326 420" fill="none" aria-hidden="true">
          <path d="M4 60V20a16 16 0 0 1 16-16h40" stroke="var(--color-on-primary)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M322 60V20a16 16 0 0 0-16-16h-40" stroke="var(--color-on-primary)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M4 360v40a16 16 0 0 0 16 16h40" stroke="var(--color-on-primary)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M322 360v40a16 16 0 0 1-16 16h-40" stroke="var(--color-on-primary)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <p className="capture-helper">
          {capturing ? 'Analyse en cours…' : 'Cadre la feuille abîmée, à la lumière du jour si possible'}
        </p>
      </div>

      <div className="capture-controls">
        <button
          type="button"
          className="capture-shutter"
          onClick={handleCapture}
          disabled={capturing}
          aria-label="Prendre la photo"
        >
          <span className="capture-shutter-inner" />
        </button>
      </div>
    </PhoneFrame>
  )
}
