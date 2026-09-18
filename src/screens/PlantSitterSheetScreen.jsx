import { useParams } from 'react-router-dom'
import { useSitterSheet } from '../context/PlantsContext'
import { PhoneFrame, StatusBar } from '../components/ui'
import { PlantIllustration } from '../components/icons'
import './PlantSitterSheetScreen.css'

// FEAT-04 (US-09) — Fiche d'instructions pour un plant sitter : lisible sans compte ni
// installation. Dans ce prototype, "partageable par lien" est simulé par une route dédiée
// (/plant-sitter/:token) dont le token vit en mémoire côté client — un vrai backend serait
// nécessaire pour qu'un lien survive à la fermeture de l'app.
export default function PlantSitterSheetScreen() {
  const { token } = useParams()
  const plants = useSitterSheet(token)

  if (!plants) {
    return (
      <PhoneFrame>
        <StatusBar />
        <div className="sitter-not-found">
          <p>Cette fiche n'existe pas ou plus.</p>
        </div>
      </PhoneFrame>
    )
  }

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="sitter-header">
        <h1>Fiche plant sitter</h1>
        <p>Merci de prendre soin de ces plantes le temps de l'absence 🌿</p>
      </div>

      <ul className="sitter-list">
        {plants.map((plant) => (
          <li key={plant.id} className="sitter-item">
            <span className="sitter-item-photo">
              <PlantIllustration size={44} />
            </span>
            <div className="sitter-item-body">
              <p className="sitter-item-name">{plant.name}</p>
              <p className="sitter-item-frequency">
                Arrosage recommandé : tous les {plant.wateringThresholdDays} jours
              </p>
              {plant.signals ? (
                <p className="sitter-item-signal">À surveiller : {plant.signals[0].title.toLowerCase()}</p>
              ) : (
                <p className="sitter-item-signal">À surveiller : terre sèche en surface, feuilles molles</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </PhoneFrame>
  )
}
