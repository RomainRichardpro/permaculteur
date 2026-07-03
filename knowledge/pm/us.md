# User Stories — App entretien de plantes d'intérieur

Date : 2026-07-03
Input : `knowledge/pm/backlog.md`
Méthode : découpage FEAT → US, format INVEST, critères d'acceptation Gherkin

Périmètre : Must have (FEAT-01, FEAT-02, FEAT-03, FEAT-10) + Should have (FEAT-04 à FEAT-08) + Could have sélectif (FEAT-09).
FEAT-11 (Could) et FEAT-12 (Won't have) ne génèrent pas d'US dans ce livrable.

---

## FEAT-01 — Guide d'arrosage intelligent par plante

### US-01 — Consulter les signaux d'arrosage d'une plante

**Feature parente :** FEAT-01  
**Persona :** Léa (débutante), Sophie (passionnée)

**En tant que** Léa, **je veux** voir les signaux concrets qui indiquent si ma plante a besoin d'eau (toucher de la terre, aspect des feuilles), **afin de** ne plus arroser par habitude ou par peur mais en réponse à ce que la plante me montre.

**Contexte designer :** Léa regarde son téléphone debout, souvent le matin avant de partir. Elle a les mains libres mais pas de patience pour une interface complexe. Le contenu doit être scannable en 10 secondes. Elle ne connaît pas le vocabulaire botanique.

**Contexte dev :** les signaux sont liés à l'espèce (chaque plante a ses propres indicateurs). La fiche doit être alimentée par une base de données par espèce, avec un fallback générique si l'espèce est inconnue.

**Critères d'acceptation :**

*Cas nominal :*
> Étant donné que Léa ouvre la fiche de son pothos,  
> Quand elle navigue vers la section "arrosage",  
> Alors elle voit au moins 2 signaux visuels illustrés (ex: "terre sèche sur 3 cm", "feuilles légèrement tombantes") et une indication du dernier arrosage enregistré.

*Cas limite — espèce inconnue :*
> Étant donné que Léa a ajouté une plante dont l'espèce n'a pas été identifiée,  
> Quand elle consulte la section "arrosage",  
> Alors elle voit des conseils génériques (signaux universels) avec une mention "conseils adaptés à l'espèce une fois celle-ci identifiée".

*Cas d'erreur — aucun arrosage enregistré :*
> Étant donné que la plante vient d'être ajoutée et qu'aucun arrosage n'a été enregistré,  
> Quand elle consulte la section "arrosage",  
> Alors l'indicateur de dernier arrosage affiche "aucun historique" et les signaux restent visibles.

---

### US-02 — Enregistrer un arrosage

**Feature parente :** FEAT-01  
**Persona :** Léa (débutante), Sophie (passionnée)

**En tant que** Léa, **je veux** marquer rapidement que j'ai arrosé une plante, **afin de** garder un historique qui me permettra de calibrer la prochaine intervention.

**Contexte designer :** l'action doit être réalisable en une frappe depuis la fiche plante. Pas de formulaire, pas de confirmation superflue. Un retour visuel immédiat ("arrosage enregistré") suffit.

**Contexte dev :** l'enregistrement horodate l'action (timestamp). Il alimente FEAT-10 (notifications) et FEAT-08 (historique). La saisie optionnelle d'une observation libre (champ texte court, non obligatoire) est utile pour FEAT-08.

**Critères d'acceptation :**

*Cas nominal :*
> Étant donné que Léa vient d'arroser son pothos,  
> Quand elle appuie sur "Arrosé" depuis la fiche de la plante,  
> Alors l'action est enregistrée avec la date et l'heure actuelles, et un retour visuel confirme l'action en moins d'une seconde.

*Cas limite — double enregistrement :*
> Étant donné que Léa a déjà enregistré un arrosage il y a moins de 2 heures,  
> Quand elle appuie à nouveau sur "Arrosé",  
> Alors l'app affiche un message "Tu as déjà enregistré un arrosage aujourd'hui — le confirmer quand même ?" avec deux options (Oui / Non), sans bloquer l'action.

---

## FEAT-02 — Diagnostic visuel des problèmes par photo

### US-03 — Lancer un diagnostic par photo

**Feature parente :** FEAT-02  
**Persona :** Léa (débutante), Sophie (passionnée)

**En tant que** Sophie, **je veux** prendre une photo des feuilles abîmées de ma plante et obtenir un diagnostic de la cause probable, **afin de** savoir si je dois traiter pour un champignon, corriger l'arrosage ou traiter un parasite — et ne pas perdre de temps avec le mauvais remède.

**Contexte designer :** Sophie utilise souvent l'app depuis sa cuisine le dimanche matin, en inspectant ses plantes une à une. Elle est prête à prendre une photo de qualité si ça améliore le diagnostic. Elle veut un résultat, pas un questionnaire. Le niveau de confiance du diagnostic doit être visible : elle ne fera pas confiance à un résultat présenté comme certain si la photo est floue.

**Contexte dev :** le flux est : capture/import photo → traitement (IA ou base de données de symptômes) → restitution du résultat avec probabilité. Le résultat doit inclure : cause probable, niveau de confiance, protocole de traitement associé. Temps de réponse cible : < 5 secondes. Fallback si l'image est inexploitable (trop floue, mal cadrée) : demander une nouvelle photo avec guide de cadrage.

**Critères d'acceptation :**

*Cas nominal :*
> Étant donné que Sophie voit des taches blanches sur les feuilles de son monstera,  
> Quand elle ouvre le diagnostic, prend une photo nette et la soumet,  
> Alors l'app lui retourne dans les 5 secondes : la cause probable (ex: "cochenilles farineuses"), un niveau de confiance ("probable" / "possible" / "incertain"), et un lien vers le protocole de traitement.

*Cas limite — photo inexploitable :*
> Étant donné que la photo soumise est trop floue pour être analysée,  
> Quand le traitement échoue à identifier un symptôme,  
> Alors l'app affiche "Photo difficile à analyser" avec un guide illustré de cadrage (distance, lumière recommandée) et invite à reprendre la photo.

*Cas d'erreur — aucune connexion :*
> Étant donné que Sophie n'a pas de connexion internet au moment du diagnostic,  
> Quand elle soumet une photo,  
> Alors l'app affiche un message clair ("Diagnostic indisponible sans connexion") et propose de réessayer plus tard ou d'accéder aux guides de symptômes hors-ligne.

---

### US-04 — Consulter le protocole de traitement associé au diagnostic

**Feature parente :** FEAT-02  
**Persona :** Sophie (passionnée)

**En tant que** Sophie, **je veux** accéder immédiatement au protocole de traitement correspondant au problème identifié, **afin de** savoir exactement quoi faire, dans quel ordre, avec quels produits accessibles.

**Contexte designer :** le protocole doit être lisible debout, en cuisine, en moins de 30 secondes. Format liste ordonnée, étape par étape. Pas de jargon chimique, des noms de produits courants (savon noir, alcool à 70°). Une illustration par étape si possible.

**Contexte dev :** le protocole est associé à la cause identifiée en US-03, pas à la plante (un même protocole peut s'appliquer à plusieurs espèces). Si le niveau de confiance est "incertain", le protocole doit le signaler et proposer des alternatives.

**Critères d'acceptation :**

*Cas nominal :*
> Étant donné que le diagnostic a identifié des cochenilles farineuses avec un niveau de confiance "probable",  
> Quand Sophie consulte le protocole,  
> Alors elle voit au moins 3 étapes ordonnées (ex: 1. Isolation, 2. Nettoyage manuel, 3. Traitement savon noir) avec pour chaque étape : l'action à faire, le produit recommandé, la fréquence.

*Cas limite — niveau de confiance "incertain" :*
> Étant donné que le diagnostic retourne un niveau de confiance "incertain",  
> Quand Sophie consulte le protocole,  
> Alors un bandeau visible indique "Diagnostic incertain — plusieurs causes possibles" et liste les 2-3 causes probables avec leur protocole respectif, en demandant à Sophie de choisir celle qui correspond le mieux.

---

## FEAT-03 — Onboarding zéro friction

### US-05 — Ajouter une première plante en moins de 30 secondes

**Feature parente :** FEAT-03  
**Persona :** Léa (débutante)

**En tant que** Léa, **je veux** ajouter ma première plante à l'app le plus vite possible, **afin de** voir immédiatement ce que l'app peut faire pour moi sans devoir répondre à un questionnaire.

**Contexte designer :** c'est le premier écran après l'ouverture de l'app. Chaque seconde de friction augmente le risque d'abandon. L'objectif est d'arriver à la fiche plante (avec au moins un conseil visible) en 3 interactions maximum. Pas de création de compte requise à cette étape. Le ton doit être bienveillant : pas d'"erreur", pas de champ obligatoire manquant.

**Contexte dev :** le flux minimal est : 1. Photo ou saisie du nom → 2. Identification automatique (ou confirmation manuelle) → 3. Fiche plante affichée. La création de compte peut être proposée (non imposée) après la première valeur. Les données sont stockées localement jusqu'à la création de compte si l'utilisateur choisit d'attendre.

**Critères d'acceptation :**

*Cas nominal :*
> Étant donné que Léa ouvre l'app pour la première fois,  
> Quand elle prend une photo de son pothos ou tape "pothos" dans le champ de recherche,  
> Alors elle accède à la fiche de sa plante (avec signaux d'arrosage et premier conseil) en moins de 30 secondes et sans avoir créé de compte.

*Cas limite — plante non identifiée par la photo :*
> Étant donné que la photo soumise ne correspond à aucune espèce reconnue,  
> Quand l'identification automatique échoue,  
> Alors l'app propose à Léa de saisir le nom de sa plante manuellement (champ texte libre) ou de choisir "Je ne sais pas" — ce dernier choix affiche des conseils génériques sans bloquer la progression.

*Critère d'accessibilité :* aucun champ obligatoire ne doit bloquer l'accès à la fiche plante. L'app doit être utilisable sans avoir renseigné l'espèce exacte, l'orientation de la fenêtre ou le nom de la plante.

---

## FEAT-10 — Notifications adaptatives contextuelles

### US-06 — Recevoir une notification d'arrosage contextualisée

**Feature parente :** FEAT-10  
**Persona :** Léa (débutante), Sophie (passionnée)

**En tant que** Léa, **je veux** recevoir une notification qui m'explique pourquoi ma plante pourrait avoir besoin d'eau maintenant (et pas juste "arrose ta plante"), **afin de** comprendre la logique et de ne pas la traiter comme un spam.

**Contexte designer :** la notification s'affiche sur l'écran de verrouillage. Le texte doit tenir en 2 lignes maximum. La raison doit être dans la notification elle-même (pas dans l'app après clic). Exemple : "Ton pothos n'a pas été arrosé depuis 10 jours et il fait 26°C chez toi cette semaine."

**Contexte dev :** la notification est générée à partir de : dernière date d'arrosage + type de plante + saison/température si disponible. Elle ne peut être déclenchée qu'une fois par plante par fenêtre de temps pertinente (configurable selon l'espèce, minimum 3 jours). La désactivation par plante doit être accessible en 2 taps maximum depuis la notification.

**Critères d'acceptation :**

*Cas nominal :*
> Étant donné que le pothos de Léa n'a pas été arrosé depuis 10 jours et que la température extérieure dépasse 25°C,  
> Quand la condition d'arrosage probable est atteinte,  
> Alors Léa reçoit une notification avec le nom de la plante, la durée depuis le dernier arrosage, et une courte explication contextuelle (≤ 120 caractères hors nom de plante).

*Cas limite — notification ignorée répétée :*
> Étant donné que Léa n'a pas tapé la notification depuis 3 jours,  
> Quand la même plante déclenche à nouveau une condition d'arrosage,  
> Alors l'app n'envoie pas une deuxième notification identique — elle attend le prochain cycle ou propose une option "m'alerter moins souvent pour cette plante".

*Cas d'erreur — autorisation de notifications refusée :*
> Étant donné que Léa n'a pas accordé les autorisations de notifications,  
> Quand elle consulte la fiche d'une plante,  
> Alors l'app affiche un rappel non intrusif (bandeau en bas d'écran, dismissible) proposant d'activer les notifications avec une explication de leur valeur — sans bloquer la navigation.

---

### US-07 — Désactiver les notifications pour une plante spécifique

**Feature parente :** FEAT-10  
**Persona :** Léa (débutante), Sophie (passionnée)

**En tant que** Sophie, **je veux** désactiver les notifications pour une plante dont je gère moi-même l'arrosage sans aide, **afin de** ne pas recevoir des alertes pour des plantes que je surveille déjà au quotidien.

**Contexte designer :** l'option doit être accessible depuis la fiche plante ET depuis la notification elle-même (bouton "gérer" dans la notification système). Pas besoin d'aller dans les paramètres généraux.

**Critères d'acceptation :**

*Cas nominal :*
> Étant donné que Sophie reçoit une notification pour son monstera,  
> Quand elle appuie sur l'action "Gérer les alertes" dans la notification,  
> Alors elle peut désactiver les notifications pour cette plante uniquement, en 1 tap, sans ouvrir l'app.

---

## FEAT-04 — Mode vacances

### US-08 — Générer un plan de préparation vacances

**Feature parente :** FEAT-04  
**Persona :** Léa (débutante), Sophie (passionnée)

**En tant que** Léa, **je veux** saisir mes dates de départ et d'arrivée et recevoir une checklist de ce que je dois faire pour chaque plante avant de partir, **afin de** ne pas perdre mes plantes pendant mes vacances sans avoir à y penser plante par plante.

**Contexte designer :** Léa prépare ses vacances en dernière minute. L'interface doit être accessible depuis un widget ou un raccourci visible ("Partir en vacances" sur l'écran d'accueil de l'app). Le résultat doit être une liste claire et actionnable, pas un rapport.

**Contexte dev :** la durée d'absence est calculée à partir des dates saisies. Chaque plante est évaluée selon : dernier arrosage, type (résistance à la sécheresse), saison. Le résultat par plante est binaire : "arrose abondamment avant de partir" / "peut attendre" / "besoin d'un plant sitter".

**Critères d'acceptation :**

*Cas nominal :*
> Étant donné que Léa saisit une absence de 15 jours,  
> Quand elle lance le mode vacances,  
> Alors elle obtient pour chacune de ses plantes : une action recommandée avant le départ (arrosage, regroupement, exposition à modifier) et une estimation de résistance ("résistera sans arrosage" / "à risque" / "ne résistera pas").

*Cas limite — plantes à risque identifiées :*
> Étant donné que l'absence dépasse la résistance de 2 plantes sur 5,  
> Quand le plan est généré,  
> Alors les plantes à risque sont signalées visuellement en premier et l'app propose l'option "Créer une fiche pour un plant sitter".

---

### US-09 — Créer et partager une fiche d'instructions pour un plant sitter

**Feature parente :** FEAT-04  
**Persona :** Sophie (passionnée)

**En tant que** Sophie, **je veux** générer une fiche d'instructions pour la personne qui gardera mes plantes pendant mon absence, **afin de** lui déléguer les soins sans avoir à tout lui expliquer oralement.

**Contexte designer :** la fiche doit être lisible par quelqu'un qui n'utilise pas l'app. Format simple : liste de plantes avec photo, action à faire, fréquence. Partageable par lien ou PDF. Le destinataire ne doit pas avoir à télécharger l'app pour lire la fiche.

**Critères d'acceptation :**

*Cas nominal :*
> Étant donné que Sophie a configuré le mode vacances pour ses 14 plantes,  
> Quand elle appuie sur "Créer la fiche plant sitter",  
> Alors elle obtient un lien partageable (valide pendant la durée de son absence) affichant pour chaque plante : sa photo, son nom, la fréquence d'arrosage recommandée, et les signaux à surveiller — sans nécessiter de compte ou d'installation.

---

## FEAT-05 — Compatibilité plante/logement avant achat

### US-10 — Saisir le profil lumineux de son logement

**Feature parente :** FEAT-05  
**Persona :** Léa (débutante), Sophie (passionnée)

**En tant que** Léa, **je veux** indiquer l'orientation et l'exposition de mon appartement, **afin de** savoir quelles plantes peuvent y vivre sans problème.

**Contexte designer :** cette saisie est contextuelle — elle intervient lors de l'ajout d'une plante ou dans les paramètres de l'app. Elle ne doit pas bloquer l'accès à l'app si elle n'est pas remplie. Un guide visuel simple (boussole, illustration des expositions) aide les utilisateurs qui ne connaissent pas leur orientation.

**Critères d'acceptation :**

*Cas nominal :*
> Étant donné que Léa saisit "appartement nord, lumière indirecte faible",  
> Quand elle accède aux recommandations,  
> Alors elle voit une liste de plantes compatibles avec son profil lumineux, avec une explication courte pour chaque recommandation.

*Cas limite — profil non renseigné :*
> Étant donné que Léa n'a pas saisi son profil lumineux,  
> Quand elle ajoute une nouvelle plante avec des besoins lumineux élevés,  
> Alors l'app affiche une suggestion douce : "Dis-nous l'orientation de ton appartement pour vérifier si cette plante s'y plaira" — sans bloquer l'ajout.

---

### US-11 — Recevoir une alerte d'incompatibilité lors de l'ajout d'une plante

**Feature parente :** FEAT-05  
**Persona :** Léa (débutante), Sophie (passionnée)

**En tant que** Léa, **je veux** être avertie si une plante que j'ajoute est incompatible avec mon logement, **afin d'** éviter d'acheter une plante qui va mourir par manque de lumière.

**Critères d'acceptation :**

*Cas nominal :*
> Étant donné que le profil de Léa indique un appartement orienté nord (faible luminosité),  
> Quand elle ajoute un cactus ou une succulente (besoin de plein soleil),  
> Alors l'app affiche un avertissement : "Cette plante a besoin de beaucoup de lumière directe. Dans un appartement orienté nord, elle risque de s'étioler." avec l'option de continuer quand même ou de voir des alternatives adaptées.

*Cas limite — plante tolérante à plusieurs expositions :*
> Étant donné que la plante ajoutée tolère aussi bien la lumière directe qu'indirecte,  
> Quand le profil du logement est restrictif (nord, peu de lumière),  
> Alors aucune alerte n'est affichée — l'incompatibilité n'est signalée que si le besoin de la plante dépasse les capacités du logement.

---

## FEAT-06 — Protocole anti-parasites

### US-12 — Identifier un parasite et accéder au protocole de traitement

**Feature parente :** FEAT-06  
**Persona :** Sophie (passionnée)

**En tant que** Sophie, **je veux** identifier le type de parasite qui infeste ma plante et accéder à un protocole de traitement progressif, **afin de** l'éradiquer complètement plutôt que de bricoler des solutions que j'ai déjà essayées.

**Contexte designer :** Sophie connaît déjà les parasites courants. L'interface peut proposer une sélection rapide (cochenilles farineuses, araignées rouges, pucerons, autres) ou une identification par photo (reliée à FEAT-02). Le protocole est affiché en étapes numérotées, avec des produits nommés sans jargon.

**Contexte dev :** le protocole est lié au type de parasite, pas à l'espèce de plante (sauf exceptions documentées). Le suivi de traitement doit mettre à jour l'historique de FEAT-08.

**Critères d'acceptation :**

*Cas nominal :*
> Étant donné que Sophie identifie des cochenilles farineuses sur sa plante,  
> Quand elle sélectionne "cochenilles" dans le module parasite,  
> Alors elle voit un protocole en 3 étapes minimum (du moins intrusif au plus intrusif) avec pour chaque étape : produit recommandé, mode d'application, fréquence, et un indicateur "à ré-appliquer si pas d'amélioration après X jours".

*Cas limite — contamination d'autres plantes :*
> Étant donné que la plante infestée est en contact avec d'autres plantes,  
> Quand Sophie lance le protocole,  
> Alors l'app affiche un avertissement : "Les plantes voisines sont à risque — pense à les isoler ou à les inspecter" avec un lien vers un guide d'inspection rapide.

---

### US-13 — Suivre l'efficacité d'un traitement anti-parasites

**Feature parente :** FEAT-06  
**Persona :** Sophie (passionnée)

**En tant que** Sophie, **je veux** indiquer si le traitement a fonctionné après chaque cycle, **afin de** passer à l'étape suivante si nécessaire et de garder une trace de ce qui a marché.

**Critères d'acceptation :**

*Cas nominal :*
> Étant donné que Sophie a appliqué la première étape du protocole (savon noir),  
> Quand elle indique "pas d'amélioration" après la période d'observation,  
> Alors l'app passe automatiquement à l'étape 2 du protocole et note le résultat dans l'historique de la plante.

---

## FEAT-07 — Guide d'observation progressive

### US-14 — Accéder à un mini-guide visuel sur un symptôme

**Feature parente :** FEAT-07  
**Persona :** Léa (débutante), Sophie (passionnée)

**En tant que** Léa, **je veux** accéder à un guide court et illustré sur ce que signifie "feuilles jaunes" sur ma plante, **afin de** comprendre rapidement si c'est grave et quoi faire, sans lire un article de 10 minutes.

**Contexte designer :** le format doit être swipeable, visuel, ≤ 5 écrans par symptôme. Inspiré du format Stories ou TikTok : une idée par écran, illustration + texte court. Pas de jargon. Accessible depuis la fiche plante ("Ma plante a un problème → Feuilles jaunes") ET en exploration libre.

**Contexte dev :** les guides sont indexés par symptôme (pas par espèce), avec un tag d'espèce optionnel pour affiner. Ils sont téléchargeables hors-ligne une fois consultés.

**Critères d'acceptation :**

*Cas nominal :*
> Étant donné que Léa voit des feuilles jaunes sur son pothos,  
> Quand elle sélectionne "feuilles jaunes" dans le guide d'observation,  
> Alors elle voit un mini-guide de 3 à 5 écrans couvrant les causes les plus fréquentes (sur-arrosage, manque de lumière, âge naturel des feuilles) avec pour chaque cause une illustration et une action courte recommandée.

*Cas limite — symptôme non couvert :*
> Étant donné que Léa décrit un symptôme qui n'est pas dans la bibliothèque,  
> Quand elle ne trouve pas son symptôme dans la liste,  
> Alors l'app propose de lancer le diagnostic photo (US-03) ou d'accéder à la communauté pour poser une question (si FEAT-09 est activée).

---

## FEAT-08 — Journal de suivi et post-mortem

### US-15 — Consulter l'historique des soins d'une plante

**Feature parente :** FEAT-08  
**Persona :** Sophie (passionnée)

**En tant que** Sophie, **je veux** voir l'historique chronologique des actions effectuées sur une plante (arrosages, traitements, rempotages), **afin de** comprendre ce qui s'est passé quand un problème apparaît et de ne pas répéter une erreur.

**Contexte designer :** l'historique est une timeline inversée (actions les plus récentes en premier). Il est accessible depuis la fiche plante. Chaque entrée affiche : date, type d'action, observation libre si saisie. L'interface doit rester lisible si l'historique dépasse 50 entrées.

**Critères d'acceptation :**

*Cas nominal :*
> Étant donné que Sophie a arrosé son monstera 3 fois ce mois-ci et appliqué un traitement anti-cochenilles,  
> Quand elle ouvre l'historique de sa plante,  
> Alors elle voit les 5 dernières actions par défaut (avec option d'afficher tout), chacune avec la date et le type d'action, triées de la plus récente à la plus ancienne.

---

### US-16 — Enregistrer un milestone positif (nouvelle feuille, refloraison)

**Feature parente :** FEAT-08  
**Persona :** Léa (débutante), Sophie (passionnée)

**En tant que** Léa, **je veux** marquer quand une nouvelle feuille sort ou quand ma plante fleurit, **afin de** garder une trace de mes réussites et voir ma progression dans le temps.

**Contexte designer :** l'action doit être rapide et satisfaisante. Un bouton "Célébrer" ou "Nouveau milestone" depuis la fiche plante, avec une animation légère après la saisie. Une photo optionnelle enrichit le milestone mais n'est pas obligatoire.

**Critères d'acceptation :**

*Cas nominal :*
> Étant donné que Léa voit une nouvelle feuille sur son pothos,  
> Quand elle appuie sur "Nouveau milestone" et sélectionne "Nouvelle feuille",  
> Alors le milestone est enregistré avec la date et apparaît dans l'historique de la plante. Un retour visuel positif est affiché (animation ou message bienveillant).

---

### US-17 — Comprendre pourquoi une plante est morte (post-mortem)

**Feature parente :** FEAT-08  
**Persona :** Léa (débutante), Sophie (passionnée)

**En tant que** Léa, **je veux** comprendre ce qui a probablement tué ma plante après l'avoir marquée comme perdue, **afin de** ne pas culpabiliser inutilement et de ne pas reproduire la même erreur.

**Contexte designer :** le post-mortem intervient quand l'utilisateur marque une plante comme "perdue" ou "morte". Le ton est absolument non-jugeant : ce n'est pas une autopsy accusatoire mais un apprentissage. L'écran doit se terminer sur une note positive ("Ce que tu peux faire différemment la prochaine fois").

**Contexte dev :** l'analyse est basée sur les données saisies dans l'historique : fréquence d'arrosage vs. norme de l'espèce, derniers symptômes diagnostiqués, durée depuis le dernier soin. Si l'historique est insuffisant (< 2 entrées), l'app affiche des causes fréquentes génériques pour l'espèce.

**Critères d'acceptation :**

*Cas nominal :*
> Étant donné que Léa marque son pothos comme "perdu",  
> Quand elle confirme la perte,  
> Alors l'app affiche un écran post-mortem avec : la cause probable basée sur l'historique (ex: "Les données suggèrent un possible sur-arrosage : tu l'as arrosé 4 fois en 2 semaines"), une explication courte, et une suggestion pour la prochaine fois — sans utiliser de langage culpabilisant.

*Cas limite — historique insuffisant :*
> Étant donné que la plante perdue n'a qu'une seule entrée dans son historique,  
> Quand le post-mortem est déclenché,  
> Alors l'app affiche les 3 causes les plus fréquentes de perte pour cette espèce (données génériques) avec la mention "Nous n'avons pas assez d'historique pour analyser précisément — plus tu enregistres, mieux on peut t'aider."

---

## FEAT-09 — Partage de boutures et diagnostic collaboratif

### US-18 — Poster une photo pour un diagnostic collaboratif

**Feature parente :** FEAT-09  
**Persona :** Sophie (passionnée)

**En tant que** Sophie, **je veux** poster une photo de ma plante malade dans la communauté pour avoir l'avis d'autres jardiniers, **afin d'** obtenir un diagnostic fiable par des personnes expérimentées quand le diagnostic automatique est incertain.

**Contexte designer :** cette feature n'est accessible que si la communauté est activée (voir signal d'alerte FEAT-09 dans le backlog). Le post doit être simple : photo + description libre optionnelle + tag de l'espèce. La modération doit être visible (signalement possible sur chaque réponse).

**Contexte dev :** la feature nécessite un système de modération minimal (signalement, masquage automatique si seuil atteint). Les posts inactifs depuis 7 jours sans réponse peuvent déclencher une relance automatique vers le diagnostic IA (US-03).

**Critères d'acceptation :**

*Cas nominal :*
> Étant donné que Sophie a un résultat de diagnostic incertain (US-03),  
> Quand elle appuie sur "Demander à la communauté",  
> Alors sa photo est postée dans le fil communautaire avec le tag de l'espèce, et elle reçoit une notification quand une réponse est publiée.

*Cas limite — aucune réponse après 48h :*
> Étant donné que le post de Sophie n'a reçu aucune réponse après 48 heures,  
> Quand le délai est atteint,  
> Alors l'app envoie une notification suggérant de consulter les guides de symptômes (FEAT-07) ou de relancer un diagnostic photo (FEAT-02).

---

## Contrôle qualité

- [x] Chaque US référence sa FEAT-ID parente.
- [x] Chaque US respecte le format INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable).
- [x] Chaque US possède au moins un critère d'acceptation testable au format Étant donné / Quand / Alors.
- [x] Les critères d'acceptation couvrent le cas nominal + au moins un cas limite ou cas d'erreur.
- [x] Le contexte designer et le contexte dev sont distincts dans chaque US complexe.
- [x] Aucune US ne prescrit une solution UI (bouton rouge, couleur, placement d'élément).
- [x] Aucune US purement technique (refactoring, infrastructure) n'a été ajoutée.
- [x] Le ton est non-jugeant dans toutes les US liées à la perte ou à l'erreur (US-17 notamment).
- [x] Traçabilité complète : JTBD → FEAT → US vérifiable pour toutes les US.
