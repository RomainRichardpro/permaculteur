---
name: moscow
description: Grille de priorisation MoSCoW (Must have, Should have, Could have, Won't have) pour arbitrer les features issues des JTBD. Impose une justification tracée pour chaque priorité, pas un simple étiquetage. À utiliser après la dérivation JTBD → features, avant la rédaction des User Stories.
---

# MoSCoW

Objectif : transformer une liste de features en un backlog priorisé et défendable.
MoSCoW n'est pas un exercice de classement subjectif — chaque priorité doit
pouvoir être justifiée par un raisonnement explicite, traçable jusqu'au JTBD
d'origine, et remise en cause si de nouvelles informations apparaissent.

Un backlog MoSCoW réussi permet à n'importe qui (designer, dev, commanditaire)
de comprendre *pourquoi* une feature est un Must et une autre un Could, sans
avoir à redemander au PM.

---

## Principe

MoSCoW répond à une seule question par feature : **"Que se passe-t-il si cette
feature n'est pas dans la première version livrée ?"**

- **Must have** : sans cette feature, le produit ne répond à aucun JTBD critique —
  il est inutilisable ou inutile pour le persona cible. Non négociable pour le
  périmètre visé.
- **Should have** : la feature apporte une valeur importante et répond à un JTBD
  réel, mais le produit reste utilisable sans elle, au prix d'une expérience
  dégradée ou d'un contournement acceptable à court terme.
- **Could have** : la feature apporte un confort ou une optimisation, mais son
  absence ne dégrade pas significativement l'usage. Souvent un JTBD secondaire
  ou un JTBD partiellement couvert par une autre feature.
- **Won't have (cette fois-ci)** : la feature répond à un besoin identifié, mais
  elle est explicitement exclue du périmètre actuel — par choix, pas par oubli.
  Elle reste documentée pour ne pas être reproposée sans le savoir plus tard.

**Un Won't have n'est jamais un JTBD ignoré.** S'il n'y a aucune feature (même
en Could) qui couvre un JTBD identifié, c'est une alerte : soit le JTBD est mal
formulé, soit il manque une feature au backlog.

---

## Méthode

### Étape 1 — Vérifier la couverture avant de prioriser

Avant toute chose, s'assurer que chaque JTBD identifié dans
`knowledge/uxr/outputs/jobs-to-be-done.md` est couvert par au moins une
feature du backlog en cours. Un JTBD sans feature associée doit être signalé
et traité (nouvelle feature, ou justification explicite de non-couverture)
avant de passer à la priorisation.

### Étape 2 — Évaluer chaque feature sur 4 critères

Pour chaque feature, noter (qualitativement, pas besoin de score chiffré) :

1. **Criticité du JTBD** : le JTBD adressé est-il central ou périphérique pour
   le persona cible ? (s'appuyer sur `personas.md` et `synthese.md`)
2. **Fréquence / ampleur d'usage** : combien de personas sont concernés, et à
   quelle fréquence rencontrent-ils ce job ?
3. **Coût de l'absence** : que se passe-t-il concrètement si la feature manque
   au lancement — abandon, contournement manuel, frustration mineure ?
4. **Dépendances** : d'autres features (ou le produit dans son ensemble)
   dépendent-elles de celle-ci pour fonctionner ou avoir du sens ?

### Étape 3 — Assigner la priorité et rédiger la justification

Chaque feature reçoit une priorité MoSCoW **accompagnée d'une justification
d'une à deux phrases**, rédigée à partir des critères de l'étape 2. Le format
attendu dans `backlog.md` :


FEAT-03 — [Nom de la feature]

JTBD couverts : JTBD-02, JTBD-05
Priorité : Must have
Justification : Sans cette feature, [persona] ne peut pas [job], ce qui
rend le produit inutilisable pour son usage principal identifié en synthèse.


Une priorité sans justification, ou une justification qui ne référence aucun
JTBD ni aucun élément vérifiable, est un livrable incomplet.

### Étape 4 — Confronter le résultat aux quotas implicites

Une répartition MoSCoW réaliste penche généralement fortement vers Should/Could,
avec un noyau de Must réduit. Si plus de la moitié des features atterrissent en
Must have, c'est un signal à interroger : soit le périmètre du brief est trop
ambitieux pour une v1, soit la distinction entre "critique" et "important" a
été mal appliquée. Revenir à l'étape 2 sur les features en question plutôt que
de livrer un backlog où tout est urgent.

### Étape 5 — Documenter les arbitrages entre personas

Si une feature est un Must pour un persona et un Won't have (voire un non-sujet)
pour un autre, documenter explicitement cet arbitrage plutôt que de le laisser
implicite dans la priorité seule. Cet arbitrage doit avoir été anticipé dès le
skill `brief` (voir Étape 4 de `brief.md` — couverture des personas).

---

## Garde-fous

- **Aucune priorité sans justification tracée à un JTBD.** Un Must have qui ne
  référence aucun `JTBD-ID` est refusé — soit le JTBD manquant est ajouté en
  amont, soit la priorité est reconsidérée.
- **Aucun JTBD orphelin après priorisation.** Si un JTBD n'apparaît dans aucune
  feature, même en Could have ou Won't have, le signaler explicitement plutôt
  que de le laisser disparaître silencieusement du backlog.
- **Ne jamais prioriser à partir de l'effort de développement.** La complexité
  technique n'est pas un critère MoSCoW — elle relève de l'estimation dev, hors
  périmètre de ce skill (voir frontières de l'agent PM). Une feature simple à
  développer mais répondant à un JTBD mineur reste un Could have.
- **Ne jamais figer le Won't have comme définitif.** Il signifie "pas dans ce
  périmètre-ci", pas "jamais". Le documenter permet de le retrouver lors d'une
  itération future sans revalider tout le raisonnement.
- **Signaler les priorités fragiles.** Si une priorité repose sur une hypothèse
  non validée (ex: fréquence d'usage estimée sans donnée UXR solide), le
  mentionner dans la justification plutôt que de présenter la priorité comme
  une certitude.
- **Ne jamais laisser une majorité de Must have sans interrogation.** Voir
  Étape 4 — un backlog où tout est critique n'aide personne à arbitrer.