import { ChevronLeftIcon, ChevronRightIcon, KebabIcon } from './icons'
import './ui.css'

export function PhoneFrame({ children, variant }) {
  return (
    <div className={`phone-frame${variant ? ` phone-frame--${variant}` : ''}`}>{children}</div>
  )
}

export function StatusBar({ inverse = false }) {
  return (
    <div className={`status-bar${inverse ? ' status-bar--inverse' : ''}`}>
      <span className="status-bar-time">9:41</span>
    </div>
  )
}

export function NavBar({ title, onBack, onMenu }) {
  return (
    <div className="nav-bar">
      {onBack ? (
        <button type="button" className="nav-bar-icon-btn" onClick={onBack} aria-label="Retour">
          <ChevronLeftIcon />
        </button>
      ) : (
        <span className="nav-bar-icon-spacer" />
      )}
      <span className="nav-bar-title">{title}</span>
      {onMenu ? (
        <button type="button" className="nav-bar-icon-btn" onClick={onMenu} aria-label="Menu">
          <KebabIcon />
        </button>
      ) : (
        <span className="nav-bar-icon-spacer" />
      )}
    </div>
  )
}

export function PrimaryButton({ children, ...props }) {
  return (
    <button type="button" className="btn btn-primary" {...props}>
      {children}
    </button>
  )
}

export function SecondaryButton({ children, ...props }) {
  return (
    <button type="button" className="btn btn-secondary" {...props}>
      {children}
    </button>
  )
}

export function StatusBadge({ children }) {
  return <span className="badge-status">{children}</span>
}

export function CtaBar({ children }) {
  return <div className="cta-bar">{children}</div>
}

export function SignalRow({ icon, title, description }) {
  return (
    <div className="signal-row">
      <span className="icon-badge-circle">{icon}</span>
      <div className="signal-row-body">
        <p className="signal-row-title">{title}</p>
        <p className="signal-row-desc">{description}</p>
      </div>
    </div>
  )
}

export function MetaRow({ icon, children }) {
  return (
    <div className="meta-row">
      {icon}
      <span className="meta-row-text">{children}</span>
    </div>
  )
}

export function ProtocolStep({ number, title, description }) {
  return (
    <div className="protocol-step">
      <span className="step-badge-primary">{number}</span>
      <div className="protocol-step-body">
        <p className="protocol-step-title">{title}</p>
        <p className="protocol-step-desc">{description}</p>
      </div>
    </div>
  )
}

export function ConfidenceBadge({ level }) {
  const label =
    level === 'probable' ? 'Confiance : probable' : level === 'possible' ? 'Confiance : possible' : 'Confiance : incertaine'
  return (
    <span className={`confidence-badge confidence-badge--${level}`}>
      <span className="confidence-dot" />
      {label}
    </span>
  )
}

export function EyebrowLabel({ children }) {
  return <p className="eyebrow-label">{children}</p>
}

// Regroupe des ActionRow dans une carte à bord unique, façon liste de réglages —
// remplace une pile de liens soulignés par un groupe d'actions lisible en un coup d'œil.
export function ActionCard({ children }) {
  return <div className="action-card">{children}</div>
}

export function ActionRow({ icon, label, description, muted = false, onClick }) {
  return (
    <button
      type="button"
      className={`action-row${muted ? ' action-row--muted' : ''}`}
      onClick={onClick}
    >
      <span className="action-row-icon">{icon}</span>
      <span className="action-row-body">
        <span className="action-row-label">{label}</span>
        {description && <span className="action-row-desc">{description}</span>}
      </span>
      <ChevronRightIcon color="var(--color-ink)" size={16} />
    </button>
  )
}

// Tuile compacte icône + libellé, pour une rangée d'accès rapides (façon quick actions).
// Reste monochrome (icône sur fond surface-soft) — cohérent avec "La règle du monochrome"
// de DESIGN.md : la couleur n'habille jamais un contrôle.
export function QuickActionTile({ icon, label, onClick }) {
  return (
    <button type="button" className="quick-action-tile" onClick={onClick}>
      <span className="quick-action-icon">{icon}</span>
      <span className="quick-action-label">{label}</span>
    </button>
  )
}
