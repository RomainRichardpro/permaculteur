---
name: uxr-jtbd
description: Liste les Jobs To Be Done (JTBD) à partir d'entretiens utilisateurs. À utiliser pour formaliser ce que les utilisateurs cherchent à accomplir, sous forme de job statements traçables aux verbatims. Distingue jobs fonctionnels, émotionnels et sociaux.
---

# Jobs To Be Done (JTBD)

Objectif : formaliser ce que les utilisateurs cherchent réellement à accomplir —
le « job » qu'ils « embauchent » un produit pour faire — à partir des entretiens.
On décrit le progrès recherché, pas une solution.

## Principe

Un JTBD décrit une **situation + une motivation + un résultat attendu**, sans
mentionner de fonctionnalité. Format canonique :

> **Quand** [situation], **je veux** [motivation/action], **afin de** [résultat attendu].

Trois natures de jobs, à distinguer :
- **Fonctionnel** : la tâche concrète à accomplir.
- **Émotionnel** : ce que l'utilisateur veut ressentir (ou éviter de ressentir).
- **Social** : comment il veut être perçu par les autres.

## Méthode

1. **Repérer les verbes d'accomplissement** dans les verbatims (« il faut que je… »,
   « j'essaie de… », « ce qui compte c'est de… »).
2. **Reformuler** chaque besoin en job statement (situation → motivation → résultat),
   sans solution.
3. **Classer** par nature (fonctionnel / émotionnel / social) et par fréquence.
4. **Tracer** chaque job à au moins un verbatim source.
5. Optionnel : rattacher les jobs aux personas (skill `uxr-personas`).

## Livrable : `knowledge/uxr/outputs/jobs-to-be-done.md`

```markdown
# Jobs To Be Done — [contexte]

## Jobs fonctionnels
### JTBD-1 — X/N interviewés
> Quand [situation], je veux [motivation], afin de [résultat].
- Verbatim : « … » — entretien_Prenom_X.docx
- Persona(s) lié(s) : [si applicable]

## Jobs émotionnels
### JTBD-… 

## Jobs sociaux
### JTBD-…
```

## Garde-fous

- Un job décrit un **progrès recherché**, jamais une fonctionnalité ("je veux un
  bouton X" → reformuler en intention sous-jacente).
- Chaque job = au moins 1 verbatim cité avec sa source.
- Pas d'invention de jobs non exprimés ou non observables dans le corpus.
