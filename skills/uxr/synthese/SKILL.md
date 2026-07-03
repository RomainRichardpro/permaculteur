---
name: uxr-synthese
description: Synthétise un corpus d'entretiens utilisateurs en une synthèse thématique traçable. À utiliser quand on doit dégager les pain points, besoins, motivations et freins d'interviews UXR, avec verbatims sourcés. Ne synthétise jamais sans grille d'analyse validée.
---

# Synthèse d'entretiens UXR

Objectif : transformer un corpus d'entretiens bruts en une synthèse thématique
fidèle, où chaque constat est traçable à un verbatim.

## Pré-requis : une grille d'analyse validée

Ne commence pas sans grille. Si elle n'existe pas, propose des axes de codage et
fais-les valider avant de coder. Axes typiques :
- **Pain points** (frictions, irritants, blocages)
- **Besoins** explicites et latents
- **Motivations** / déclencheurs
- **Freins** / objections
- **Contexte d'usage** (quand, où, avec quoi)
- **Verbatims marquants**

## Méthode

1. **Extraire** le texte de chaque entretien (corpus complet, pas un échantillon).
2. **Coder** : pour chaque entretien, repérer les passages relevant de chaque axe
   et noter le verbatim + le fichier source.
3. **Regrouper** par thème transverse (affinity mapping mental) : rapprocher les
   verbatims qui disent la même chose.
4. **Quantifier qualitativement** : indiquer la fréquence ("10/16 interviewés"),
   jamais de pourcentage statistiquement significatif sur un échantillon qualitatif.
5. **Hiérarchiser** : du thème le plus partagé / le plus douloureux au plus marginal.

## Livrable : `knowledge/uxr/outputs/synthese.md`

```markdown
# Synthèse des entretiens — [contexte]

## Méthode
Corpus : N entretiens. Grille : [axes]. Date : [date].

## Thèmes (du plus partagé au plus marginal)

### 1. [Titre du thème] — X/N interviewés
**Constat :** [1-2 phrases descriptives, factuelles]
**Verbatims :**
- « … » — entretien_Prenom_X.docx
- « … » — entretien_Prenom_Y.docx
**Implication :** [pour PM / design, sans trancher la décision]

### 2. …
```

## Garde-fous

- Tout constat = au moins 1 verbatim cité avec sa source.
- Si la donnée manque : écris « non couvert par les entretiens » plutôt que d'inventer.
- Reste descriptif : rapporte ce que les gens disent/font, pas ce que l'équipe espère.
- N'éclaire pas la décision produit/design — signale-la, ne la prends pas.
