# Vapelite France — site vitrine

Site vitrine statique de **Vapelite France**, maison de la vape au Vieux-Port de Marseille.
Sur le site, le lieu est appelé **« la Maison »** (et non « la boutique ») pour un ton plus chaleureux et plus haut de gamme.

Vitrine produits animée : bannière **bleu Klein** (`#002fa7`, couleur de la boutique) en slider,
gamme de produits filtrable avec choix des coloris, section sombre animée au défilement, valeurs,
boutique et pied de page sombre. Le reste du site est blanc, gris clair et noir pour mettre les
produits en avant. Éléments issus de la **charte graphique Vapelite France** :

- **Couleur de référence** : bleu `#2c5794` (RVB 44 87 148 · Pantone P 105-7C · CMJN 84/57/0/22).
  À la demande de la Maison, le logo du site est décliné en **bleu Klein `#002fa7`**
  (`assets/logo-vapelite-klein.svg`), la même couleur que les boutons et la bannière ;
  la version de la charte reste disponible dans `assets/logo-vapelite.svg`.
- **Logotype** : extrait en vectoriel de la charte, sans modification — version bleue sur fond clair,
  réserve blanche sur fond bleu. Placé en haut à gauche, largeur ≥ 20 mm.
- **Typographie** : la charte prévoit Museo Sans Rounded ; à la demande de la Maison, le site adopte une
  typographie épurée façon Apple, auto-hébergée (SIL Open Font License) : **Inter** partout — titres en
  graisse fine (200–300, lettres resserrées), texte en graisse normale. Sur iPhone et Mac, la police
  système d'Apple (SF Pro) est utilisée directement.
- **Motif** : le « V » du logo répété en bleu pâle (`assets/motif.svg`, disponible pour de futurs usages).

## Produits phares

La section « Nos produits phares » (`#produits`) présente une sélection, pas le catalogue complet.

### Produits présentés

| Marque | Modèle | Caractéristiques affichées (versions européennes, pods 2 ml) |
|---|---|---|
| VOOPOO | Drag X3 (édition French Riviera) | écran tactile 1,66", 5–80 W, accu 18650 ou 21700, pod PnP X, modes Smart / RBA / Eco |
| VOOPOO | Drag S3 (édition French Riviera) | écran 0,96", batterie 3000 mAh, 5–60 W, pod PnP X |
| OXVA | Xlim Pro 3 | écran couleur 1,05", 1500 mAh, 5–30 W |
| OXVA | Xlim Pro 2 | écran couleur 0,56", 1300 mAh, 5–30 W |
| OXVA | Xlim SE | 900 mAh, jusqu'à 25 W, tirage automatique |
| Aspire | Pixo | écran couleur tactile, 1100 mAh, 5–30 W |
| Kiwi Vapor | Kiwi 2 | pen 400 mAh + power bank 1800 mAh, pod 1,8 ml 0,8 Ω, USB-C ; 5 coloris en photo réelle (Midnight Blue, Champagne, Iron Gate, Nimbus Cloud, Red Velvet) |
| Aspire | Pixo Max (coup de cœur) | 2600 mAh, 10–35 W, modes Eco / Normal / Max, double écran LED, recharge 2 A ; 8 coloris en photo réelle (Brushed Silver, White Glow, Wood Grain, Pink Gradient, Brushed Pink, Glory Black, Speedy Black, Carbon Black) |

Les appareils sont pour l'instant des **illustrations SVG** inspirées des modèles (sprite en haut de
`index.html`, couleurs réglables par variables CSS `--body`, `--liquid`, `--accent`). Les coloris des
pastilles sont indicatifs : à ajuster selon le stock.

### Remplacer une illustration par la photo officielle

1. Déposer la photo détourée (fond transparent, format `.webp` ou `.png`) dans `assets/produits/`,
   par exemple `assets/produits/oxva-xlim-pro-3.webp`. Utiliser les visuels fournis par le fabricant
   ou le distributeur, avec leur accord.
