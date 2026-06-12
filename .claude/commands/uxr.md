---
description: Lance l'agent UXR pour analyser les entretiens, les synthétiser et créer les personas
---

Utilise l'agent `agent-uxr` (via l'outil Task) pour traiter les entretiens de
`knowledge/uxr/raw-interviews/`.

Consigne pour l'agent :
1. Cadre les objectifs de recherche et **propose une grille d'analyse à valider
   avant de coder le moindre verbatim** (ne synthétise jamais à l'aveugle).
2. Après validation de la grille, extrais le texte des 16 `.docx`, code les
   verbatims, et produis dans `knowledge/uxr/outputs/` :
   - `grille-analyse.md`
   - `synthese.md` (thèmes + fréquences + verbatims sourcés)
   - `personas.md` (2 à 4 personas ancrés dans la donnée)
3. Chaque insight doit être traçable à un verbatim. Pas d'invention, pas de
   décision produit/design.

Arguments éventuels de l'utilisateur (périmètre, objectif particulier) : $ARGUMENTS
