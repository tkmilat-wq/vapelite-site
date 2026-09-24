# Vapelite France — site vitrine

Site vitrine statique de **Vapelite France**, boutique de cigarettes électroniques au Vieux-Port de Marseille.

Vitrine produits animée : bannière **bleu Klein** (`#002fa7`, couleur de la boutique) en slider,
gamme de produits filtrable avec choix des coloris, section sombre animée au défilement, valeurs,
boutique et pied de page sombre. Le reste du site est blanc, gris clair et noir pour mettre les
produits en avant. Éléments issus de la **charte graphique Vapelite France** :

- **Couleur de référence** : bleu `#2c5794` (RVB 44 87 148 · Pantone P 105-7C · CMJN 84/57/0/22), utilisé pour le logo.
- **Logotype** : extrait en vectoriel de la charte, sans modification — version bleue sur fond clair,
  réserve blanche sur fond bleu. Placé en haut à gauche, largeur ≥ 20 mm.
- **Typographie** : Museo Sans Rounded (titres 900/1000, texte 300–700). La police étant sous licence
  commerciale, le site utilise **Nunito** (libre, arrondie, graisses 200 à 1000) auto-hébergée ; si
  Museo Sans Rounded est disponible (licence Adobe Fonts), elle est utilisée en priorité.
- **Motif** : le « V » du logo répété en bleu pâle (`assets/motif.svg`, disponible pour de futurs usages).

Les appareils sont des **illustrations SVG** (sprite en haut de `index.html`) dont les couleurs se règlent
par variables CSS (`--body`, `--liquid`, `--accent`, `--cap`). Les produits affichés sont des exemples
génériques : à remplacer par les vrais produits et photos de la boutique.

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Page unique : slider, gamme, « Bien choisir », valeurs, boutique, footer, vérification d'âge |
| `mentions-legales.html` | Mentions légales (à compléter) |
| `styles.css` | Tokens de la charte et mise en page |
| `script.js` | Slider, parallaxe, filtres, coloris, animation au défilement, menu mobile, vérification d'âge |
| `assets/logo-vapelite.svg` / `logo-vapelite-blanc.svg` | Logotype couleur / négatif |
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
- Horaires d'ouverture (« Nous trouver » et `openingHours` du JSON-LD)
- Produits présentés (noms, visuels, coloris) dans la section « Nos produits »
- Informations légales dans `mentions-legales.html` (forme juridique, SIRET, hébergeur…)

L'e-mail `contact@vapelite-france.fr` et le domaine `vapelite-france.fr` proviennent de la charte.

## Rappel réglementaire

La publicité en faveur des produits du vapotage est encadrée en France (art. L3513-4 du Code de la santé
publique). Le site présente les produits **à titre informatif**, sans prix, sans vente en ligne et sans
allégation de santé, rappelle l'interdiction de vente aux mineurs et demande une confirmation d'âge.
Faire valider les textes par un conseil juridique avant la mise en ligne.
