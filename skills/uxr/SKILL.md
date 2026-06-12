# Skills UXR — Récapitulatif

Quatre skills à placer dans `knowledge/uxr/skills/`.
Elles sont appelées par `agent-uxr` dans l'ordre du déroulé.

---

## `uxr-synthese`

```markdown
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

\```
## [Nom du thème]

**Fréquence :** X/16
**Axes de codage couverts :** [liste]

**Ce qu'on observe :**
Résumé descriptif en 3-5 phrases. Pas de "il faudrait", pas de solution.

**Verbatims représentatifs :**
- "[Citation exacte]" — Entretien N°X
- "[Citation exacte]" — Entretien N°Y

**Points de tension ou contradictions :**
Si des entretiens divergent sur ce thème, les noter ici.
\```

### Fin de document
- Liste des thèmes **non couverts** ou **sous-représentés** (< 3/16)
- Questions ouvertes restantes pour le PM / designer

---

## Garde-fous

- **Minimum 1 verbatim sourcé par thème.** Si aucun verbatim disponible, le thème est retiré.
- **Pas de pourcentages.** Toujours `X/16`, jamais `62%`.
- **Pas de recommandations produit.** Les opportunités vont dans `jobs-to-be-done.md`, pas ici.
- **Pas de cherry-picking.** Les contradictions et signaux faibles sont inclus, pas effacés.
```

---

## `uxr-personas`

```markdown
---
name: uxr-personas
description: Construit 2 à 3 personas à partir des patterns comportementaux émergents. Chaque persona est ancré sur des verbatims sourcés et des comportements observés, jamais sur la démographie seule.
---

## Objectif

Synthétiser les profils comportementaux récurrents en personas actionnables pour le designer et le PM.

---

## Règles de construction

- **2 à 3 personas maximum.** Au-delà, c'est un signe de sur-segmentation.
- **Fondés sur des comportements**, pas sur l'âge, le genre ou la CSP.
- **Chaque persona doit être ancré** sur ≥ 3 entretiens distincts.
- **Chaque trait distinctif** doit être traçable à ≥ 1 verbatim sourcé.
- **Les contradictions internes** d'un persona sont autorisées et bienvenues — elles reflètent la réalité.

---

## Format de sortie — `personas.md`

\```
## Persona N° — [Prénom fictif] — [Tagline comportementale]

**Ancrage :** Entretiens N°X, Y, Z (+ N si pertinent)

### Contexte
2-3 phrases sur sa situation de jardinage : type de jardin, rythme, niveau d'expérience.
> "[Verbatim sourcé]" — Entretien N°X

### Motivations profondes
Ce qui le/la pousse à jardiner. Pas les features qu'il/elle veut.
> "[Verbatim sourcé]" — Entretien N°X

### Comportements clés
- [Comportement 1] — Entretien N°X
- [Comportement 2] — Entretien N°Y
- [Comportement 3] — Entretien N°Z

### Douleurs & frustrations
- [Pain point 1] > "[Verbatim]" — Entretien N°X
- [Pain point 2] > "[Verbatim]" — Entretien N°Y

### Rapport à la technologie
Une phrase synthétique + 1 verbatim si disponible.

### Ce persona N'EST PAS
1-2 phrases pour éviter les confusions avec les autres personas.
\```

---

## Garde-fous

- **Pas de persona démographique pur.** "Retraité de 65 ans" n'est pas un persona — "Jardinier autonome qui documente tout" l'est.
- **Pas de trait sans ancrage.** Si un trait ne peut pas être tracé à un entretien, il est retiré.
- **Pas de présentation avant validation.** Tu présentes les personas à l'utilisateur et tu attends un OUI explicite avant de passer à `uxr-export-html`.
- **Les personas se distinguent par leurs comportements**, pas par leur niveau de compétence technique.
```

---

## `uxr-jtbd`

```markdown
---
name: uxr-jtbd
description: Formalise les Jobs To Be Done à partir des verbatims codés. Chaque job décrit un progrès recherché, jamais une solution. Tracé à au moins un verbatim sourcé.
---

## Objectif

Extraire les motivations profondes des jardiniers sous forme de JTBD actionnables pour le PM et le designer.

---

## Structure d'un JTBD

\```
Quand je [situation déclenchante],
je veux [progrès recherché],
pour que [résultat attendu].
\```

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

\```
## JTBD-[N] — [Titre court]

**Type :** Functional / Emotional / Social
**Fréquence :** X/16
**Personas concernés :** [Persona 1], [Persona 2]

**Formulation :**
> Quand je [situation],
> je veux [progrès],
> pour que [résultat].

**Verbatims sourcés :**
- "[Citation exacte]" — Entretien N°X
- "[Citation exacte]" — Entretien N°Y

**Ce que ce job N'est PAS :**
Une ligne pour éviter de le confondre avec une feature ou un autre job.
\```

### Fin de document
- JTBD en tension ou contradiction entre personas
- Jobs potentiels **non couverts** par les entretiens (signalés comme hypothèses)

---

## Garde-fous

- **Jamais une solution.** "Je veux une notification de rappel" n'est pas un JTBD — "Je veux ne jamais oublier d'arroser sans avoir à y penser" l'est.
- **Minimum 1 verbatim sourcé par job.** Sans verbatim, le job est mis en hypothèse, pas en livrable.
- **Pas de JTBD inventé.** Si un job semble évident mais n'est pas dans les entretiens, il va dans la section "hypothèses non couvertes".
- **Les JTBD alimentent les personas**, pas l'inverse. Un job doit être rattaché à au moins un persona existant dans `personas.md`.
```

---

## `uxr-export-html`

```markdown
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

\```
- En-tête : titre du projet + date de génération
- Une section par persona :
  - Prénom + tagline comportementale
  - Contexte
  - Motivations profondes
  - Comportements clés
  - Douleurs & frustrations
  - Rapport à la technologie
  - Ce persona N'EST PAS
- Pied de page : nombre d'entretiens analysés + mention "Données issues de recherche qualitative"
\```

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
```