import { useNavigate, useParams } from 'react-router-dom'
import { usePlant, usePlants } from '../context/PlantsContext'
import { PhoneFrame, StatusBar, NavBar, PrimaryButton, SecondaryButton } from '../components/ui'
import './PostMortemScreen.css'

// FEAT-08 (US-17) — Comprendre pourquoi une plante est morte. Ton absolument non-jugeant, se
// termine toujours sur une suggestion positive. Pas de maquette Paper pour cet écran.
export default function PostMortemScreen() {
  const { plantId } = useParams()
  const plant = usePlant(plantId)
  const { markAsLost } = usePlants()
  const navigate = useNavigate()

  if (!plant) {
    return (
      <PhoneFrame>
        <StatusBar />
        <div className="postmortem-not-found">
          <p>Cette plante n'existe plus.</p>
        </div>
      </PhoneFrame>
    )
  }

  if (plant.status === 'alive') {
    return (
      <PhoneFrame>
        <StatusBar />
        <NavBar title={plant.name} onBack={() => navigate(`/plants/${plant.id}`)} />
        <div className="postmortem-confirm">
          <p className="postmortem-confirm-title">Marquer {plant.name} comme perdue ?</p>
          <p className="postmortem-confirm-text">
            On regardera ensemble ce que les données peuvent nous apprendre — sans jugement, juste
            pour la prochaine fois.
          </p>
          <div className="postmortem-confirm-actions">
            <SecondaryButton onClick={() => navigate(`/plants/${plant.id}`)}>Annuler</SecondaryButton>
            <PrimaryButton onClick={() => markAsLost(plant.id)}>Confirmer la perte</PrimaryButton>
          </div>
        </div>
      </PhoneFrame>
    )
  }

  const { postMortem } = plant

  return (
    <PhoneFrame>
      <StatusBar />
      <NavBar title={plant.name} onBack={() => navigate('/')} />

      <div className="postmortem-content">
        <h1 className="postmortem-title">Ce qui s'est probablement passé</h1>

        {postMortem.hasEnoughHistory ? (
          <>
            <p className="postmortem-cause">{postMortem.cause}</p>
            <p className="postmortem-explanation">{postMortem.explanation}</p>
          </>
        ) : (
          <>
            <p className="postmortem-insufficient">
              Nous n'avons pas assez d'historique pour analyser précisément — plus tu enregistres,
              mieux on peut t'aider. Voici les causes les plus fréquentes de perte :
            </p>
            <ul className="postmortem-generic-list">
              {postMortem.causes.map((cause) => (
                <li key={cause}>{cause}</li>
              ))}
            </ul>
          </>
        )}

        <div className="postmortem-suggestion">
          <p className="postmortem-suggestion-title">La prochaine fois</p>
          <p className="postmortem-suggestion-text">{postMortem.suggestion}</p>
        </div>
      </div>
    </PhoneFrame>
  )
}
