---
name: brief
description: Grille de questions pour challenger un brief produit. Permet de détecter les hypothèses non testées, les biais, les angles morts persona et les besoins contradictoires. À utiliser avant de produire le backlog.
---

# Brief

Objectif : ne jamais prendre un brief au pied de la lettre. Avant de le traduire en features, on questionne ce qu'il présuppose : la solution est-elle déjà décidée avant même d'avoir formulé le problème ? Le besoin cité repose-t-il sur une observation ou sur une intuition du commanditaire ? Qui est absent du brief alors qu'il devrait y être ?

Un brief challengé est un brief dont les hypothèses implicites sont devenues explicites.

---

## Principe

Un brief produit contient presque toujours trois couches mélangées :

1. **Des faits observés** (ex: "60% des utilisateurs abandonnent à l'étape 3").
2. **Des interprétations** (ex: "parce que le formulaire est trop long").
3. **Des solutions déjà présupposées** (ex: "il faut donc simplifier le formulaire").

Le rôle du PM est de **désempiler ces trois couches** et de ne challenger que
les couches 2 et 3 — la couche 1 (les faits) n'est pas discutable, sauf si la
source elle-même est douteuse (échantillon trop petit, biais de sélection, etc.).

Un brief non challengé fait courir trois risques :
- **Solution prématurée** : le brief arrive avec une feature déjà décidée, sans qu'on ait vérifié qu'elle répond à un vrai job.
- **Persona invisible** : le brief parle "des utilisateurs" en général, en écrasant des segments aux besoins contradictoires (ex: jardinier débutant vs. jardinierexpert n'ont pas le même job à faire).
- **Métrique de vanité** : l'objectif du brief est mesuré par un chiffre qui ne reflète pas la valeur réelle apportée (ex: "nombre de features livrées" plutôt que "réduction du taux d'abandon du potager").

---

## Méthode

### Étape 1 — Extraire les affirmations du brief

Relire le brief et lister séparément :
- les **faits** cités (données, observations, verbatims, warnings),
- les **interprétations** avancées (causes supposées),
- les **solutions** déjà proposées ou sous-entendues.

### Étape 2 — Questionner chaque interprétation

Pour chaque interprétation, se demander :
- Sur quelle donnée repose-t-elle ? Est-elle dans la `knowledge/uxr/outputs/synthese.md`, ou est-ce une intuition non vérifiée ?
- Existe-t-il une interprétation alternative plausible aux mêmes faits ?
- Cette interprétation est-elle valable pour **tous** les `knowledge/uxr/outputs/personas.md` concernés, ou
seulement pour certains ?

### Étape 3 — Questionner chaque solution présupposée

Pour chaque solution déjà énoncée dans le brief :
- Quel JTBD est censé être résolu par cette solution ? Est-il identifié dans
  `knowledge/uxr/outputs/jobs-to-be-done.md`, ou faut-il le faire émerger ?
- Si on retire cette solution et qu'on ne garde que le job sous-jacent,
  d'autres solutions moins coûteuses ou plus simples apparaissent-elles ?
- Cette solution entre-t-elle en tension avec un besoin d'un autre `knowledge/uxr/outputs/personas.md`
  (ex: simplifier pour le débutant peut frustrer l'expert) ?

### Étape 4 @— Vérifier la couverture des personas

- Le brief traite-t-il tous les `knowledge/uxr/outputs/personas.md` identifiés, ou en ignore-t-il certains ?
- Les besoins des différents `knowledge/uxr/outputs/personas.md` sont-ils compatibles, ou le brief masque-t-il un arbitrage à faire (ex: prioriser un persona au détriment d'un autre) ?

### Étape 5 — Vérifier la métrique de succès

- Quel indicateur le brief propose-t-il pour mesurer le succès ?
- Cet indicateur mesure-t-il un comportement utilisateur réel, ou une activité
  interne (nombre de features livrées, vitesse de dev) ?
- Si l'indicateur était atteint à 100% mais qu'aucun jardinier n'utilisait
  réellement la feature, le brief considérerait-il ça comme un succès ? Si oui,
  l'indicateur est mal choisi.

### Étape 6 — Formuler les questions de clarification

Regrouper les points bloquants (hypothèses non vérifiables avec les inputs
disponibles) en une liste de questions courtes, adressées au commanditaire.
Distinguer :
- les questions **bloquantes** (sans réponse, impossible de produire un backlog
  fiable),
- les hypothèses **de travail** (on peut avancer en les explicitant, à valider
  plus tard).

---

## Garde-fous

- **Ne jamais transformer une solution du brief en feature sans être remonté au
  JTBD sous-jacent.** Si aucun JTBD ne justifie la solution proposée, elle est
  signalée comme "solution sans job identifié" plutôt qu'ajoutée telle quelle
  au backlog.
- **Ne jamais fusionner deux personas aux besoins contradictoires en un besoin
  moyen.** Si le brief le fait, le signaler explicitement plutôt que de lisser
  la contradiction.
- **Ne jamais inventer une donnée ou un verbatim pour justifier un challenge.**
  Le challenge s'appuie uniquement sur ce qui est vérifiable dans
  `knowledge/uxr/outputs/synthese.md`, `knowledge/uxr/outputs/personas.md` et `knowledge/uxr/outputs/jobs-to-be-done.md`, ou sur une question
  explicite adressée au commanditaire.
- **Ne jamais garder le silence sur une hypothèse non vérifiée.** Une
  hypothèse non challengée qui se retrouve implicitement dans le backlog est
  un échec du skill — elle doit être formulée noir sur blanc, avec son niveau
  de confiance.
- **Le challenge du brief n'est pas un exercice de contradiction systématique.**
  Une affirmation du brief bien sourcée et cohérente avec les personas n'a pas
  besoin d'être remise en cause pour le principe ; l'objectif est la fiabilité
  du backlog, pas la démonstration de scepticisme.