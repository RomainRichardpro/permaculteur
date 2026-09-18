import { useNavigate, useParams } from 'react-router-dom'
import { usePlant, usePlants } from '../context/PlantsContext'
import { PhoneFrame, StatusBar, NavBar, PrimaryButton, ActionCard, ActionRow } from '../components/ui'
import { BellIcon } from '../components/icons'
import './AlertsScreen.css'

// US-07 — Désactiver les notifications pour une plante spécifique. L'artboard Paper (H1-0) montre
// aussi une annotation designer ("Depuis l'action « Gérer » de la notification — sans ouvrir
// l'app") : c'est une note de documentation pour cet artboard, pas un texte produit, donc elle
// n'est pas reprise ici — seul le toggle fonctionnel l'est.
export default function AlertsScreen() {
  const { plantId } = useParams()
  const plant = usePlant(plantId)
  const { setNotificationsEnabled } = usePlants()
  const navigate = useNavigate()

  if (!plant) {
    return (
      <PhoneFrame>
        <StatusBar />
        <div className="alerts-not-found">
          <p>Cette plante n'existe plus.</p>
          <PrimaryButton onClick={() => navigate('/')}>Retour au jardin</PrimaryButton>
        </div>
      </PhoneFrame>
    )
  }

  return (
    <PhoneFrame>
      <StatusBar />
      <NavBar title="Gérer les alertes" onBack={() => navigate(`/plants/${plant.id}`)} />

      <div className="alerts-content">
        <div className="alerts-toggle-row">
          <div className="alerts-toggle-copy">
            <p className="alerts-toggle-title">Notifications — {plant.name}</p>
            <p className="alerts-toggle-desc">Je gère déjà l'arrosage moi-même</p>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={plant.notificationsEnabled}
            className={`alerts-toggle${plant.notificationsEnabled ? ' alerts-toggle--on' : ''}`}
            onClick={() => setNotificationsEnabled(plant.id, !plant.notificationsEnabled)}
          >
            <span className="alerts-toggle-thumb" />
          </button>
        </div>

        <div className="alerts-preview-wrap">
          <ActionCard>
            <ActionRow
              icon={<BellIcon />}
              label="Aperçu de la notification"
              description="Voir ce que reçoit l'écran verrouillé"
              onClick={() => navigate(`/plants/${plant.id}/notification`)}
            />
          </ActionCard>
        </div>
      </div>
    </PhoneFrame>
  )
}
