# Arborescence de l'app — Permaculteur

Date : 2026-07-24
Inputs : `knowledge/pm/backlog.md`, `knowledge/pm/us.md`, `knowledge/uxr/outputs/jobs-to-be-done.md`
Méthode : dérivation des écrans/modules à partir des features priorisées (MoSCoW) et des User Stories. Traçable jusqu'aux JTBD des 16 entretiens UXR.

Personas cibles v1 : Léa (débutante) et Sophie (passionnée). Jean (collectionneur) exclu de la v1 (voir FEAT-12 en fin de document).

---

## Légende priorité

- **MUST HAVE** — noyau minimum viable
- **SHOULD HAVE** — valeur importante, produit utilisable sans elle
- **COULD HAVE** — confort, non bloquant
- **WON'T HAVE (v1)** — exclu explicitement de la v1

---

## Permaculteur (app mobile-first)

### Onboarding — `MUST` — FEAT-03

Ajout de la première plante en moins de 30 secondes, sans création de compte (US-05). Écran d'entrée unique de l'app.

### Mon jardin (Accueil) — `MUST` — Hub de navigation

Liste des plantes de l'utilisateur — écran d'accueil après onboarding.

- **Vue galerie** — `COULD` — FEAT-11
- **CTA « Ajouter une plante »** → Onboarding
- **Raccourci « Partir en vacances »** → Mode vacances

### Fiche plante — `MUST` — Hub central, par plante

Écran consulté quotidiennement. Concentre les 6 modules ci-dessous.

- **Arrosage** — `MUST` — FEAT-01
  Signaux d'arrosage observables (US-01) · bouton « Arrosé » (US-02)
- **Diagnostic photo** — `MUST` — FEAT-02
  Capture + cause probable (US-03) · protocole de traitement (US-04)
- **Anti-parasites** — `SHOULD` — FEAT-06
  Identification du parasite (US-12) · suivi d'efficacité (US-13)
- **Journal & historique** — `SHOULD` — FEAT-08
  Timeline des soins (US-15) · milestones positifs (US-16) · post-mortem non-jugeant (US-17)
- **Notifications (par plante)** — `MUST` — FEAT-10
  Alerte contextuelle expliquée (US-06) · désactivation en 1 tap (US-07)
- **Guides liés au symptôme** — `SHOULD` — FEAT-07
  Mini-guide visuel ≤ 5 écrans par symptôme, ouvert depuis la fiche (US-14)

### Mode vacances — `SHOULD` — FEAT-04

2e job le plus partagé (14/16 interviewés) — anxiété liée aux absences.

- **Plan de préparation (checklist par plante)** — US-08
- **Fiche plant sitter partageable (lien/PDF)** — US-09

### Profil logement — `SHOULD` — FEAT-05

Accessible depuis les Paramètres ou lors de l'ajout d'une plante. Ne bloque jamais l'accès à l'app.

- **Saisie du profil lumineux (orientation, exposition)** — US-10
- **Alerte d'incompatibilité à l'ajout d'une plante** — US-11

### Bibliothèque de guides — `SHOULD` — FEAT-07

Accès libre aux mini-guides par symptôme, indépendamment de la fiche plante — exploration hors contexte.

### Communauté — `COULD` — FEAT-09

⚠ Activation conditionnée à un seuil minimum d'utilisateurs actifs (risque de cold start / posts sans réponse).

- **Diagnostic collaboratif (post photo + réponses)** — US-18

### Compte / Paramètres — Transverse, non bloquant

Proposé (jamais imposé) après la première valeur (FEAT-03). Données stockées localement jusqu'à création de compte.

---

## Exclu de la v1

~~Données taxonomiques avancées & API botaniques (GBIF)~~ — FEAT-12 — Won't have (v1) — spécifique au persona Jean (collectionneur), hors scope v1. Note architecturale : si une v2 cible Jean, l'architecture backend doit anticiper cette extension.
