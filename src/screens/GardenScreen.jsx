import { useNavigate } from 'react-router-dom'
import { usePlants, needsWater } from '../context/PlantsContext'
import { PhoneFrame, StatusBar, PrimaryButton, StatusBadge, QuickActionTile } from '../components/ui'
import { PlantIllustration, SuitcaseIcon, SunIcon, GuideIcon } from '../components/icons'
import './GardenScreen.css'

// Écran d'accueil "Mon jardin" — pas maquetté explicitement dans le fichier Paper (seul le titre
// de nav bar "Mon jardin" y fait référence), ajouté ici pour donner un point d'entrée réel à la
// liste de plantes puisque l'app en a structurellement besoin.
export default function GardenScreen() {
  const { plants } = usePlants()
  const navigate = useNavigate()

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="garden-header">
        <h1 className="garden-title">Mon jardin</h1>
        <div className="garden-tools">
          <QuickActionTile icon={<SuitcaseIcon />} label="Vacances" onClick={() => navigate('/vacances')} />
          <QuickActionTile icon={<SunIcon />} label="Logement" onClick={() => navigate('/logement')} />
          <QuickActionTile icon={<GuideIcon />} label="Guides" onClick={() => navigate('/guides')} />
        </div>
      </div>

      {plants.length === 0 ? (
        <div className="garden-empty">
          <PlantIllustration color="var(--color-block-mint)" size={96} />
          <p className="garden-empty-text">
            Aucune plante pour l'instant. Ajoute la première pour voir ce que l'app peut faire pour toi.
          </p>
        </div>
      ) : (
        <ul className="garden-list">
          {plants.map((plant) => (
            <li key={plant.id}>
              <button
                type="button"
                className="garden-list-item"
                onClick={() => navigate(`/plants/${plant.id}`)}
              >
                <span className="garden-list-photo">
                  <PlantIllustration size={40} />
                </span>
                <span className="garden-list-body">
                  <span className="garden-list-name">{plant.name}</span>
                  {plant.species && <span className="garden-list-species">{plant.species}</span>}
                </span>
                {needsWater(plant) && <StatusBadge>À ARROSER</StatusBadge>}
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="garden-cta">
        <PrimaryButton onClick={() => navigate('/onboarding')}>
          Ajouter une plante
        </PrimaryButton>
      </div>
    </PhoneFrame>
  )
}
