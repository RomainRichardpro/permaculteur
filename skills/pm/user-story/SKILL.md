---
name: user-story
description: Gabarit et méthode pour rédiger des User Stories actionnables à partir du backlog priorisé. Impose le format INVEST, des critères d'acceptation testables, et une traçabilité vers la feature d'origine. À utiliser après la priorisation MoSCoW, pour produire us.md.
---

# User Story

Objectif : traduire chaque feature du backlog en une ou plusieurs User Stories
directement exploitables par un designer et par un développeur, sans qu'aucun
des deux n'ait à reformuler ou à deviner l'intention derrière la demande.

Une US mal écrite coûte plus cher qu'elle n'en a l'air : elle génère des
allers-retours, des suppositions divergentes entre design et dev, et des
critères d'acceptation découverts trop tard, en recette.

---

## Principe

Une User Story n'est pas une description de fonctionnalité, c'est la
description d'un **besoin utilisateur dans son contexte**. Elle répond à trois
questions, dans cet ordre :

1. **Qui** a ce besoin (quel persona, pas "l'utilisateur" en général) ?
2. **Quoi** veut-il accomplir (une action, pas une interface) ?
3. **Pourquoi** — quel JTBD ou quel bénéfice ça sert ?

Format de référence :

> **En tant que** [persona], **je veux** [action], **afin de** [bénéfice / job].

Le "quoi" décrit une intention, jamais une solution UI imposée. "Je veux
recevoir une alerte quand il faut arroser mes plants" est une bonne US. "Je
veux un bouton rouge en haut de l'écran qui clignote" n'en est pas une — c'est
une décision de design qui appartient au designer, pas au PM.

Chaque US doit remonter à une feature du backlog (`FEAT-XX`) et donc,
indirectement, à un ou plusieurs JTBD. Une US qui ne remonte à aucune feature
est soit une feature manquante dans `backlog.md`, soit hors périmètre.

---

## Méthode

### Étape 1 — Découper la feature en US

Une feature du backlog est souvent trop large pour être une seule US
("Suivi de l'arrosage du potager" cache plusieurs besoins : configurer un
rappel, recevoir une notification, marquer un arrosage comme fait, consulter
l'historique). Découper la feature en autant d'US que nécessaire pour que
chacune reste **petite et testable indépendamment** (critère "S" et "I" d'INVEST,
voir Étape 2).

Ne pas découper artificiellement une action indivisible en plusieurs US pour
gonfler le nombre — le découpage suit la logique du besoin, pas un objectif de
volume.

### Étape 2 — Vérifier le format INVEST

Chaque US doit être :

- **Independent** : elle ne dépend pas d'une autre US pour avoir du sens ou
  être livrée isolément (les dépendances techniques éventuelles sont notées,
  mais ne cassent pas l'indépendance fonctionnelle).
- **Negotiable** : elle décrit une intention, pas une implémentation figée —
  le "comment" reste ouvert à la discussion entre design et dev.
- **Valuable** : elle apporte une valeur observable au persona, pas seulement
  une brique technique interne (une US purement technique, ex: "refactorer le
  service X", n'est pas une US produit et n'a pas sa place dans `us.md`).
- **Estimable** : l'équipe dev doit pouvoir en comprendre le périmètre
  suffisamment pour l'estimer (même sans chiffrer ici — voir garde-fous).
- **Small** : réalisable dans une itération courte ; si ce n'est pas le cas,
  revenir à l'Étape 1 et découper davantage.
- **Testable** : elle a au moins un critère d'acceptation vérifiable
  objectivement (voir Étape 3).

### Étape 3 — Rédiger les critères d'acceptation

Formuler les critères sous forme de scénarios vérifiables, idéalement au
format Ggiven/When/Then :
Étant donné [contexte / état initial],
Quand [action de l'utilisateur],
Alors [résultat observable attendu].

Couvrir au minimum :
- le **cas nominal** (le chemin attendu),
- un **cas limite pertinent** (ex: aucune donnée, valeur extrême, absence de
  connexion),
- si applicable, un **cas d'erreur** (ce qui doit se passer quand ça échoue).

Un critère d'acceptation non vérifiable ("l'interface doit être intuitive")
n'est pas un critère d'acceptation — il doit être reformulé en comportement
observable ou déplacé vers les notes design.

### Étape 4 — Ajouter le contexte utile à chaque audience

Une US bien écrite sert deux lecteurs différents sans les mélanger :

- **Pour le designer** : contexte utilisateur (persona, situation d'usage,
  contrainte identifiée en UXR — ex: usage en extérieur, mains sales, écran
  au soleil), objectif fonctionnel, sans imposer de solution visuelle.
- **Pour le développeur** : critères d'acceptation testables, cas limites,
  contraintes de données ou d'intégration connues (ex: dépendance à une API
  météo), sans détailler l'implémentation technique à sa place.

Ne pas dupliquer le travail de conception de l'un ou de l'autre : une US
propose un problème à résoudre, pas une solution déjà tranchée.

### Étape 5 — Tracer et numéroter

Chaque US reçoit un identifiant `US-XX` et référence explicitement sa feature
d'origine `FEAT-XX`. Format attendu dans `us.md` :
US-07 — [Titre court de la US]

Feature parente : FEAT-03
En tant que [persona],
je veux [action],
afin de [bénéfice].

Contexte (designer) : [situation d'usage, contrainte identifiée en UXR]
Critères d'acceptation (dev) :

Étant donné [...], quand [...], alors [...].
Étant donné [...], quand [...], alors [...].

Notes / incertitudes : [hypothèse non validée, si applicable]

---

## Garde-fous

- **Aucune US sans feature parente.** Une US qui ne référence pas de `FEAT-ID`
  n'a pas sa place dans `us.md` — soit la feature manque dans `backlog.md`,
  soit l'US est hors périmètre et doit être écartée.
- **Aucune US technique pure.** Si une "US" décrit une tâche d'infrastructure
  ou de refactoring sans bénéfice utilisateur observable, ce n'est pas une US
  — elle doit être traitée comme une tâche technique par l'équipe dev,
  en dehors de ce livrable.
- **Ne jamais imposer de solution UI dans le "je veux".** Le "quoi" décrit une
  intention utilisateur ; toute mention d'un composant, d'une couleur, d'une
  position à l'écran est un signal que l'US empiète sur le rôle du designer —
  la reformuler.
- **Ne jamais laisser un critère d'acceptation vague ou non vérifiable.**
  Si un critère ne peut pas être coché "vrai/faux" par un testeur externe à
  la discussion, il doit être reformulé.
- **Ne jamais halluciner un contexte d'usage.** Le contexte destiné au
  designer (Étape 4) doit provenir de `personas.md` ou `synthese.md` — s'il
  n'existe pas d'élément UXR pour l'étayer, le signaler comme hypothèse plutôt
  que de l'inventer.
- **Ne jamais estimer la charge dev.** Ce skill s'arrête à l'Estimable
  d'INVEST au sens qualitatif (l'US est compréhensible et bornée) ; le
  chiffrage (points, jours) reste hors périmètre du PM (voir frontières de
  `agent-pm`).
- **Signaler les US issues d'un Could have ou d'un Won't have.** Si on rédige
  malgré tout une US pour une feature non prioritaire (ex: anticipation), le
  préciser pour éviter qu'elle soit confondue avec une US du socle Must/Should.