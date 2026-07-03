# Backlog — App entretien de plantes d'intérieur

Date : 2026-07-03
Inputs : `knowledge/uxr/outputs/jobs-to-be-done.md`, `knowledge/uxr/outputs/personas.md`, `knowledge/uxr/outputs/synthese.md`
Méthode : dérivation JTBD → features, priorisation MoSCoW, traçabilité complète

---

## Challenge du brief

### Hypothèses implicites identifiées

**Hypothèse 1 — "Jardiniers amateurs" est un segment homogène.**
Faux. Le corpus révèle trois personas aux besoins structurellement incompatibles : Léa veut 0 friction et des conseils ultra-courts ; Sophie veut du diagnostic expert et de la communauté ; Jean veut des données taxonomiques et des API vers GBIF. Un produit qui essaie de répondre aux trois simultanément en v1 risque de ne satisfaire aucun.

→ **Décision de périmètre v1** : Léa (débutante) et Sophie (passionnée) sont les personas cibles primaires. Jean (collectionneur) est explicitement exclu de la v1 — ses besoins (JTBD-F7) sont documentés en Won't have avec justification. Ce n'est pas un oubli : c'est un choix.

**Hypothèse 2 — Les rappels d'arrosage sont la proposition de valeur centrale.**
Infirmée par les données. 10/16 interviewés ont abandonné une app précisément à cause des notifications inadaptées (Greg, Planta, Happy Plant). La valeur perçue est le *diagnostic expert*, pas le rappel. ("Je paierais facilement 20€/an pour ça. Pas pour des rappels d'arrosage — pour du vrai diagnostic." — entretien_Sophie_M.docx)

→ **Implication produit** : les notifications doivent être contextuelles et explicables, non fixes. La feature de diagnostic visuel est le différenciateur principal, pas le rappel.

**Hypothèse 3 — L'onboarding complet est nécessaire avant que l'app soit utile.**
Infirmée. Les apps avec onboarding long (Planta, Happy Plant) sont abandonnées avant la première valeur. ("Ils me demandaient des infos que j'avais pas... J'ai lâché avant d'avoir rentré mes 7 plantes." — entretien_Thomas_B.docx)

→ **Implication produit** : l'onboarding doit être quasi-inexistant. La première valeur doit être accessible en < 30 secondes.

### Incertitudes non résolues (questions bloquantes pour la v2)

- **Modèle économique** : les données confirment une disposition à payer pour le diagnostic expert (7/16 interviewés, 20€/an cité). Mais le seuil de monétisation exact et la frontière free/premium restent à valider. Ces informations ne sont pas dans les inputs disponibles. → Hypothèse de travail : le diagnostic photo est la feature premium centrale, les rappels et le suivi basique restent gratuits.
- **Feature communautaire** : 9/16 interviewés mentionnent la communauté comme valeur forte. Mais construire une communauté (modération, masse critique, cold start) est un risque produit majeur en v1. → La feature communauté est reportée en Could have avec signal explicite.
- **Persona Jean en v2** : si la v1 réussit avec Léa/Sophie, étendre à Jean nécessite une architecture différente (API botaniques, taxonomie fine). Cette décision doit être anticipée architecturalement même si la feature n'est pas livrée.

---

## Couverture JTBD → Features

Vérification complète avant priorisation :

| JTBD | Feature couvrant | Priorité |
|------|-----------------|----------|
| JTBD-F1 | FEAT-01, FEAT-10 | Must |
| JTBD-F2 | FEAT-02 | Must |
| JTBD-F3 | FEAT-04 | Should |
| JTBD-F4 | FEAT-05 | Should |
| JTBD-F5 | FEAT-06 | Should |
| JTBD-F6 | FEAT-07 | Should |
| JTBD-F7 | FEAT-12 | Won't have (v1) |
| JTBD-F8 | FEAT-03, FEAT-07 | Must / Should |
| JTBD-E1 | FEAT-03, FEAT-10 | Must |
| JTBD-E2 | FEAT-08 | Should |
| JTBD-E3 | FEAT-08 | Should |
| JTBD-E4 | FEAT-11 | Could |
| JTBD-S1 | FEAT-09 | Could |
| JTBD-S2 | FEAT-09 | Could |

Aucun JTBD orphelin. JTBD-F7 est couvert par FEAT-12 classée Won't have — choix documenté, pas oubli.

