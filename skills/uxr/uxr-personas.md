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
Persona N° — [Prénom fictif] — [Tagline comportementale]
Ancrage : Entretiens N°X, Y, Z (+ N si pertinent)
Contexte
2-3 phrases sur sa situation de jardinage : type de jardin, rythme, niveau d'expérience.

"[Verbatim sourcé]" — Entretien N°X

Motivations profondes
Ce qui le/la pousse à jardiner. Pas les features qu'il/elle veut.

"[Verbatim sourcé]" — Entretien N°X

Comportements clés

[Comportement 1] — Entretien N°X
[Comportement 2] — Entretien N°Y
[Comportement 3] — Entretien N°Z

Douleurs & frustrations

[Pain point 1] > "[Verbatim]" — Entretien N°X
[Pain point 2] > "[Verbatim]" — Entretien N°Y

Rapport à la technologie
Une phrase synthétique + 1 verbatim si disponible.
Ce persona N'EST PAS
1-2 phrases pour éviter les confusions avec les autres personas.

---

## Garde-fous

- **Pas de persona démographique pur.** "Retraité de 65 ans" n'est pas un persona — "Jardinier autonome qui documente tout" l'est.
- **Pas de trait sans ancrage.** Si un trait ne peut pas être tracé à un entretien, il est retiré.
- **Pas de présentation avant validation.** Tu présentes les personas à l'utilisateur et tu attends un OUI explicite avant de passer à `uxr-export-html`.
- **Les personas se distinguent par leurs comportements**, pas par leur niveau de compétence technique.