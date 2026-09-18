// Icônes inline, reproduites depuis le fichier Paper "Permaculteur" (chemins SVG extraits des artboards).

export function DropletIcon({ color = 'var(--color-ink)', size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 1C9 1 3 8 3 12A6 6 0 0 0 15 12C15 8 9 1 9 1Z" fill={color} />
    </svg>
  )
}

export function LeafIcon({ color = 'var(--color-ink)', size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 16C2 8 9 2 16 2C16 9 10 16 2 16Z" fill={color} />
      <path
        d="M4 15C7 12 10 9 15 4"
        stroke="var(--color-canvas)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  )
}

export function ClockIcon({ color = 'var(--color-ink)', size = 16, muted = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={{ opacity: muted ? 0.4 : 1 }}
    >
      <circle cx="8" cy="8" r="6.5" stroke={color} strokeWidth="1.3" />
      <path d="M8 5V8L10 9.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function CheckIcon({ color = 'var(--color-on-primary)', size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8.5L6.5 12L13 4.5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ChevronLeftIcon({ color = 'var(--color-ink)', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M12.5 4L6.5 10L12.5 16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CloseIcon({ color = 'var(--color-on-primary)', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 4L16 16M16 4L4 16"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function KebabIcon({ color = 'var(--color-ink)', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="4" cy="10" r="1.5" fill={color} />
      <circle cx="10" cy="10" r="1.5" fill={color} />
      <circle cx="16" cy="10" r="1.5" fill={color} />
    </svg>
  )
}

export function CameraIcon({ color = 'var(--color-on-primary)', size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M2 6.5C2 5.67 2.67 5 3.5 5H5.5L6.2 3.6C6.4 3.2 6.8 3 7.2 3H10.8C11.2 3 11.6 3.2 11.8 3.6L12.5 5H14.5C15.3 5 16 5.67 16 6.5V13.5C16 14.3 15.3 15 14.5 15H3.5C2.67 15 2 14.3 2 13.5V6.5Z"
        stroke={color}
        strokeWidth="1.4"
      />
      <circle cx="9" cy="9.5" r="3" stroke={color} strokeWidth="1.4" />
    </svg>
  )
}

export function BugIcon({ color = 'var(--color-ink)', size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <ellipse cx="9" cy="10.5" rx="4" ry="5" fill={color} />
      <circle cx="9" cy="4.5" r="1.8" fill={color} />
      <path d="M3 7L1.5 5.5M15 7L16.5 5.5M3 11H1M17 11H15M3.5 14.5L2 16M14.5 14.5L16 16" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function SparkleIcon({ color = 'var(--color-ink)', size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M9 1.5L10.4 6.6L15.5 8L10.4 9.4L9 14.5L7.6 9.4L2.5 8L7.6 6.6L9 1.5Z"
        fill={color}
      />
    </svg>
  )
}

export function HistoryIcon({ color = 'var(--color-ink)', size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3 6A6.5 6.5 0 1 1 3.5 12" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M3 3V6.5H6.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 6V9.5L11.5 11" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function HeartOffIcon({ color = 'var(--color-ink)', size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M9 15.5C9 15.5 2.5 11.5 2.5 6.8C2.5 4.6 4.2 3 6.2 3C7.4 3 8.4 3.6 9 4.5C9.6 3.6 10.6 3 11.8 3C13.8 3 15.5 4.6 15.5 6.8C15.5 8.1 14.8 9.4 13.8 10.5"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 4L14 15" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function GuideIcon({ color = 'var(--color-ink)', size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M3 3.5C4.2 2.8 6.6 2.6 9 3.6C11.4 2.6 13.8 2.8 15 3.5V13.5C13.8 12.8 11.4 12.6 9 13.6C6.6 12.6 4.2 12.8 3 13.5V3.5Z"
        stroke={color}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M9 3.6V13.6" stroke={color} strokeWidth="1.3" />
    </svg>
  )
}

export function ChevronRightIcon({ color = 'var(--color-ink)', size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M6 3L11 8L6 13"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BellIcon({ color = 'var(--color-ink)', size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M4 8C4 5.2 6.2 3 9 3C11.8 3 14 5.2 14 8V11L15.5 13H2.5L4 11V8Z"
        stroke={color}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M7 15C7.3 15.6 8.1 16 9 16C9.9 16 10.7 15.6 11 15" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function SuitcaseIcon({ color = 'var(--color-ink)', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="6.5" width="14" height="10" rx="1.5" stroke={color} strokeWidth="1.3" />
      <path d="M7.5 6.5V4.8C7.5 4.1 8 3.6 8.7 3.6H11.3C12 3.6 12.5 4.1 12.5 4.8V6.5" stroke={color} strokeWidth="1.3" />
      <path d="M3 11H17" stroke={color} strokeWidth="1.3" />
    </svg>
  )
}

export function SunIcon({ color = 'var(--color-ink)', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="3.6" stroke={color} strokeWidth="1.3" />
      <path
        d="M10 2.5V4.5M10 15.5V17.5M17.5 10H15.5M4.5 10H2.5M15.3 4.7L13.9 6.1M6.1 13.9L4.7 15.3M15.3 15.3L13.9 13.9M6.1 6.1L4.7 4.7"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Illustration de plante générique — reproduit la silhouette utilisée sur la fiche plante et l'onboarding.
export function PlantIllustration({ color = 'var(--color-primary)', size = 130 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 130 130" aria-hidden="true">
      <ellipse cx="65" cy="55" rx="9" ry="22" transform="rotate(-25 65 55)" fill={color} />
      <ellipse cx="65" cy="55" rx="9" ry="24" transform="rotate(5 65 55)" fill={color} />
      <ellipse cx="65" cy="55" rx="9" ry="22" transform="rotate(32 65 55)" fill={color} />
      <ellipse
        cx="65"
        cy="58"
        rx="8"
        ry="18"
        transform="rotate(-52 65 58)"
        fill={color}
        opacity="0.75"
      />
      <ellipse
        cx="65"
        cy="58"
        rx="8"
        ry="18"
        transform="rotate(58 65 58)"
        fill={color}
        opacity="0.75"
      />
      <path d="M46 92L84 92L79 116Q65 121 51 116Z" fill={color} />
    </svg>
  )
}
