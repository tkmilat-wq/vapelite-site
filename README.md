# Vapelite — site vitrine

Site vitrine statique de **Vapelite**, boutique de cigarettes électroniques au Vieux-Port de Marseille.

Direction artistique inspirée d'un style « magazine » : canvas crème `#fff8f6`, typographie display
condensée rose `#db3c8a`, texte vert forêt `#00522d`, deux boutons ronds dans les coins et beaucoup de vide.

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Page unique : hero, boutique, rayons, conseil, accès, footer, vérification d'âge |
| `mentions-legales.html` | Mentions légales (à compléter) |
| `styles.css` | Tokens de design et mise en page |
| `script.js` | Menu plein écran, vérification d'âge, apparition au défilement |
| `assets/favicon.svg` | Favicon |

Polices : **Anton** (Google Fonts, substitut de Beni) pour les titres, **Clash Grotesk** (Fontshare) pour le
texte, avec **Inter** en repli.

## Lancer en local

Aucun build nécessaire :

```bash
npx serve .
# ou
python3 -m http.server 8000
```

## À compléter avant la mise en ligne

Les coordonnées ci-dessous sont des **valeurs provisoires** à remplacer :

- Adresse exacte (`Quai du Port, 13002 Marseille`) — `index.html` (menu, section « Nous trouver », footer, JSON-LD)
- Téléphone (`04 91 00 00 00` / `+33491000000`)
- Horaires d'ouverture (section « Nous trouver » et `openingHours` du JSON-LD)
- Lien Instagram
- Informations légales dans `mentions-legales.html` (raison sociale, SIRET, hébergeur…)

## Rappel réglementaire

La publicité en faveur des produits du vapotage est encadrée en France (art. L3513-4 du Code de la santé
publique). Le site reste volontairement informatif (présentation de la boutique, des services et de l'accès),
sans promotion de produits ni allégation de santé, et rappelle l'interdiction de vente aux mineurs.
