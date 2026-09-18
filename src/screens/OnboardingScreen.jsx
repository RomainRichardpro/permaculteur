import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePlants } from '../context/PlantsContext'
import { SPECIES_CATALOG, matchSpecies, isIncompatibleWithLight } from '../data/plantsCatalog'
import { PhoneFrame, StatusBar, PrimaryButton, SecondaryButton } from '../components/ui'
import { PlantIllustration, CameraIcon } from '../components/icons'
import './OnboardingScreen.css'

// US-05 — Ajouter une première plante en moins de 30 secondes. Copie exacte du fichier Paper
// (artboard FL-0). "Prendre une photo" simule une identification réussie (pas de vraie vision
// par ordinateur dans ce prototype) : elle résout toujours vers Pothos, le seul jeu de signaux
// entièrement documenté par le design. "Taper le nom" tente une correspondance dans le
// catalogue (pothos/monstera/cactus) ; sinon la plante est créée sans espèce identifiée, ce qui
// déclenche le fallback "signaux universels" documenté par US-01 (cas limite espèce inconnue).
//
// FEAT-05 (US-11) : si l'espèce identifiée a un besoin de lumière supérieur à ce que le profil
// du logement permet, un avertissement s'affiche avant la création (pas de blocage — juste un
// choix éclairé). US-10 cas limite : si aucun profil n'est renseigné et que l'espèce a un besoin
// de lumière élevé, une suggestion douce s'affiche mais n'empêche jamais l'ajout.
export default function OnboardingScreen() {
  const { addPlant, homeProfile } = usePlants()
  const navigate = useNavigate()
  const [showNameField, setShowNameField] = useState(false)
  const [name, setName] = useState('')
  const [pending, setPending] = useState(null) // { name, speciesInfo, warning: 'incompatible' | 'no-profile' }

  function goToPlant(plant) {
    navigate(`/plants/${plant.id}`)
  }

  function createPlant(plantName, speciesInfo) {
    const plant = addPlant({ name: plantName, speciesInfo })
    goToPlant(plant)
  }

  function resolveAndCreate(plantName, speciesInfo) {
    if (speciesInfo && homeProfile && isIncompatibleWithLight(speciesInfo, homeProfile.lightLevel)) {
      setPending({ name: plantName, speciesInfo, warning: 'incompatible' })
      return
    }
    if (speciesInfo && !homeProfile && speciesInfo.lightNeed === 'élevée') {
      setPending({ name: plantName, speciesInfo, warning: 'no-profile' })
      return
    }
    createPlant(plantName, speciesInfo)
  }

  function handlePhoto() {
    // Simulation : la photo est toujours reconnue comme un Pothos dans ce prototype.
    resolveAndCreate('Pothos', SPECIES_CATALOG.pothos)
  }

  function handleNameSubmit(event) {
    event.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return
    const speciesInfo = matchSpecies(trimmed)
    resolveAndCreate(speciesInfo ? speciesInfo.name : trimmed, speciesInfo)
  }

  function handleDontKnow() {
    createPlant('Ma plante', null)
  }

  if (pending) {
    return (
      <PhoneFrame>
        <StatusBar />
        <div className="onboarding-warning">
          {pending.warning === 'incompatible' ? (
            <>
              <p className="onboarding-warning-title">Attention à la lumière</p>
              <p className="onboarding-warning-text">
                Cette plante a besoin de beaucoup de lumière directe. Dans un appartement orienté{' '}
                {homeProfile.orientation}, elle risque de s'étioler.
              </p>
            </>
          ) : (
            <>
              <p className="onboarding-warning-title">Une info avant de continuer</p>
              <p className="onboarding-warning-text">
                Dis-nous l'orientation de ton appartement pour vérifier si cette plante s'y plaira.
              </p>
            </>
          )}
          <div className="onboarding-warning-actions">
            <PrimaryButton onClick={() => createPlant(pending.name, pending.speciesInfo)}>
              Continuer quand même
            </PrimaryButton>
            {pending.warning === 'incompatible' ? (
              <SecondaryButton onClick={() => navigate('/logement')}>
                Voir des plantes adaptées
              </SecondaryButton>
            ) : (
              <SecondaryButton onClick={() => navigate('/logement')}>
                Renseigner mon logement
              </SecondaryButton>
            )}
          </div>
        </div>
      </PhoneFrame>
    )
  }

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="onboarding-hero">
        <PlantIllustration />
      </div>
      <div className="onboarding-headline">
        <h1>Ajoute ta première plante</h1>
        <p>Pas de compte à créer, pas de formulaire — juste une photo ou un nom.</p>
      </div>

      <div className="onboarding-spacer" />

      {showNameField ? (
        <form className="onboarding-name-form" onSubmit={handleNameSubmit}>
          <input
            autoFocus
            type="text"
            className="onboarding-name-input"
            placeholder="Ex : Pothos, Monstera, Cactus…"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <PrimaryButton type="submit">Continuer</PrimaryButton>
        </form>
      ) : (
        <div className="onboarding-actions">
          <PrimaryButton onClick={handlePhoto}>
            <CameraIcon />
            Prendre une photo
          </PrimaryButton>
          <SecondaryButton onClick={() => setShowNameField(true)}>
            Taper le nom de ma plante
          </SecondaryButton>
        </div>
      )}

      <div className="onboarding-fallback">
        <button type="button" className="onboarding-fallback-link" onClick={handleDontKnow}>
          Je ne sais pas ce que c'est
        </button>
      </div>
    </PhoneFrame>
  )
}
