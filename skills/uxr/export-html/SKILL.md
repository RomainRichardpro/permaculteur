---
name: uxr-export-html
description: Exporte les personas UXR (personas.md) en une page HTML autonome et présentable. À utiliser UNIQUEMENT après validation explicite de l'utilisateur sur le contenu des personas. Produit knowledge/uxr/outputs/personas.html.
---

# Export des personas en HTML

Objectif : transformer les personas validés (`knowledge/uxr/outputs/personas.md`)
en une page HTML autonome (un seul fichier, CSS inline), lisible et présentable
à des parties prenantes.

## Pré-requis BLOQUANT : validation utilisateur

⚠️ **Ne génère JAMAIS le HTML sans validation explicite de l'utilisateur** sur le
contenu des personas. La génération HTML est une étape de mise en forme finale,
pas une étape d'analyse.

Avant de produire le fichier :
1. Vérifie que `personas.md` existe et présente les personas à l'utilisateur.
2. Demande : « Valides-tu ces personas pour génération du HTML ? »
3. N'exécute l'export **qu'après un OUI explicite**. Si l'utilisateur demande des
   corrections, applique-les dans `personas.md` d'abord, puis re-demande validation.

## Méthode

1. Lire `knowledge/uxr/outputs/personas.md`.
2. Pour chaque persona, produire une carte HTML : nom + étiquette, profil,
   objectifs, frustrations, motivations, contexte d'usage, citation, ancrage.
3. Assembler une page unique, CSS **inline** (aucune dépendance externe),
   responsive, sobre.
4. Écrire `knowledge/uxr/outputs/personas.html`.

## Gabarit HTML

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Personas — UXR</title>
  <style>
    :root { --bg:#f7f7f8; --card:#fff; --ink:#1a1a2e; --muted:#6b7280; --accent:#4f6bed; }
    * { box-sizing: border-box; }
    body { margin:0; font-family: system-ui, -apple-system, sans-serif; background:var(--bg); color:var(--ink); line-height:1.5; }
    header { padding: 2.5rem 1.5rem; text-align:center; }
    header h1 { margin:0; font-size:1.8rem; }
    header p { color:var(--muted); margin:.4rem 0 0; }
    .grid { display:grid; gap:1.5rem; grid-template-columns: repeat(auto-fit, minmax(320px,1fr)); max-width:1100px; margin:0 auto; padding:0 1.5rem 3rem; }
    .card { background:var(--card); border-radius:14px; padding:1.5rem; box-shadow:0 1px 3px rgba(0,0,0,.08); }
    .card h2 { margin:0 0 .25rem; font-size:1.25rem; }
    .label { color:var(--accent); font-weight:600; font-size:.85rem; text-transform:uppercase; letter-spacing:.03em; }
    .card h3 { font-size:.8rem; text-transform:uppercase; letter-spacing:.04em; color:var(--muted); margin:1.1rem 0 .3rem; }
    .card ul { margin:.2rem 0; padding-left:1.1rem; }
    blockquote { border-left:3px solid var(--accent); margin:1rem 0 0; padding:.4rem 0 .4rem .9rem; color:var(--ink); font-style:italic; }
    .source { font-size:.78rem; color:var(--muted); margin-top:1rem; }
  </style>
</head>
<body>
  <header>
    <h1>Personas</h1>
    <p>Recherche utilisateur — synthèse de [N] entretiens</p>
  </header>
  <main class="grid">
    <!-- une .card par persona -->
    <article class="card">
      <span class="label">[Étiquette]</span>
      <h2>[Prénom Persona]</h2>
      <p>[Profil]</p>
      <h3>Objectifs</h3><ul><li>…</li></ul>
      <h3>Frustrations</h3><ul><li>…</li></ul>
      <h3>Motivations</h3><ul><li>…</li></ul>
      <h3>Contexte d'usage</h3><p>…</p>
      <blockquote>« … »</blockquote>
      <p class="source">Ancrage : entretien_X.docx, entretien_Y.docx</p>
    </article>
  </main>
</body>
</html>
```

## Garde-fous

- **Pas de génération sans validation explicite** (cf. ci-dessus).
- Fidélité : le HTML ne fait que mettre en forme `personas.md`, il n'ajoute ni
  ne modifie aucun contenu (pas de nouveau trait, pas de citation inventée).
- Fichier **autonome** : CSS inline, aucune ressource externe à charger.
