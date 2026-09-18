# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + Vite (SPA), mobile-first. Choisi car les écrans du fil rouge (Paper, fichier "Permaculteur") sont une vraie appli multi-écrans avec navigation et états interactifs (bouton "Arrosé" à plusieurs états, onboarding en plusieurs étapes, gestion des alertes) — du HTML statique gérerait mal cette interactivité. Reste "web" et non natif : cohérent avec le README ("app web mobile-first").
Déploiement cible : Vercel/Netlify, pour avoir un lien partageable après la session de formation.

## Users

Deux personas primaires ciblés en v1 (issus de 16 entretiens, `knowledge/uxr/outputs/personas.md`) :
- **Léa, la débutante** (22-30 ans, <10 plantes, <1 an de pratique, appartement urbain peu lumineux, découverte via TikTok/Instagram) : veut ne pas tuer ses plantes, avec le moins de friction et de jargon possible.
- **Sophie, la passionnée en progression** (30-40 ans, 10-25 plantes, 4-7 ans de pratique, routine hebdomadaire structurée) : veut un diagnostic expert fiable et monter en compétence, prête à payer pour ça (~20€/an cités).

**Explicitement exclu de la v1** : Jean, le collectionneur exigeant (30+ plantes, besoins taxonomiques/scientifiques avancés — GBIF, Kew) — décision de périmètre documentée dans `knowledge/pm/backlog.md`, pas un oubli.

## Product Purpose

Aider les utilisateurs de plantes d'intérieur à ne pas les laisser mourir, en remplaçant les rappels d'arrosage à fréquence fixe (cause d'abandon des apps concurrentes) par une éducation aux signaux réels de la plante et un diagnostic visuel fiable en cas de problème.

## Positioning

Le différenciateur n'est pas le rappel d'arrosage (10/16 interviewés ont abandonné une app à cause de notifications inadaptées — Greg, Planta, Happy Plant) mais le **diagnostic expert par photo**, avec un niveau de confiance affiché explicitement. C'est la feature que les concurrents n'offrent pas et pour laquelle une disposition à payer est confirmée (7/16 interviewés).

## Operating Context

- Ajout d'une plante : scan photo ou nom libre, sans saisie botanique obligatoire, sans création de compte pour la première valeur.
- Usage quotidien/hebdomadaire : vérification tactile/visuelle de la terre plutôt qu'un calendrier fixe.
- Diagnostic : prise de photo d'un symptôme → cause probable (maladie, carence, parasite, arrosage, lumière) → protocole de traitement.
- Notifications contextuelles avec micro-explication ("ton monstera a probablement soif : arrosé il y a 12 jours, il fait chaud cette semaine"), désactivables sans friction, jamais plus d'une par plante et par période pertinente.
- Écrans du fil rouge déjà maquettés dans Paper (fichier "Permaculteur", `01KY9Z036PGBWF48E2KB3A3NS5`) : fiche plante/arrosage (US-01), états du bouton Arrosé (US-02), diagnostic photo (US-03/04), onboarding première plante (US-05), notification écran verrouillé (US-06), gestion des alertes (US-07).

## Capabilities and Constraints

**Must have (v1)** — `knowledge/pm/backlog.md` :
- FEAT-01 Guide d'arrosage intelligent par plante (signaux observables, pas de fréquence fixe)
- FEAT-02 Diagnostic visuel des problèmes par photo (avec niveau de confiance affiché)
- FEAT-03 Onboarding zéro friction (première valeur < 30s, aucun champ obligatoire)
- FEAT-10 Notifications adaptatives contextuelles

**Should have** : mode vacances (FEAT-04), compatibilité plante/logement avant achat (FEAT-05), protocole anti-parasites (FEAT-06), guide d'observation progressive (FEAT-07), journal de suivi et post-mortem (FEAT-08).

**Could have** : partage/diagnostic collaboratif communautaire (FEAT-09), galerie esthétique (FEAT-11).

**Won't have (v1)** : données taxonomiques avancées / API botaniques (FEAT-12) — porté uniquement par le persona Jean, exclu de la v1.

**Contrainte non résolue** : la fiabilité du diagnostic photo dépend d'un choix technique (IA, base de données, validation humaine) non encore tranché — un diagnostic peu fiable crée plus de frustration qu'une absence de diagnostic, donc afficher un niveau de confiance explicite est non négociable.

## Evidence on Hand

- 16 entretiens utilisateurs bruts (`knowledge/uxr/raw-interviews/`) + synthèse thématique et JTBD (`knowledge/uxr/outputs/synthese.md`, `jobs-to-be-done.md`) — recherche qualitative réelle, verbatims sourcés.
- Personas et backlog priorisé MoSCoW (`knowledge/uxr/outputs/personas.md`, `knowledge/pm/backlog.md`).
- Maquettes existantes dans Paper (11 artboards, fichier "Permaculteur") couvrant les flux Must have (arrosage, diagnostic, onboarding, notifications/alertes).
- Pas de code applicatif existant à ce jour (aucun `package.json` dans le repo) : projet greenfield côté implémentation.
- Pas de témoignages, benchmarks ou données de pricing réels au-delà des montants cités en entretien (~20€/an) : ne pas fabriquer de preuve sociale ou de tarif définitif.

## Product Principles

1. Le diagnostic expert est le cœur de valeur, pas le rappel d'arrosage — ne jamais recentrer le produit sur des notifications à fréquence fixe.
2. Onboarding quasi nul : première valeur en moins de 30 secondes, aucun champ botanique obligatoire, pas de compte requis pour commencer.
3. Éduquer à l'observation (signaux réels, tactiles/visuels) plutôt que créer une dépendance aux notifications.
4. v1 resserrée sur Léa et Sophie ; ne pas complexifier l'expérience pour répondre aux besoins de Jean (hors scope, documenté).
5. Toute notification est explicable en une phrase et désactivable sans friction — jamais de spam.

## Accessibility & Inclusion

Aucune exigence spécifique documentée dans la recherche utilisateur à ce jour — à ne pas inventer.
