import { useNavigate, useParams } from 'react-router-dom'
import { usePlant, daysSinceWatered } from '../context/PlantsContext'
import { PhoneFrame, PrimaryButton } from '../components/ui'
import { LeafIcon } from '../components/icons'
import './NotificationPreviewScreen.css'

// US-06 — Aperçu de la notification d'arrosage contextualisée. Une vraie notification système
// (écran verrouillé) ne peut pas être déclenchée depuis une app web : cet écran en reproduit le
// rendu visuel (artboard GL-0) avec le texte contextuel calculé à partir des vraies données de
// la plante (jours depuis le dernier arrosage), pour vérifier que la logique de message tient.
export default function NotificationPreviewScreen() {
  const { plantId } = useParams()
  const plant = usePlant(plantId)
  const navigate = useNavigate()

  if (!plant) {
    return (
      <PhoneFrame variant="lockscreen">
        <div className="notif-empty">
          <p>Cette plante n'existe plus.</p>
        </div>
      </PhoneFrame>
    )
  }

  const days = daysSinceWatered(plant)
  const wouldTrigger = plant.notificationsEnabled && days !== null && days >= plant.wateringThresholdDays

  return (
    <PhoneFrame variant="lockscreen">
      <div className="lock-time">
        <p className="lock-date">Mardi 28 juillet</p>
        <p className="lock-clock">9:41</p>
      </div>

      {wouldTrigger ? (
        <div className="notif-card">
          <span className="notif-card-icon">
            <LeafIcon />
          </span>
          <div className="notif-card-body">
            <div className="notif-card-head">
              <span className="notif-card-app">PERMACULTEUR</span>
              <span className="notif-card-time">maintenant</span>
            </div>
            <p className="notif-card-title">Ton {plant.name.toLowerCase()} a probablement soif</p>
            <p className="notif-card-desc">
              Tu l'as arrosé il y a {days} jours et il fait chaud cette semaine.
            </p>
          </div>
        </div>
      ) : (
        <div className="notif-card notif-card--muted">
          <p className="notif-card-title">
            {!plant.notificationsEnabled
              ? 'Notifications désactivées pour cette plante — aucune alerte ne serait envoyée.'
              : "Pas encore de raison d'alerter : l'arrosage est encore dans la fenêtre normale."}
          </p>
        </div>
      )}

      <div className="notif-actions">
        <PrimaryButton onClick={() => navigate(`/plants/${plantId}/alertes`)}>
          Gérer les alertes
        </PrimaryButton>
      </div>
    </PhoneFrame>
  )
}