2. Dans `index.html`, dans la carte du produit, remplacer la ligne `<svg class="device" …>…</svg>` par :

   ```html
   <img src="assets/produits/oxva-xlim-pro-3.webp" alt="OXVA Xlim Pro 3" loading="lazy">
   ```

   La mise en forme (taille, ombre, animation au survol) s'applique automatiquement.

## Collection d'e-liquides Vapelite

Rendus 3D officiels extraits du document « E-liquide Vapelite » (PDF de présentation des étiquettes),
détourés avec transparence et convertis en WebP (`assets/produits/`). Flacons de 50 ml, 0 mg,
50 PG / 50 VG, fabriqués et conditionnés en France.

| Parfum | Notes | Famille (filtre) | Fichiers |
|---|---|---|---|
| Blond Antique | classic blond | Classique | `eliquide-blond-antique-{360,720}.webp` |
| Dragon Céleste | fruit du dragon | Fruité | `eliquide-dragon-celeste-{360,720}.webp` |
| Douceur Nacré | biscuit · café · vanille | Gourmand | `eliquide-douceur-nacre-{360,720}.webp` |
| Menthe Éternelle | menthe · frais | Frais | `eliquide-menthe-eternelle-{360,720}.webp` |
| Golden Pop | pop-corn | Gourmand | `eliquide-golden-pop-{360,720}.webp` |
| Rubis Écarlate | cerise · framboise bleue | Fruité | `eliquide-rubis-ecarlate-{360,720}.webp` |
| Rouge Envoûtant | fruits rouges · frais | Fruité, Frais | `eliquide-rouge-envoutant-{360,720}.webp` |
| Souffle de Fraise | fraise · fruit du dragon | Fruité | `eliquide-souffle-de-fraise-{360,720}.webp` |
| Éclat Tropical | pastèque · kiwi | Fruité | `eliquide-eclat-tropical-{360,720}.webp` |
| Vigne Boréale | raisin glacé | Fruité, Frais | `eliquide-vigne-boreale-{360,720}.webp` |
| Mélodie Pourpre | ananas · kiwi · fruit du dragon | Fruité | `eliquide-melodie-pourpre-{360,720}.webp` |
| Nectar Exotique | mangue · pastèque · citron | Fruité | `eliquide-nectar-exotique-{360,720}.webp` |
| Original Coke | cola · frais | Frais | `eliquide-original-coke-{360,720}.webp` |

La gamme Vapelite compte **20 saveurs** (et la Maison plus de **700 saveurs d'e-liquides** au total) ; la section « La collection Vapelite » (`#collection`) en présente une sélection de 13 dans un carrousel
horizontal filtrable par famille ; trois flacons sont aussi mis en avant dans la bannière.

## Marques partenaires

**Ruban défilant** (sous la bannière) : marques principales uniquement — Geekvape, VOOPOO, Aspire, OXVA,
Vaporesso, Vaptio, Nevoks, Lost Vape, Dotmod, Kiwi, SMOK, Elf Bar (cigarettes électroniques) et Liquideo,
Alfaliquid, A&L, Pulp, JNR, Adalya, Al Fakher, Elfliq, Curieux (e-liquides).

**Section « Les marques de la Maison »** (`#marques`) : liste complète par catégorie (cigarettes
électroniques, puffs rechargeables, e-liquides principaux et « Et aussi »).

### Ajouter les logos dans le ruban

Les logos officiels n'étant pas téléchargeables depuis l'environnement de travail, le ruban affiche
pour l'instant le nom de chaque marque. Pour passer au logo :

1. Déposer le fichier dans `assets/partenaires/`, nommé d'après le `data-slug` de la marque
   (`geekvape.svg`, `voopoo.svg`, `a-et-l.png`…) — SVG ou PNG transparent de préférence.
2. Dans `index.html`, dans le ruban, remplacer le texte de la marque par l'image (les deux occurrences) :

   ```html
   <li class="partner" data-slug="geekvape"><img src="assets/partenaires/geekvape.svg" alt="Geekvape"></li>
   ```

   Les logos s'affichent en gris et reprennent leurs couleurs au survol.

## Notre coup de cœur

L'**Aspire Pixo Max White Glow** est présentée comme « Notre coup de cœur » dans la **deuxième diapositive
de la bannière** (photo `assets/produits/pixo-max-white-glow-{900,1600}.{webp,jpg}` en plein cadre). Le lien
« Coup de cœur » du menu affiche directement cette diapositive. Dans « Nos produits », la carte Pixo Max
affiche la vraie photo de chaque coloris (`assets/produits/aspire-pixo-max-<coloris>.webp`).

## Vidéo VOOPOO Drag X3 & Drag S3

Première diapositive de la bannière : vidéo officielle de l'édition French Riviera (Black Lagoon,
Grand Cru), en plein cadre derrière le texte. Fichiers `assets/videos/voopoo-drag-x3-s3.{webm,mp4}`
+ `-poster.jpg` : 1280 px, sans son, introduction noire de 6 s retirée et bande noire basse rognée
(≈ 24 s, ≈ 3 Mo). La diapositive dure le temps de la vidéo (`data-duration="24000"`), la vidéo repart
du début à chaque affichage et se met en pause sur les autres diapositives.

