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
- **Typographie** : Museo Sans Rounded (titres 900/1000, texte 300–700). La police étant sous licence
  commerciale, le site utilise **Nunito** (libre, arrondie, graisses 200 à 1000) auto-hébergée ; si
  Museo Sans Rounded est disponible (licence Adobe Fonts), elle est utilisée en priorité.
- **Motif** : le « V » du logo répété en bleu pâle (`assets/motif.svg`, disponible pour de futurs usages).

## Produits présentés

| Marque | Modèle | Caractéristiques affichées (versions européennes, pods 2 ml) |
|---|---|---|
| OXVA | Xlim Pro 3 | écran couleur 1,05", 1500 mAh, 5–30 W |
| OXVA | Xlim Pro 2 | écran couleur 0,56", 1300 mAh, 5–30 W |
| OXVA | Xlim SE | 900 mAh, jusqu'à 25 W, tirage automatique |
| Aspire | Pixo | écran couleur tactile, 1100 mAh, 5–30 W |
| Aspire | Pixo Max | 2600 mAh, jusqu'à 35 W (3 modes), remplissage haut ou côté |

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
| `assets/fonts/` | Nunito variable (SIL Open Font License) |

Aucune ressource externe n'est chargée (pas de Google Fonts, pas de traceur).

## Lancer en local

```bash
npx serve .
# ou
python3 -m http.server 8000
```

## À compléter avant la mise en ligne

Valeurs provisoires à remplacer :

- Adresse exacte (`Quai du Port, 13002 Marseille`) — `index.html` (menu, « Nous trouver », footer, JSON-LD) et `mentions-legales.html`
- Téléphone (`04 91 00 00 00` / `+33491000000`)
- Horaires d'ouverture : **lundi – samedi 9h30 – 20h**, relevés sur la plaque de la devanture (à confirmer)
- Produits présentés (noms, visuels, coloris) dans la section « Nos produits »
- Informations légales dans `mentions-legales.html` (forme juridique, SIRET, hébergeur…)

L'e-mail `contact@vapelite-france.fr` et le domaine `vapelite-france.fr` proviennent de la charte.

## Rappel réglementaire

La publicité en faveur des produits du vapotage est encadrée en France (art. L3513-4 du Code de la santé
publique). Le site présente les produits **à titre informatif**, sans prix, sans vente en ligne et sans
allégation de santé, rappelle l'interdiction de vente aux mineurs et demande une confirmation d'âge.
Faire valider les textes par un conseil juridique avant la mise en ligne.
