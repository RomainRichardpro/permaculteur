# Userflow — Permaculteur

Date : 2026-07-24
Input : `knowledge/pm/us.md`, `knowledge/pm/backlog.md`
Méthode : traduction des User Stories en parcours écran-à-écran, avec points de décision explicites.

Flux principal (onboarding → boucle quotidienne) + 3 flux secondaires déclenchés depuis « Fiche plante » ou « Mon jardin ».

Convention : `?` = point de décision. Chaque branche référence sa US.

---

## Flux principal

1. **Ouverture de l'app** (1er lancement)
2. **Ajouter une plante** — photo ou nom libre, aucun champ obligatoire (US-05)
3. `?` Identification automatique réussie ?
   - **OUI** → Fiche plante affichée, avec signaux d'arrosage identifiés
   - **NON** → Saisie manuelle ou « Je ne sais pas » → conseils génériques affichés sans bloquer
4. **Fiche plante — 1re valeur** — < 30 secondes, sans compte créé (FEAT-03)
5. **Proposition (non bloquante) de créer un compte**
6. **Mon jardin — écran d'accueil** (point de boucle de la routine quotidienne)
7. `?` Notification d'arrosage reçue et ouverte ? (FEAT-10)
   - **OUI** → Bouton « Arrosé » (US-02), depuis la section Arrosage → historique mis à jour
   - **NON** → Notification ignorée : pas de 2e alerte ce cycle, option « alerter moins souvent »
8. ↺ Retour à « Mon jardin » — boucle quotidienne

---

## Flux secondaire A — Diagnostic photo

*Déclenché depuis Fiche plante*

1. **Symptôme observé** sur une plante (taches, feuilles jaunes, affaissement…)
2. **Diagnostic photo — capture** (US-03) — FEAT-02, réponse cible < 5s
3. `?` Photo exploitable ?
   - **NON** → Guide de cadrage : « Photo difficile à analyser » → reprendre la photo
   - **OUI** → Résultat : cause probable + niveau de confiance (probable / possible / incertain)
4. `?` Niveau de confiance ?
   - **INCERTAIN** → Bandeau multi-causes : choix manuel ou « Demander à la communauté » (US-18, Could)
   - **PROBABLE** → Protocole de traitement (US-04) → suivi d'efficacité si parasite (US-13)

---

## Flux secondaire B — Mode vacances

*Déclenché depuis Mon jardin*

1. **Saisie des dates d'absence** (US-08), depuis le raccourci « Partir en vacances »
2. **Plan généré par plante** — action recommandée + estimation de résistance
3. `?` Plantes à risque identifiées ?
   - **NON** → Fin du parcours, rien de plus à faire avant le départ
   - **OUI** → Fiche plant sitter (US-09) — lien partageable généré, sans compte requis

---

## Flux secondaire C — Perte d'une plante

*Déclenché depuis Fiche plante*

1. **Marquer la plante « perdue »**, depuis la fiche plante
2. `?` Historique ≥ 2 entrées ?
   - **NON** → 3 causes génériques, les plus fréquentes pour l'espèce
   - **OUI** → Post-mortem (US-17) : cause probable basée sur l'historique réel
3. **Suggestion positive pour la prochaine fois** — ton non-jugeant, apprentissage plutôt que culpabilisation
