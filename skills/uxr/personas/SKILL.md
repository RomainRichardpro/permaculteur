---
name: uxr-personas
description: Construit 2 à 3 personas ancrés dans la donnée à partir d'entretiens utilisateurs synthétisés. À utiliser après une synthèse UXR pour incarner les segments d'utilisateurs. Chaque persona doit s'appuyer sur des entretiens identifiés — pas de persona inventé.
---

# Construction de personas

Objectif : incarner les segments d'utilisateurs réels en 2 à 3 personas, chacun
ancré dans des entretiens identifiés. Un persona n'est pas un portrait imaginaire :
c'est une synthèse de comportements/objectifs récurrents observés.

## Pré-requis

Travaille à partir de la synthèse (`synthese.md`) et/ou des verbatims codés. Si la
synthèse n'existe pas, fais-la d'abord (skill `uxr-synthese`).

## Méthode

1. **Segmenter** : regroupe les interviewés par similarité de comportements,
   d'objectifs et de contextes (pas par démographie seule).
2. **Vérifier la densité** : un segment = au moins 2-3 entretiens. Un cas isolé
   n'est pas un persona (note-le comme cas limite si pertinent).
3. **Choisir 2 à 3 personas** (jamais plus) : assez pour couvrir la diversité,
   assez peu pour rester actionnable.
4. **Incarner** chaque persona à partir des données réelles du segment.

## Livrable : `knowledge/uxr/outputs/personas.md`

Pour chaque persona :

```markdown
## [Prénom Persona] — [étiquette courte, ex. « Le jardinier débutant »]

- **Profil :** âge/situation/contexte (synthèse du segment, pas une seule personne)
- **Objectifs :** ce qu'il cherche à accomplir
- **Frustrations :** ses pain points principaux (issus de la synthèse)
- **Motivations / déclencheurs :** ce qui le pousse à agir
- **Contexte d'usage :** quand, où, avec quoi
- **Citation représentative :** « … »
- **Ancrage :** entretien_Prenom_X.docx, entretien_Prenom_Y.docx, …
```

## Garde-fous

- **Pas de persona sans ancrage** : liste toujours les entretiens sources.
- Pas d'invention de traits non présents dans les données.
- Évite les caricatures démographiques : ce sont les comportements et objectifs
  qui définissent le persona.
- Distingue clairement personas (récurrents) et cas limites (isolés).

## Anti-patterns

- ❌ Persona démographique
- ❌ Plus de 3 personas (au-delà c'est trop dilué)
- ❌ Persona non ancré dans les sessions
- ❌ Verbatim inventé
- ✅ 1 verbatim sourcé par persona
- ✅ Toujours lier au comportement, pas aux déclarations