Les cartes Drag X3 / Drag S3 utilisent pour l'instant des images tirées de la vidéo
(`assets/produits/voopoo-drag-{x3,s3}-video.webp`) ; à remplacer par les photos produits détourées.

## Photos et vidéo de la boutique

| Fichier | Utilisation |
|---|---|
| `assets/photos/boutique-interieur-{800,1600}.{webp,jpg}` | Section « Entrez, on vous attend » (plein cadre, zoom au défilement) |
| `assets/photos/devanture.{webm,mp4}` + `devanture-poster.jpg` | Vidéo de la devanture en boucle, section « La boutique » |
| `assets/photos/devanture-nuit-{600,1000}.{webp,jpg}` | Photo de la devanture le soir, section « La boutique » |
| `assets/og-image.jpg` | Image de partage sur les réseaux sociaux (logo sur fond bleu) |

La vidéo d'origine (HDR, 7 Mo) a été convertie en SDR 720p sans son (≈ 0,4–0,5 Mo). Les photos sont
redimensionnées et compressées en WebP avec repli JPEG.

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Page unique : slider, gamme, « Bien choisir », valeurs, boutique, footer, vérification d'âge |
| `mentions-legales.html` | Mentions légales (à compléter) |
| `styles.css` | Tokens de la charte et mise en page |
| `script.js` | Slider, parallaxe, filtres, coloris, animation au défilement, menu mobile, vérification d'âge |
| `assets/logo-vapelite-klein.svg` | Logotype bleu Klein (utilisé sur le site) |
| `assets/logo-vapelite.svg` / `logo-vapelite-blanc.svg` | Logotype bleu charte / négatif |
| `assets/symbole-vapelite.svg` | Symbole « V » seul |
| `assets/motif.svg` | Motif de marque |
| `assets/favicon.svg` | Favicon |
| `assets/fonts/` | Inter variable (SIL Open Font License) |

Aucune ressource externe n'est chargée (pas de Google Fonts, pas de traceur).

## Lancer en local

```bash
npx serve .
# ou
python3 -m http.server 8000
```

## À compléter avant la mise en ligne

Valeurs provisoires à remplacer :

- Adresse et téléphone : **1 rue Pythéas, 13001 Marseille · 04 91 70 92 97**, repris de l'étiquette des flacons (à confirmer)
- Horaires d'ouverture : **lundi – samedi 9h30 – 20h**, relevés sur la plaque de la devanture (à confirmer)
- Appareils présentés (visuels, coloris) dans la section « Nos produits »
- Informations légales dans `mentions-legales.html` (forme juridique, SIRET, hébergeur…)

L'e-mail `contact@vapelite-france.fr` et le domaine `vapelite-france.fr` proviennent de la charte.

## Rappel réglementaire

La publicité en faveur des produits du vapotage est encadrée en France (art. L3513-4 du Code de la santé
publique). Le site présente les produits **à titre informatif**, sans prix, sans vente en ligne et sans
allégation de santé, rappelle l'interdiction de vente aux mineurs et demande une confirmation d'âge.
Faire valider les textes par un conseil juridique avant la mise en ligne.
