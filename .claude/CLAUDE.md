# Projet — Équipe d'agents produit

Ce dépôt héberge une équipe d'agents spécialisés (UXR, PM, design, dev, tracking).
Chaque agent est défini dans `.claude/agents/`. La connaissance partagée vit dans
`knowledge/`, les compétences réutilisables dans `skills/`.

## Structure

```
.claude/agents/        définitions des agents
knowledge/uxr/         entretiens bruts + livrables UXR
knowledge/pm/          matière PM
knowledge/design/      matière design
skills/                compétences réutilisables par domaine
```

## Agents disponibles

| Agent | Rôle |
|-------|------|
| `agent-uxr` | Analyse les entretiens, les synthétise, construit des personas |
| `agent-pm` | (à définir) |
| `agent-design` | (à définir) |
| `agent-dev` | (à définir) |
| `agent-tracking` | (à définir) |

## Lancer l'agent UXR

L'agent UXR analyse les 16 entretiens de `knowledge/uxr/raw-interviews/`, en
produit une synthèse thématique et construit des personas. Il **co-construit
d'abord la grille d'analyse** : il ne synthétise jamais à l'aveugle.

Pour le lancer, utilise la slash command dédiée :

> /uxr

(optionnellement avec un périmètre : `/uxr focus sur l'onboarding`)

ou en langage naturel (Claude routera vers `agent-uxr`) :

> Lance l'agent UXR pour analyser les entretiens, les synthétiser et créer les personas.

Déroulé attendu :
1. L'agent cadre les objectifs et **propose une grille d'analyse à valider**.
2. Après validation, il code les verbatims des 16 entretiens.
3. Il écrit dans `knowledge/uxr/outputs/` : `grille-analyse.md`, `synthese.md`,
   `personas.md`.

Chaque insight est tracé à un verbatim sourcé — pas d'invention, pas de décision
produit/design (l'agent éclaire, il ne tranche pas).
