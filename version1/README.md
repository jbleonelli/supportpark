# Support Park - Website v1

Site web moderne pour Support Park, spécialiste national de l'installation, la maintenance et la supervision des technologies de parking.

## Stack technique

- **Next.js 14** (App Router, Static Export)
- **TypeScript**
- **Tailwind CSS** (dark theme)
- **Lucide React** (icônes)
- **Framer Motion** (disponible pour animations avancées)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Page d'accueil - Hero, services, statistiques, secteurs, processus, CTA |
| `/services` | Services détaillés - Installation, Maintenance, Supervision |
| `/solutions` | Solutions sectorielles - 8 secteurs d'activité |
| `/a-propos` | À propos - Mission, vision, valeurs, timeline, chiffres clés |
| `/equipe` | Équipe - Direction, pôles, certifications, recrutement |
| `/contact` | Contact - Formulaire, informations, carte |

## Démarrage

```bash
npm install
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Génère un export statique dans le dossier `out/`, déployable sur n'importe quel hébergeur.

## Déploiement

Le site est configuré pour un export statique (`output: 'export'` dans `next.config.js`), compatible avec :
- Vercel
- Netlify
- GitHub Pages
- Tout hébergeur de fichiers statiques
