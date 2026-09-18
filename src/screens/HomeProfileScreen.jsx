import { useNavigate } from 'react-router-dom'
import { usePlants } from '../context/PlantsContext'
import { SPECIES_CATALOG, ORIENTATION_LIGHT_LEVEL } from '../data/plantsCatalog'
import { PhoneFrame, StatusBar, NavBar, EyebrowLabel } from '../components/ui'
import './HomeProfileScreen.css'

const ORIENTATIONS = [
  { key: 'nord', label: 'Nord', hint: 'Lumière indirecte faible' },
  { key: 'est', label: 'Est', hint: 'Lumière du matin, moyenne' },
  { key: 'ouest', label: 'Ouest', hint: "Lumière d'après-midi, moyenne" },
  { key: 'sud', label: 'Sud', hint: 'Lumière directe, élevée' },
]

const LIGHT_RANK = { faible: 0, moyenne: 1, élevée: 2 }

// FEAT-05 (US-10) — Saisir le profil lumineux de son logement. Pas de maquette Paper : mise en
// page dérivée de DESIGN.md (mêmes cartes/boutons que le reste de l'app). Accessible depuis "Mon
// jardin", ne bloque jamais l'usage de l'app si elle n'est pas renseignée.
export default function HomeProfileScreen() {
  const { homeProfile, setHomeProfile } = usePlants()
  const navigate = useNavigate()

  const compatibleSpecies = homeProfile
    ? Object.values(SPECIES_CATALOG).filter(
        (s) => LIGHT_RANK[s.lightNeed] <= LIGHT_RANK[homeProfile.lightLevel],
      )
    : []

  return (
    <PhoneFrame>
      <StatusBar />
      <NavBar title="Mon jardin" onBack={() => navigate('/')} />

      <div className="profile-content">
        <h1 className="profile-title">Orientation de ton logement</h1>
        <p className="profile-subtitle">
          Aide-nous à savoir quelle lumière tes plantes reçoivent — jamais obligatoire.
        </p>

        <div className="profile-orientation-grid">
          {ORIENTATIONS.map((o) => (
            <button
              key={o.key}
              type="button"
              className={`profile-orientation-btn${homeProfile?.orientation === o.key ? ' profile-orientation-btn--active' : ''}`}
              onClick={() => setHomeProfile(o.key, ORIENTATION_LIGHT_LEVEL[o.key])}
            >
              <span className="profile-orientation-label">{o.label}</span>
              <span className="profile-orientation-hint">{o.hint}</span>
            </button>
          ))}
        </div>

        {homeProfile && (
          <div className="profile-recommendations">
            <EyebrowLabel>PLANTES COMPATIBLES</EyebrowLabel>
            {compatibleSpecies.length === 0 ? (
              <p className="profile-empty">
                Aucune espèce de notre catalogue ne correspond encore à ce profil.
              </p>
            ) : (
              <ul className="profile-species-list">
                {compatibleSpecies.map((s) => (
                  <li key={s.name} className="profile-species-item">
                    <p className="profile-species-name">{s.name}</p>
                    <p className="profile-species-reason">
                      Besoin de lumière {s.lightNeed} — compatible avec une exposition{' '}
                      {homeProfile.orientation}.
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </PhoneFrame>
  )
}
