---
name: uxr-export-html
description: Génère une version HTML des personas pour présentation ou partage. Ne s'exécute jamais automatiquement — uniquement après validation explicite de l'utilisateur.
---

## Objectif

Produire un fichier HTML autonome et lisible par n'importe qui (designer, PM, stakeholder) à partir de `personas.md`.

---

## Prérequis stricts

- **`personas.md` doit exister et avoir été validé** par l'utilisateur.
- **Un OUI explicite** de l'utilisateur est requis avant d'appeler cette skill.
- Ne jamais enchaîner automatiquement après `uxr-personas`.

---

## Format de sortie — `personas.html`

Fichier HTML **autonome** (pas de dépendance externe, pas de CDN).

### Structure de la page

En-tête : titre du projet + date de génération
Une section par persona :

Prénom + tagline comportementale
Contexte
Motivations profondes
Comportements clés
Douleurs & frustrations
Rapport à la technologie
Ce persona N'EST PAS


Pied de page : nombre d'entretiens analysés + mention "Données issues de recherche qualitative"


### Contraintes visuelles

- **Lisible sans CSS framework** : styles inline ou `<style>` embarqué uniquement.
- **Pas d'images** générées ou placeholder — texte seul.
- **Mode sombre automatique** via `@media (prefers-color-scheme: dark)`.
- **Impression propre** : `@media print` inclus, pas de couleurs de fond à l'impression.
- Un persona = une carte visuellement distincte.

---

## Garde-fous

- **Aucun contenu inventé.** Le HTML ne fait que reformater `personas.md` — pas d'enrichissement, pas de reformulation.
- **Pas de données personnelles** des participants (noms réels, entreprises, lieux identifiants).
- **Le fichier est autonome** : il doit s'ouvrir correctement sans serveur, sans connexion internet.
- Si `personas.md` est incomplet ou non validé, bloquer et signaler à l'utilisateur.