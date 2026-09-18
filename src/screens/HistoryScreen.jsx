import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { usePlant } from '../context/PlantsContext'
import { PARASITE_CATALOG } from '../data/parasiteCatalog'
import { PhoneFrame, StatusBar, NavBar, SecondaryButton } from '../components/ui'
import './HistoryScreen.css'

const DEFAULT_VISIBLE_COUNT = 5

function formatEntry(entry) {
  switch (entry.type) {
    case 'water':
      return { title: 'Arrosage enregistré', detail: null }
    case 'diagnostic':
      return { title: 'Diagnostic photo', detail: `${entry.cause} (confiance ${entry.confidence})` }
    case 'milestone':
      return { title: entry.label, detail: null }
    case 'treatment-resolved':
      return { title: 'Traitement réussi', detail: PARASITE_CATALOG[entry.parasiteId]?.label }
    case 'treatment-unresolved':
      return { title: 'Traitement sans amélioration', detail: PARASITE_CATALOG[entry.parasiteId]?.label }
    default:
      return { title: entry.type, detail: null }
  }
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  })
}

// FEAT-08 (US-15) — Historique chronologique des soins d'une plante, timeline inversée (le plus
// récent en premier — l'ordre dans lequel PlantsContext journalise déjà chaque action). Pas de
// maquette Paper pour cet écran.
export default function HistoryScreen() {
  const { plantId } = useParams()
  const plant = usePlant(plantId)
  const navigate = useNavigate()
  const [showAll, setShowAll] = useState(false)

  if (!plant) {
    return (
      <PhoneFrame>
        <StatusBar />
        <div className="history-not-found">
          <p>Cette plante n'existe plus.</p>
        </div>
      </PhoneFrame>
    )
  }

  const visibleEntries = showAll ? plant.history : plant.history.slice(0, DEFAULT_VISIBLE_COUNT)

  return (
    <PhoneFrame>
      <StatusBar />
      <NavBar title={plant.name} onBack={() => navigate(`/plants/${plant.id}`)} />

      <div className="history-content">
        <h1 className="history-title">Historique</h1>

        {plant.history.length === 0 ? (
          <p className="history-empty">Aucune action enregistrée pour l'instant.</p>
        ) : (
          <>
            <ul className="history-list">
              {visibleEntries.map((entry, i) => {
                const { title, detail } = formatEntry(entry)
                return (
                  <li key={`${entry.at}-${i}`} className="history-item">
                    <span className="history-item-date">{formatDate(entry.at)}</span>
                    <span className="history-item-title">{title}</span>
                    {detail && <span className="history-item-detail">{detail}</span>}
                  </li>
                )
              })}
            </ul>

            {!showAll && plant.history.length > DEFAULT_VISIBLE_COUNT && (
              <SecondaryButton onClick={() => setShowAll(true)}>
                Afficher tout ({plant.history.length})
              </SecondaryButton>
            )}
          </>
        )}
      </div>
    </PhoneFrame>
  )
}