---

## Backlog priorisé

---

### FEAT-01 — Guide d'arrosage intelligent par plante

**JTBD couverts :** JTBD-F1  
**Priorité : Must have**  
**Justification :** Sans cette feature, l'app ne répond pas à son job #1 (16/16 interviewés), qui est aussi la cause d'échec la plus citée (sur-arrosage, 13/16). Un guide qui éduque aux signaux réels de la plante (toucher de la terre, aspect des feuilles) plutôt qu'à des fréquences fixes est le coeur de valeur que les apps concurrentes n'ont pas su apporter. Sans elle, le produit répète les erreurs de Greg et Planta.

**Périmètre :**
- Fiche par plante avec signaux d'arrosage observables (visuels + tactiles)
- Indicateur d'état "à arroser / pas encore / vérifier" basé sur les entrées utilisateur
- Éducation progressive : explication courte de chaque signal

**Arbitrage persona :** valeur pour Léa (survie des plantes) et Sophie (affiner sa compréhension). Non pertinent pour Jean qui a déjà ce savoir.

---

### FEAT-02 — Diagnostic visuel des problèmes par photo

**JTBD couverts :** JTBD-F2  
**Priorité : Must have**  
**Justification :** Le diagnostic visuel est le différenciateur principal identifié dans les données (11/16 interviewés, disposition à payer confirmée chez 7/16). Sans cette feature, l'app n'a pas de proposition de valeur distincte des apps existantes abandonnées. C'est la feature qui justifie le modèle économique. Une app sans diagnostic expert est une app de rappels d'arrosage — exactement ce que les utilisateurs refusent de payer.

**Périmètre :**
- Upload ou prise de photo du symptôme
- Identification de la cause probable : maladie, carence, parasite, arrosage, lumière
- Protocole de traitement adapté à la cause identifiée
- Niveau de confiance affiché explicitement (éviter fausse certitude)

**Incertitude à signaler :** la qualité du diagnostic dépend de la technologie utilisée (IA, base de données, validation humaine). Cette décision architecturale n'est pas dans le périmètre du PM mais conditionne la fiabilité de la feature. Un diagnostic peu fiable crée plus de frustration qu'une absence de diagnostic.

---

### FEAT-03 — Onboarding zéro friction

