# Vapelite France — site vitrine

Site vitrine statique de **Vapelite France**, boutique de cigarettes électroniques au Vieux-Port de Marseille.

Mise en page éditoriale (grands titres, beaucoup de vide, navigation minimale) appliquée à la
**charte graphique Vapelite France** :

- **Couleur de référence** : bleu `#2c5794` (RVB 44 87 148 · Pantone P 105-7C · CMJN 84/57/0/22),
  décliné en teintes `#1e3d69`, `#8fa7cc`, `#dfe5ef`, `#f2f5fa` sur fond blanc.
- **Logotype** : extrait en vectoriel de la charte, sans modification — version bleue sur fond clair,
  réserve blanche sur fond bleu. Placé en haut à gauche, largeur ≥ 20 mm.
- **Typographie** : Museo Sans Rounded (titres 900/1000, texte 300–700). La police étant sous licence
  commerciale, le site utilise **Nunito** (libre, arrondie, graisses 200 à 1000) auto-hébergée ; si
  Museo Sans Rounded est disponible (licence Adobe Fonts), elle est utilisée en priorité.
- **Motif** : le « V » du logo répété en bleu pâle.

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Page unique : hero, boutique, valeurs, rayons, conseil, accès, footer, vérification d'âge |
| `mentions-legales.html` | Mentions légales (à compléter) |
| `styles.css` | Tokens de la charte et mise en page |
| `script.js` | Menu plein écran, vérification d'âge, apparition au défilement |
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
- Lien Instagram
- Informations légales dans `mentions-legales.html` (forme juridique, SIRET, hébergeur…)

L'e-mail `contact@vapelite-france.fr` et le domaine `vapelite-france.fr` proviennent de la charte.

## Rappel réglementaire

La publicité en faveur des produits du vapotage est encadrée en France (art. L3513-4 du Code de la santé
publique). Le site reste volontairement informatif (présentation de la boutique, des services et de l'accès),
sans promotion de produits ni allégation de santé, et rappelle l'interdiction de vente aux mineurs.
