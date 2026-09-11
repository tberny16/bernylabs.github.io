# Portfolio de Théo

Portfolio one-page développé avec React, TypeScript et Vite, prêt à être publié sur GitHub Pages.

## Personnaliser le contenu

Toutes les informations personnelles sont regroupées dans `src/data/portfolio.ts` :

- liens GitHub, LinkedIn, e-mail et CV ;
- détails des expériences chez Infomil et Région Limoges ;
- projets ;
- formation.

Les liens non renseignés restent volontairement inactifs : aucune URL fictive n'est utilisée.

Pour ajouter le CV, placez le fichier dans `public/` (par exemple `public/cv-theo.pdf`), puis indiquez `./cv-theo.pdf` dans la propriété `cv`.

## Lancer le projet

```bash
pnpm install
pnpm dev
```

Créer la version de production :

```bash
pnpm build
pnpm preview
```

## Publier sur GitHub Pages

1. Créez un dépôt nommé `<username>.github.io` pour obtenir l'adresse `https://<username>.github.io`.
2. Envoyez le projet sur la branche `main`.
3. Dans **Settings → Pages → Build and deployment**, sélectionnez **GitHub Actions**.
4. Le workflow `.github/workflows/deploy.yml` construit et publie automatiquement le site à chaque push sur `main`.

La configuration Vite utilise des chemins relatifs, ce qui permet aussi un déploiement dans un dépôt de projet classique.
