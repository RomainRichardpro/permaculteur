---
name: Permaculteur
description: "Un carnet de terrain botanique : des repères précis en mono tracké (espèces, statuts, protocoles) posés sur une typographie humaine et des aplats pastel doux — la rigueur du diagnostic sans jamais perdre la chaleur du quotidien."

colors:
  canvas: "#FFFFFF"
  ink: "#000000"
  primary: "#000000"
  on-primary: "#FFFFFF"
  hairline: "#E6E6E6"
  hairline-soft: "#F1F1F1"
  surface-soft: "#F7F7F5"
  block-lime: "#DCEEB1"
  block-lilac: "#C5B0F4"
  block-cream: "#F4ECD6"
  block-mint: "#C8E6CD"
  block-pink: "#EFD4D4"
  block-coral: "#F3C9B6"
  block-navy: "#1F1D3D"
  accent-magenta: "#FF3D8B"
  semantic-success: "#1EA64A"
  overlay-card: "#FFFFFFEB"

typography:
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: "115%"
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: "32px"
  title-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: "28px"
  subtitle:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 540
    lineHeight: "24px"
  body-strong:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: "18px"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 320
    lineHeight: "16px"
  body-sm:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 320
    lineHeight: "16px"
  button:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: "18px"
  badge:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: "14px"
  eyebrow:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: "14px"
    letterSpacing: "0.08em"
  species-name:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "16px"
  nav-label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: "16px"

rounded:
  xs: "2px"
  sm: "6px"
  md: "8px"
  lg: "24px"
  xl: "32px"
  pill: "50px"
  full: "9999px"

spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "96px"

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px"
  button-secondary-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px"
  badge-status:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.badge}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  icon-badge-circle:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: "38px"
  step-badge-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.full}"
    size: "28px"
  plant-photo-frame:
    backgroundColor: "{colors.block-mint}"
    rounded: "{rounded.lg}"
    height: "200px"
  meta-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 14px"
  protocol-step:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "14px"
  confidence-badge:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.semantic-success}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.full}"
  notification-card:
    backgroundColor: "{colors.overlay-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "14px"
  toggle-switch-off:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.pill}"
    width: "44px"
    height: "26px"
  swipe-reveal-action:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-strong}"
  action-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    padding: "12px 14px"
  quick-action-tile:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.badge}"
    rounded: "{rounded.md}"
    padding: "12px 8px"
---

# Design System: Permaculteur

## Overview

**Creative North Star: "Le carnet de terrain" (The Field Journal)**

Permaculteur emprunte la grammaire visuelle d'un carnet de botaniste amateur : des repères précis et tracés en mono (statuts, noms d'espèces, en-têtes de section) posés sur une typographie humaine (Inter) qui porte le vrai contenu — les signaux d'observation, les explications, le ton bienveillant. Le système reste presque monochrome (noir/blanc, un seul niveau de gris de bordure) et réserve la couleur aux aplats pastel doux (menthe, lime, lilas, corail) qui habillent les zones "vivantes" — la photo de la plante, les futurs blocs de contenu — jamais le texte ni les contrôles.

Ce n'est pas un système décoratif : chaque choix mono (nom latin en petites capitales trackées, eyebrows de section, badges de statut) sert la même intention que dans un vrai carnet de terrain — distinguer la donnée observée (précise, presque scientifique) du commentaire qui l'accompagne (chaleureux, jamais jugeant). Les boutons sont toujours en pilule, les icônes toujours en cercle plein — aucune arête vive nulle part, cohérent avec un objet qu'on manipule au quotidien plutôt qu'un outil professionnel froid.

**Key Characteristics:**
- Deux typographies avec des rôles stricts : `{typography.body}`/`{typography.title}` (Inter) pour tout ce qui est lu et compris ; `{typography.eyebrow}`/`{typography.species-name}` (JetBrains Mono, uppercase, tracké) réservés aux repères taxonomiques et de statut.
- Système quasi monochrome (noir/blanc) — la couleur n'apparaît que dans les aplats pastel `{colors.block-*}`, jamais dans le texte de contrôle sauf `{colors.semantic-success}` pour la confiance de diagnostic.
- Pilule partout pour les actions (`{rounded.pill}`), cercle plein pour les icônes et badges numérotés (`{rounded.full}`) — aucun angle droit sur un élément actionnable.
- L'opacité (pas une palette de gris) porte la hiérarchie du texte secondaire : `opacity 0.45–0.75` sur `{colors.ink}` plutôt que des tons de gris nommés.
- Poids de police variable Inter exploité finement (320, 500, 540, 600, 700) — un texte à 320 côtoie un titre à 600 sans jamais changer de taille pour signaler l'importance.

