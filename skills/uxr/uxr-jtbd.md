---
name: uxr-jtbd
description: Formalise les Jobs To Be Done à partir des verbatims codés. Chaque job décrit un progrès recherché, jamais une solution. Tracé à au moins un verbatim sourcé.
---

## Objectif

Extraire les motivations profondes des jardiniers sous forme de JTBD actionnables pour le PM et le designer.

---

## Structure d'un JTBD
Quand je [situation déclenchante],

je veux [progrès recherché],

pour que [résultat attendu].

**Les trois types à distinguer :**
- **Functional job** : ce que l'utilisateur essaie de faire concrètement
- **Emotional job** : ce qu'il veut ressentir (ou ne plus ressentir)
- **Social job** : comment il veut être perçu par les autres

---

## Format de sortie — `jobs-to-be-done.md`

### En-tête
- Date
- Nombre de JTBD identifiés
- Personas associés

### Corps — un bloc par JTBD
JTBD-[N] — [Titre court]
Type : Functional / Emotional / Social

Fréquence : X/16

Personas concernés : [Persona 1], [Persona 2]
Formulation :

Quand je [situation],

je veux [progrès],

pour que [résultat].

Verbatims sourcés :

"[Citation exacte]" — Entretien N°X
"[Citation exacte]" — Entretien N°Y

Ce que ce job N'est PAS :

Une ligne pour éviter de le confondre avec une feature ou un autre job.

### Fin de document
- JTBD en tension ou contradiction entre personas
- Jobs potentiels **non couverts** par les entretiens (signalés comme hypothèses)

---

## Garde-fous

- **Jamais une solution.** "Je veux une notification de rappel" n'est pas un JTBD — "Je veux ne jamais oublier d'arroser sans avoir à y penser" l'est.
- **Minimum 1 verbatim sourcé par job.** Sans verbatim, le job est mis en hypothèse, pas en livrable.
- **Pas de JTBD inventé.** Si un job semble évident mais n'est pas dans les entretiens, il va dans la section "hypothèses non couvertes".
- **Les JTBD alimentent les personas**, pas l'inverse. Un job doit être rattaché à au moins un persona existant dans `personas.md`.