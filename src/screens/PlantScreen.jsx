import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  usePlant,
  usePlants,
  needsWater,
  daysSinceWatered,
} from '../context/PlantsContext'
import { GENERIC_SIGNALS } from '../data/plantsCatalog'
import {
  PhoneFrame,
  StatusBar,
  NavBar,
  PrimaryButton,
  SecondaryButton,
  StatusBadge,
  SignalRow,
  MetaRow,
  EyebrowLabel,
  ActionCard,
  ActionRow,
} from '../components/ui'
import {
  ClockIcon,
  CheckIcon,
  DropletIcon,
  LeafIcon,
  PlantIllustration,
  GuideIcon,
  CameraIcon,
  BugIcon,
  HistoryIcon,
  SparkleIcon,
  HeartOffIcon,
} from '../components/icons'
import './PlantScreen.css'

const SIGNAL_ICONS = {
  droplet: <DropletIcon />,
  leaf: <LeafIcon />,
}

const MILESTONE_OPTIONS = ['Nouvelle feuille', 'Refloraison', 'Autre progrès']

export default function PlantScreen() {
  const { plantId } = useParams()
  const plant = usePlant(plantId)
  const { recordWatering, addMilestone } = usePlants()
  const navigate = useNavigate()

  const [confirmOpen, setConfirmOpen] = useState(false)
  const [justWatered, setJustWatered] = useState(false)
  const [milestonePickerOpen, setMilestonePickerOpen] = useState(false)
  const [milestoneCelebration, setMilestoneCelebration] = useState(null)

  useEffect(() => {
    if (!justWatered) return
    const timer = setTimeout(() => setJustWatered(false), 1600)
    return () => clearTimeout(timer)
  }, [justWatered])

  useEffect(() => {
    if (!milestoneCelebration) return
    const timer = setTimeout(() => setMilestoneCelebration(null), 2000)
    return () => clearTimeout(timer)
  }, [milestoneCelebration])

  if (!plant) {
    return (
      <PhoneFrame>
        <StatusBar />
        <div className="plant-not-found">
          <p>Cette plante n'existe plus.</p>
          <PrimaryButton onClick={() => navigate('/')}>Retour au jardin</PrimaryButton>
        </div>
      </PhoneFrame>
    )
  }

  const days = daysSinceWatered(plant)
  const showBadge = needsWater(plant)
  const isLost = plant.status === 'lost'

  // US-02 : gère les trois issues possibles de recordWatering — enregistrement direct,
  // demande de confirmation (double enregistrement < 2h), ou confirmation forcée depuis la modale.
  function handleWaterClick() {
    const result = recordWatering(plant.id)
    if (result === 'confirm-needed') {
      setConfirmOpen(true)
      return
    }
    if (result === 'recorded') {
      setJustWatered(true)
    }
  }

  function handleConfirmYes() {
    recordWatering(plant.id, { force: true })
    setConfirmOpen(false)
    setJustWatered(true)
  }

  // US-16 : enregistre un milestone positif et affiche un retour visuel bienveillant.
  function handlePickMilestone(label) {
    addMilestone(plant.id, label)
    setMilestonePickerOpen(false)
    setMilestoneCelebration(label)
  }

  return (
    <PhoneFrame>
      <StatusBar />
      <NavBar
        title="Mon jardin"
        onBack={() => navigate('/')}
        onMenu={() => navigate(`/plants/${plant.id}/alertes`)}
      />

      <div className="plant-photo-frame">
        <PlantIllustration />
      </div>

      <div className="plant-title-row">
        <div className="plant-title-line">
          <h1>{plant.name}</h1>
          {showBadge && !isLost && <StatusBadge>À ARROSER</StatusBadge>}
        </div>
        {plant.species && <p className="plant-species">{plant.species}</p>}
      </div>

      {isLost ? (
        <div className="plant-lost-banner">
          <p className="plant-lost-title">Cette plante a été marquée comme perdue</p>
          <button
            type="button"
            className="plant-lost-link"
            onClick={() => navigate(`/plants/${plant.id}/post-mortem`)}
          >
            Revoir l'analyse
          </button>
        </div>
      ) : (
        <>
          <div className="plant-section-header">
            <EyebrowLabel>SIGNAUX OBSERVABLES</EyebrowLabel>
            <h2>Arrosage</h2>
          </div>

          {plant.signals ? (
            plant.signals.map((signal) => (
              <SignalRow
                key={signal.title}
                icon={SIGNAL_ICONS[signal.icon]}
                title={signal.title}
                description={signal.description}
              />
            ))
          ) : (
            <>
              <div className="plant-generic-signal">
                <span className="icon-badge-circle plant-generic-signal-icon">
                  <DropletIcon />
                </span>
                <div className="signal-row-body">
                  <p className="signal-row-title">{GENERIC_SIGNALS.title}</p>
                  <p className="signal-row-desc">{GENERIC_SIGNALS.description}</p>
                </div>
              </div>
              <div className="plant-generic-info">
                ℹ Conseils adaptés à l'espèce une fois celle-ci identifiée
              </div>
            </>
          )}

          {plant.lastWateredAt ? (
            <MetaRow icon={<ClockIcon />}>
              Dernier arrosage : {days === 0 ? "aujourd'hui" : `il y a ${days} jour${days > 1 ? 's' : ''}`}
            </MetaRow>
          ) : (
            <MetaRow icon={<ClockIcon muted />}>
              <span className="plant-no-history">Aucun historique</span>
            </MetaRow>
          )}
        </>
      )}

      <div className="plant-tools">
        {!isLost && (
          <div className="plant-tools-group">
            <EyebrowLabel>UN SOUCI SUR CETTE PLANTE ?</EyebrowLabel>
            <ActionCard>
              <ActionRow
                icon={<GuideIcon />}
                label="Guide d'observation"
                description="Comprendre un symptôme en quelques secondes"
                onClick={() => navigate('/guides', { state: { plantId: plant.id } })}
              />
              <ActionRow
                icon={<CameraIcon color="var(--color-ink)" />}
                label="Diagnostic photo"
                description="Cause probable + protocole en moins de 5 secondes"
                onClick={() => navigate(`/plants/${plant.id}/diagnostic`)}
              />
              <ActionRow
                icon={<BugIcon />}
                label="Traiter des parasites"
                description="Cochenilles, araignées rouges, pucerons…"
                onClick={() => navigate(`/plants/${plant.id}/parasites`)}
              />
            </ActionCard>
          </div>
        )}

        <div className="plant-tools-group">
          <EyebrowLabel>SUIVI</EyebrowLabel>
          <ActionCard>
            <ActionRow
              icon={<HistoryIcon />}
              label="Historique"
              onClick={() => navigate(`/plants/${plant.id}/historique`)}
            />
            {!isLost && (
              <ActionRow
                icon={<SparkleIcon />}
                label="Nouveau milestone"
                description="Nouvelle feuille, refloraison…"
                onClick={() => setMilestonePickerOpen(true)}
              />
            )}
          </ActionCard>
        </div>

        {!isLost && (
          <button
            type="button"
            className="plant-lost-trigger"
            onClick={() => navigate(`/plants/${plant.id}/post-mortem`)}
          >
            <HeartOffIcon size={14} />
            Marquer cette plante comme perdue
          </button>
        )}
      </div>

      <div className="plant-spacer" />

      {!isLost && (
        <div className="cta-bar">
          {justWatered ? (
            <div className="btn btn-primary plant-watered-confirmation">
              <CheckIcon />
              Arrosage enregistré
            </div>
          ) : (
            <PrimaryButton onClick={handleWaterClick}>Marquer comme arrosé</PrimaryButton>
          )}
        </div>
      )}

      {confirmOpen && (
        <div className="plant-modal-overlay" role="dialog" aria-modal="true">
          <div className="plant-modal">
            <p className="plant-modal-text">
              Tu as déjà enregistré un arrosage aujourd'hui — le confirmer quand même ?
            </p>
            <div className="plant-modal-actions">
              <button
                type="button"
                className="btn btn-secondary plant-modal-btn"
                onClick={() => setConfirmOpen(false)}
              >
                Non
              </button>
              <button
                type="button"
                className="btn btn-primary plant-modal-btn"
                onClick={handleConfirmYes}
              >
                Oui
              </button>
            </div>
          </div>
        </div>
      )}

      {milestonePickerOpen && (
        <div className="plant-modal-overlay" role="dialog" aria-modal="true">
          <div className="plant-modal">
            <p className="plant-modal-text">Qu'est-ce que tu veux célébrer ?</p>
            <div className="plant-milestone-options">
              {MILESTONE_OPTIONS.map((label) => (
                <button
                  key={label}
                  type="button"
                  className="btn btn-secondary plant-milestone-option"
                  onClick={() => handlePickMilestone(label)}
                >
                  {label}
                </button>
              ))}
            </div>
            <SecondaryButton onClick={() => setMilestonePickerOpen(false)}>Annuler</SecondaryButton>
          </div>
        </div>
      )}

      {milestoneCelebration && (
        <div className="plant-celebration">
          🎉 {milestoneCelebration} enregistrée — bravo !
        </div>
      )}
    </PhoneFrame>
  )
}