**JTBD couverts :** JTBD-F8, JTBD-E1  
**Priorité : Must have**  
**Justification :** L'onboarding est le premier point d'abandon des apps concurrentes (3/4 apps citées abandonnées pendant ou juste après l'onboarding). Pour Léa, chaque champ de saisie supplémentaire est une raison de quitter. La première valeur doit être accessible en < 30 secondes. Sans un onboarding minimal, les features Must restantes (FEAT-01, FEAT-02) ne seront jamais atteintes par le persona cible principal.

**Périmètre :**
- Ajout d'une plante : scan (photo + identification automatique) ou nom libre, sans saisie obligatoire de données botaniques
- Pas de création de compte requise pour la première valeur
- Aucun champ obligatoire au premier lancement
- Ton bienveillant, non-jugeant, sans jargon botanique

**Arbitrage persona :** conçu pour Léa. Sophie accepte plus d'onboarding mais bénéficie aussi de la fluidité. Irrélevant pour Jean (hors scope v1).

---

### FEAT-10 — Notifications adaptatives contextuelles

**JTBD couverts :** JTBD-F1, JTBD-E1  
**Priorité : Must have**  
**Justification :** Sans des notifications bien calibrées, FEAT-01 perd sa capacité à créer un rituel d'entretien. La notification est le seul point de contact proactif de l'app avec l'utilisateur. Si elle est mal calibrée (trop fréquente, non justifiée, indépendante des conditions réelles), elle entraîne la désactivation — ce qu'ont vécu 10/16 interviewés avec les apps actuelles. Une notification non désactivable ou non explicable est pire qu'une absence de notification.

**Périmètre :**
- Notification basée sur les conditions saisies (dernière action, type de plante, saison) — pas sur une fréquence fixe
- Chaque notification accompagnée d'une micro-explication ("Ton monstera a probablement soif : tu l'as arrosé il y a 12 jours et il fait chaud cette semaine.")
- Désactivation simple et sans friction
- Pas de spam : maximum 1 notification par plante et par période pertinente

---

### FEAT-04 — Mode vacances

**JTBD couverts :** JTBD-F3  
**Priorité : Should have**  
**Justification :** 14/16 interviewés citent les vacances comme source d'anxiété — c'est le deuxième JTBD le plus partagé. La feature apporte une valeur concrète et différenciante. Cependant, le produit reste utilisable sans elle (les utilisateurs ont des contournements : voisins, capillaires, transport des plantes). La valeur est forte mais non critique au lancement si l'arrosage quotidien est couvert.

**Périmètre :**
- Saisie de la durée d'absence
- Checklist de préparation au départ par plante (arrosage préventif, regroupement, exposition)
- Estimation de résistance par plante (jours sans arrosage selon l'espèce)
- Génération d'une fiche d'instructions partageables (PDF ou lien) pour un plant sitter

---

### FEAT-05 — Compatibilité plante/logement avant achat

**JTBD couverts :** JTBD-F4  
**Priorité : Should have**  
**Justification :** 8/16 interviewés évoquent des erreurs d'achat par méconnaissance de leur exposition lumineuse. C'est un besoin réel et préventif qui répond à une frustration documentée. La feature est différenciante (aucune app actuelle ne propose un diagnostic de logement). Cependant, elle intervient à un moment d'usage ponctuel (avant achat) et n'est pas bloquante pour l'entretien quotidien — d'où son classement en Should.

**Périmètre :**
- Profil logement : orientation, surface vitrée, exposition directe/indirecte
- Recommandations d'espèces compatibles avec le profil saisi
- Alerte "cette plante est difficile à maintenir dans votre logement" lors de l'ajout d'une plante incompatible

---

### FEAT-06 — Protocole anti-parasites

**JTBD couverts :** JTBD-F5  
**Priorité : Should have**  
**Justification :** 6/16 interviewés mentionnent les parasites comme problème récurrent difficile à résoudre. C'est un besoin spécifique à Sophie et Jean. La feature apporte une valeur claire (traitement étape par étape, pas de conseils génériques), complémentaire à FEAT-02 (diagnostic). Classée Should plutôt que Must car le besoin est moins universel (Léa n'a généralement pas encore ce problème) et un contournement existe (recherche Google, Reddit).

**Périmètre :**
- Identification du parasite : cochenilles, araignées rouges, pucerons, autres
- Protocole de traitement en 3 étapes progressives (du moins intrusif au plus intrusif)
- Suivi du traitement (a-t-il fonctionné ?) pour améliorer les recommandations futures
- Alerte contamination : "d'autres plantes à proximité sont à risque"

---

### FEAT-07 — Guide d'observation progressive

**JTBD couverts :** JTBD-F6, JTBD-F8  
**Priorité : Should have**  
**Justification :** L'observation est citée comme compétence clé par 13/16 interviewés. Éduquer à l'observation (plutôt que créer une dépendance aux notifications) est cohérent avec les valeurs du produit. Le format court et visuel répond directement à JTBD-F8 (Léa, 6/16). Classée Should car la feature a un effet à moyen terme (apprentissage) plutôt qu'un impact immédiat sur la survie des plantes.

**Périmètre :**
- Mini-guides visuels courts (≤ 60 secondes) sur un signal d'observation : feuilles jaunes, affaissement, taches, terre sèche
- Format scrollable ou swipeable, sans jargon, illustré
- Organisés par symptôme (pas par espèce) pour une accessibilité maximale
- Accessibles depuis la fiche plante ET en exploration libre

---

### FEAT-08 — Journal de suivi et post-mortem

**JTBD couverts :** JTBD-E2, JTBD-E3  
**Priorité : Should have**  
**Justification :** La perte d'une plante génère culpabilité et frustration chez 10/16 interviewés — un affect fort non adressé par les apps actuelles. Le journal permet à la fois de célébrer les réussites (nouvelle feuille, refloraison) et de tirer des apprentissages après une perte. Classée Should car la valeur est émotionnelle et différenciante mais non critique au lancement ; le produit reste utilisable sans elle à court terme.

**Périmètre :**
- Historique chronologique des actions par plante (arrosages, rempotages, traitements)
- Enregistrement de milestones positifs : nouvelle feuille, refloraison (avec photo optionnelle)
- Module post-mortem : quand une plante est marquée comme perdue, afficher une analyse des dernières données saisies pour identifier la cause probable
- Ton non-jugeant, apprentissage mis en avant (pas la faute mais la leçon)

---

### FEAT-09 — Partage de boutures et diagnostic collaboratif

**JTBD couverts :** JTBD-S1, JTBD-S2  
**Priorité : Could have**  
**Justification :** 9/16 interviewés valorisent la communauté, mais construire une communauté saine (modération, masse critique, cold start problem) est un risque opérationnel majeur en v1. Le besoin est réel mais adressable par Reddit et Instagram à court terme — le contournement est acceptable. À intégrer quand la base d'utilisateurs actifs est suffisante pour garantir une valeur communautaire réelle.

**Périmètre :**
- Post d'une photo avec demande de diagnostic (questions ouvertes à la communauté)
- Échange de boutures : annonce + mise en relation
- Votes sur les diagnostics pour signaler les réponses fiables

**Signal d'alerte :** si cette feature est lancée sans masse critique, elle crée une expérience vide (posts sans réponse) qui nuit à la rétention. Définir un seuil minimum d'utilisateurs actifs avant activation.

---

### FEAT-11 — Galerie esthétique de collection

**JTBD couverts :** JTBD-E4  
**Priorité : Could have**  
**Justification :** 7/16 interviewés citent l'esthétique comme motivation, mais cet aspect est davantage un bonus d'engagement qu'un job critique. Le persona Thomas B. précise même : "L'aspect esthétique est clairement prioritaire. Si mes plantes mouraient demain, je pense que j'en rachèterais des artificielles." — ce qui questionne l'alignement de ce JTBD avec la valeur centrale du produit (entretien réussi). La feature est agréable mais secondaire.

**Périmètre :**
- Vue galerie des plantes avec photos personnalisées
- Affichage des stats de progression (âge, milestones)
- Personnalisation de l'affichage (grille, liste, mur de photos)

---

### FEAT-12 — Données taxonomiques avancées et API botaniques

**JTBD couverts :** JTBD-F7  
**Priorité : Won't have (v1)**  
**Justification :** Ce JTBD est exclusivement porté par Jean (5/16 interviewés, tous collectionneurs avancés). Les besoins sont incompatibles avec une app grand public : intégration GBIF/Kew, granularité taxonomique par sous-espèce, protocoles de culture ultra-spécifiques. Le coût de développement est disproportionné pour le segment cible de la v1 (Léa + Sophie). L'exclure de la v1 est un choix explicite — pas un oubli. À réévaluer si la v2 cible le segment Jean.

**Note architecturale :** si une v2 doit étendre à Jean, l'architecture backend (base de données plantes, modèle de données) doit être conçue dès la v1 pour ne pas bloquer cette extension. Ce point doit être discuté avec l'équipe dev avant de finaliser l'architecture.

---

## Synthèse MoSCoW

| Priorité | Features | Nombre |
|----------|----------|--------|
| Must have | FEAT-01, FEAT-02, FEAT-03, FEAT-10 | 4 |
| Should have | FEAT-04, FEAT-05, FEAT-06, FEAT-07, FEAT-08 | 5 |
| Could have | FEAT-09, FEAT-11 | 2 |
| Won't have (v1) | FEAT-12 | 1 |
| **Total** | | **12** |

**Lecture de la répartition :** 4 Must sur 12 (33%) — conforme à une v1 resserrée. Le noyau Must correspond au "minimum viable" pour que le produit apporte une valeur distincte des apps abandonnées : éduquer à l'arrosage (FEAT-01), diagnostiquer (FEAT-02), sans friction (FEAT-03), avec des notifications utiles (FEAT-10). Tout le reste améliore l'expérience sans la conditionner.

---

## Contrôle qualité

- [x] Chaque JTBD identifié est couvert par au moins une feature (aucun JTBD orphelin).
- [x] Chaque feature référence explicitement le(s) JTBD-ID qu'elle adresse.
- [x] Chaque feature a une priorisation MoSCoW justifiée, pas juste étiquetée.
- [x] FEAT-12 (Won't have) documente explicitement l'exclusion de JTBD-F7.
- [x] Les incertitudes (modèle économique, architecture) sont signalées explicitement.
- [x] L'arbitrage de persona (v1 = Léa + Sophie, Jean exclu) est documenté.