## Colors

Système presque monochrome ; la couleur est réservée aux surfaces "vivantes" (photo de plante, futurs blocs de contenu) et à un unique signal sémantique (confiance de diagnostic).

### Primary
- **Ink / Primary** ({colors.primary}, #000000) : tout CTA, tout badge de statut plein, les cercles numérotés de protocole. Porte aussi tout le texte (`{colors.ink}`) — il n'y a pas de gris nommé, la hiérarchie se fait à l'opacité.

### Neutral
- **Canvas** ({colors.canvas}, #FFFFFF) : fond de page, texte sur fond noir (`on-primary`), fond des badges icône circulaires.
- **Hairline** ({colors.hairline}, #E6E6E6) : unique bordure du système — ligne du haut de la barre de CTA, contour de la ligne "dernier arrosage", piste du toggle à l'état désactivé.
- **Hairline Soft** ({colors.hairline-soft}, #F1F1F1) : réservé aux séparations les plus discrètes (non observé dans les écrans actuels, gardé du design system source).
- **Surface Soft** ({colors.surface-soft}, #F7F7F5) : fond des étapes de protocole de traitement — la seule surface neutre "surélevée" du système, sans ombre.
- **Overlay Card** ({colors.overlay-card}, #FFFFFFEB) : blanc translucide utilisé uniquement pour la carte de notification affichée par-dessus le fond d'écran verrouillé — un cas d'usage unique, ne pas réutiliser comme fond de carte ordinaire.

### Block (aplats pastel)
- **Block Mint** ({colors.block-mint}, #C8E6CD) : cadre photo de plante sur la fiche — couleur "vivante" par défaut observée.
- **Block Lime** ({colors.block-lime}, #DCEEB1), **Block Lilac** ({colors.block-lilac}, #C5B0F4), **Block Cream** ({colors.block-cream}, #F4ECD6), **Block Pink** ({colors.block-pink}, #EFD4D4), **Block Coral** ({colors.block-coral}, #F3C9B6) : palette d'aplats déclarée dans le design system source, pas encore observée en usage dans les écrans actuels — probablement destinée à varier le cadre photo par plante ou par famille de symptôme. À confirmer avant extension.
- **Block Navy** ({colors.block-navy}, #1F1D3D) : déclaré dans le design system, aucun usage observé dans les écrans actuels.

### Semantic
- **Success** ({colors.semantic-success}, #1EA64A) : unique couleur sémantique du système — pastille + texte du niveau de confiance du diagnostic ("Confiance : probable"). Aucune variante warning/error observée pour les niveaux de confiance inférieurs — à concevoir.

### Named Rules
**La règle du monochrome.** Le texte et les contrôles restent noir/blanc/opacité ; la couleur n'habille que les surfaces "vivantes" (photo, blocs de contenu) et le seul signal sémantique (succès du diagnostic). Ne jamais colorer un bouton, un badge de statut ou un texte de navigation avec un `{colors.block-*}`.

## Typography

**Sans (lecture) :** Inter — variable, exploitée à des graisses fines (320, 500, 540, 600, 700).
**Mono (repères) :** JetBrains Mono — réservé aux eyebrows de section, noms d'espèces latins, et libellés d'app en majuscules trackées.

### Hierarchy
- **Headline** ({typography.headline}, 30px/600/-0.01em) : titre d'accroche de l'onboarding uniquement.
- **Title** ({typography.title}, 26px/600) : nom de la plante sur la fiche.
- **Title Sm** ({typography.title-sm}, 22px/600) : résultat de diagnostic ("Cochenilles farineuses").
- **Subtitle** ({typography.subtitle}, 20px/540) : titre de section dans le corps de l'écran ("Arrosage").
- **Body Strong** ({typography.body-strong}, 15px/600) : titre de signal d'observation, libellé de bouton.
- **Body** ({typography.body}, 13px/320, opacity 0.65–0.75) : texte explicatif, description de signal.
- **Body Sm** ({typography.body-sm}, 12px/320) : texte secondaire d'un protocole ou d'une meta-info.
- **Badge** ({typography.badge}, 11px/700) : texte de badge de statut plein ("À ARROSER").
- **Eyebrow** ({typography.eyebrow}, mono 11px, uppercase, tracking 0.08em, opacity 0.45) : en-tête de section ("SIGNAUX OBSERVABLES", "RÉSULTAT DU DIAGNOSTIC").
- **Species Name** ({typography.species-name}, mono 12px, opacity 0.45) : nom latin de la plante — seul usage du mono en minuscules, jamais en majuscules.
- **Nav Label** ({typography.nav-label}, 13px/500, opacity 0.5) : titre de la barre de navigation.

### Principles
- **Le mono est un repère, jamais une lecture.** Réservé aux eyebrows et au nom scientifique — jamais un paragraphe, jamais un bouton.
- **L'opacité porte la hiérarchie, pas la taille.** Un corps de texte à 13px et un libellé de bouton à 15px partagent la même graisse (600) mais un rôle différent ; le texte secondaire descend en opacité (0.45–0.75) plutôt qu'en taille.
- **Poids variable fin.** 320 pour le descriptif, 500–540 pour les sous-titres, 600–700 pour ce qui doit être scanné en un coup d'œil (titres, boutons, badges).

## Layout

- **Largeur de référence** : 390px (mobile), contenu inséré avec des marges de 20px de chaque côté sur les écrans pleine page.
- **Barre de CTA persistante** : toujours en bas d'écran, bordure `{colors.hairline}` en haut, padding 14px haut / 28px bas / 20px latéral, un seul bouton pleine largeur `{components.button-primary}`.
- **Listes de signaux/protocole** : pas de carte avec bordure — un badge icône circulaire à gauche (38px) + une pile titre/description à droite, séparés par un gap. Seule l'étape de protocole (`{components.protocol-step}`) porte un fond (`{colors.surface-soft}`).
- **Rythme vertical observé** : les sections s'enchaînent avec des marges de 8–16px entre elles côté contenu, jamais le `{spacing.section}` (96px) du design system source — cette valeur n'est pas utilisée dans les écrans actuels.

## Elevation & Depth

Système entièrement plat — aucune ombre observée sur aucun écran. La profondeur vient uniquement d'un fond différencié (`{colors.surface-soft}` pour les étapes de protocole) ou d'une bordure fine (`{colors.hairline}`), jamais d'un `box-shadow`. Seule exception : la carte de notification sur écran verrouillé, dont le fond `{colors.overlay-card}` (blanc translucide) sous-entend un flou/une ombre système propre à l'OS plutôt qu'un effet applicatif à reproduire.

### Named Rules
**La règle du plat.** Pas d'ombre applicative. Une surface se distingue par sa couleur de fond ou une bordure hairline, jamais par une élévation simulée.

## Shapes

- **Pilule** ({rounded.pill}, 50px) : tout bouton, le toggle (piste). C'est la seule forme de bouton du système.
- **Cercle plein** ({rounded.full}) : tout badge icône (38px), tout badge numéroté d'étape (28px), le thumb du toggle (22px), la pastille de confiance (8px).
- **Coin large** ({rounded.lg}, 24px) : cadre photo de plante, carte de notification — les deux seules surfaces "container" à grande échelle.
- **Coin moyen** ({rounded.md}, 8px) : ligne meta (dernier arrosage), étape de protocole.

## Components

### Buttons
**`button-primary`** — pilule noire, texte blanc, pleine largeur en barre de CTA. Utilisé aussi bien pour l'action principale ("Marquer comme arrosé", "Commencer le traitement", "Prendre une photo") que pour l'option "Oui" d'une confirmation à deux boutons.
- Fond `{colors.primary}`, texte `{colors.on-primary}`, typo `{typography.button}`, padding 14px, rayon `{rounded.pill}`.

**`button-secondary-outline`** — pilule à fond transparent, bordure 1px `{colors.ink}`, texte noir. Utilisé pour l'action secondaire de l'onboarding ("Taper le nom de ma plante") et le "Non" d'une confirmation à deux boutons (largeur égale, `flex: 1` de chaque côté).
- Fond `{colors.canvas}`, texte `{colors.ink}`, typo `{typography.button}`, padding 14px, rayon `{rounded.pill}`, bordure `1px solid {colors.ink}`.

### Badges
**`badge-status`** — pilule pleine noire, texte blanc en petites capitales grasses. Affiche le statut d'entretien sur la fiche plante ("À ARROSER").
- Fond `{colors.primary}`, texte `{colors.on-primary}`, typo `{typography.badge}`, padding `5px 12px`, rayon `{rounded.pill}`.

**`confidence-badge`** — pastille pleine (8px, `{colors.semantic-success}`) + texte vert gras. Affiche le niveau de confiance du diagnostic ("Confiance : probable"). Seule variante observée : succès/vert — les niveaux de confiance intermédiaires ou faibles ne sont pas encore conçus.

### Icon Badges & Step Numbers
**`icon-badge-circle`** — cercle plein blanc (38px) contenant une icône ligne noire. Précède chaque signal d'observation (terre, feuilles) et la ligne "dernier arrosage".
- Fond `{colors.canvas}`, rayon `{rounded.full}`, taille 38px.

**`step-badge-primary`** — cercle plein noir (28px) contenant un chiffre blanc gras. Numérote les étapes du protocole de traitement.
- Fond `{colors.primary}`, texte `{colors.on-primary}`, typo `{typography.body-strong}`, rayon `{rounded.full}`, taille 28px.

### Cards & Containers
**`plant-photo-frame`** — cadre coin large (24px) rempli d'un aplat pastel (menthe par défaut), photo/illustration de la plante centrée dedans, hauteur fixe 200px.
- Fond `{colors.block-mint}`, rayon `{rounded.lg}`, hauteur 200px.

**`meta-row`** — ligne bordée coin moyen (icône + texte), utilisée pour une information ponctuelle hors liste de signaux ("Dernier arrosage : il y a 6 jours").
- Fond `{colors.canvas}`, bordure `1px solid {colors.hairline}`, rayon `{rounded.md}`, padding `12px 14px`.

**`protocol-step`** — ligne à fond gris clair (la seule surface "surélevée" du système), badge numéroté + titre/description.
- Fond `{colors.surface-soft}`, rayon `{rounded.md}`, padding 14px.

**`notification-card`** — carte coin large, fond blanc translucide (usage exclusif écran verrouillé), icône + nom d'app en petites capitales + titre + description.
- Fond `{colors.overlay-card}`, rayon `{rounded.lg}`, padding 14px.

### Toggle
**`toggle-switch`** — piste pilule 44×26, thumb cercle plein 22px. État désactivé observé : piste `{colors.hairline}`, thumb `{colors.canvas}`. État activé non observé dans les écrans actuels — à concevoir (probablement piste `{colors.primary}` par cohérence avec le reste du système monochrome).

### Swipe Action
**`swipe-reveal-action`** — bouton plein noir révélé par swipe sur une ligne de notification/alerte ("Gérer"), sans coin arrondi (seul élément du système sans `{rounded.*}`, cohérent avec un geste système iOS plutôt qu'un composant applicatif).
- Fond `{colors.ink}`, texte `{colors.on-primary}`, typo `{typography.body-strong}`.

### Navigation
**`nav-bar`** — barre simple : icône retour ou menu à gauche, titre centré en `{typography.nav-label}` (opacity 0.5), icône action à droite. Pas de fond distinct, pas de bordure — se fond dans le canvas.

### Action Row & Action Card
**`action-card`** — regroupe plusieurs `action-row` dans un bloc à bord unique (`{colors.hairline}`, `{rounded.md}`), séparateur `{colors.hairline-soft}` entre chaque ligne, jamais après la dernière. Remplace une pile de liens soulignés par une liste lisible en un coup d'œil, façon écran de réglages — ajouté après retour utilisateur (trop de liens texte empilés).
- Fond `{colors.canvas}`, bordure `1px solid {colors.hairline}`, rayon `{rounded.md}`.

**`action-row`** — ligne tappable pleine largeur à l'intérieur d'un `action-card` : icône dans un cercle plein (`{colors.surface-soft}`, 32px, cohérent avec `icon-badge-circle` en plus petit), libellé + description optionnelle, chevron `›` à droite pour signaler l'affordance de navigation.
- Icône : fond `{colors.surface-soft}`, rayon `{rounded.full}`, taille 32px.
- Libellé `{typography.body-strong}` réduit à 14px, description `{typography.body-sm}` opacity 0.6.
- Variante `muted` (opacity 0.5 sur toute la ligne) pour une action volontairement discrète (ex. "marquer comme perdue").

**`quick-action-tile`** — variante compacte pour une rangée d'accès rapides horizontale (2-4 items) sur l'écran d'accueil : icône en cercle plein au-dessus d'un libellé court centré, dans une tuile `{colors.surface-soft}`.
- Fond tuile `{colors.surface-soft}`, icône sur fond `{colors.canvas}`, rayon `{rounded.md}` (tuile) / `{rounded.full}` (icône).

### Named Rules
**La règle du chevron.** Toute `action-row` porte un chevron `›` — c'est ce qui distingue une ligne qui navigue vers un autre écran d'un simple texte informatif (comme `meta-row`, qui n'en porte jamais).

## Do's and Don'ts

### Do
- Réserver `{colors.primary}` (noir) à ce qui doit être vu et actionné en premier : CTA, badge de statut, numéro d'étape. Le noir est rare ailleurs.
- Utiliser le mono (`{typography.eyebrow}`, `{typography.species-name}`) exclusivement pour les repères taxonomiques et les en-têtes de section, jamais pour un paragraphe.
- Faire porter la hiérarchie du texte secondaire par l'opacité (0.45 à 0.75 sur `{colors.ink}`), pas par une nouvelle couleur de gris.
- Garder chaque bouton en pilule et chaque badge/icône en cercle plein — aucune exception observée dans les écrans existants.
- Poser les aplats `{colors.block-*}` uniquement sur des surfaces "vivantes" (photo de plante) — jamais sur un texte ou un contrôle.
- Regrouper plus de deux actions de navigation liées dans un `{components.action-row}` au sein d'un `{components.action-card}`, jamais en pile de liens texte soulignés — un lien souligné isolé reste acceptable pour une action secondaire unique et rare.

### Don't
- Ne pas ajouter d'ombre portée. La profondeur vient du fond (`{colors.surface-soft}`) ou d'une bordure hairline, jamais d'un `box-shadow`.
- Ne pas mettre le nom latin d'une plante en majuscules — c'est le seul texte mono en casse normale, il ne doit pas être confondu avec un eyebrow.
- Ne pas introduire de couleur sémantique en dehors de `{colors.semantic-success}` sans la faire valider — les niveaux de confiance intermédiaires/faibles ne sont pas encore définis.
- Ne pas donner un rayon à `{components.swipe-reveal-action}` : c'est le seul élément volontairement sans coin arrondi.
- Ne pas réutiliser `{colors.overlay-card}` comme fond de carte ordinaire — c'est un blanc translucide pensé uniquement pour flotter sur un fond d'écran verrouillé.

## Known Gaps

- **États non observés à concevoir avant implémentation** : toggle activé, badge de confiance en dehors de "succès" (incertain / faible confiance), état hover/focus de tout composant (les écrans Paper ne montrent que l'état par défaut mobile), état vide (aucune plante ajoutée).
- **Palette d'aplats pastel sous-exploitée** : `{colors.block-lime}`, `{colors.block-lilac}`, `{colors.block-cream}`, `{colors.block-pink}`, `{colors.block-coral}`, `{colors.block-navy}` sont déclarés dans le design system source mais seul `{colors.block-mint}` est observé en usage réel (cadre photo). Confirmer leur usage prévu (variation par plante ? par famille de symptôme ?) avant de les mobiliser largement.
- **`{spacing.section}` (96px)** est déclaré dans le design system source mais non observé dans les écrans actuels — probablement hérité d'un système plus large (marketing) et non pertinent à l'échelle d'un écran mobile d'app.
- Ce fichier remplace `knowledge/design/DESIGN-figma.md`, qui documentait par erreur le site marketing de Figma.com (composants pricing/marquee/footer) plutôt que l'application Permaculteur — à ne plus utiliser comme référence.
