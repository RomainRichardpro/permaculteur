---
name: uxr-synthese
description: Produit une synthèse thématique des entretiens codés. Chaque thème est ancré sur des verbatims sourcés et une fréquence. Ne contient aucune recommandation produit.
---

## Objectif

Transformer les verbatims codés en une synthèse thématique lisible, traçable et sans interprétation excessive.

---

## Format de sortie — `synthese.md`

### En-tête
- Date d'analyse
- Nombre d'entretiens traités
- Axes de la grille appliquée

### Corps — un bloc par thème
[Nom du thème]
Fréquence : X/16

Axes de codage couverts : [liste]
Ce qu'on observe :

Résumé descriptif en 3-5 phrases. Pas de "il faudrait", pas de solution.
Verbatims représentatifs :

"[Citation exacte]" — Entretien N°X
"[Citation exacte]" — Entretien N°Y

Points de tension ou contradictions :

Si des entretiens divergent sur ce thème, les noter ici.

### Fin de document
- Liste des thèmes **non couverts** ou **sous-représentés** (< 3/16)
- Questions ouvertes restantes pour le PM / designer

---

## Garde-fous

- **Minimum 1 verbatim sourcé par thème.** Si aucun verbatim disponible, le thème est retiré.
- **Pas de pourcentages.** Toujours `X/16`, jamais `62%`.
- **Pas de recommandations produit.** Les opportunités vont dans `jobs-to-be-done.md`, pas ici.
- **Pas de cherry-picking.** Les contradictions et signaux faibles sont inclus, pas effacés.


