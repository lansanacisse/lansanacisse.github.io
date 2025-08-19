# Portfolio de Lansana CISSE - Data Scientist

Bienvenue sur mon portfolio professionnel ! Un site web moderne et responsive développé avec React et Tailwind CSS, présentant mes projets, compétences et expérience en Data Science.

## 🌟 Caractéristiques

- **Design moderne et responsive** : Compatible desktop, tablette et mobile
- **Intégration GitHub API** : Affichage automatique des repositories
- **Animations fluides** : Utilisation de Framer Motion
- **Performance optimisée** : Built avec Vite pour un chargement rapide
- **Déploiement automatique** : GitHub Actions pour GitHub Pages

## 🚀 Sections du Portfolio

### 🏠 Accueil
- Présentation avec photo et informations clés
- Liens vers les réseaux sociaux et blog
- Boutons d'action pour navigation rapide

### 👨‍💻 À propos
- Parcours professionnel et académique
- Compétences techniques avec icônes interactives
- Statistiques des projets et expérience

### 🎯 Projets
- Affichage dynamique des repositories GitHub
- Filtres par technologie et projets phares
- Informations détaillées : description, technologies, stats
- Liens directs vers le code et les démos

### 📧 Contact
- Formulaire de contact intégré
- Informations de contact professionnelles
- Liens vers les profils sociaux

## 🛠️ Technologies Utilisées

- **Frontend** : React 19, JavaScript ES6+
- **Styling** : Tailwind CSS 3.4
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Build Tool** : Vite
- **Déploiement** : GitHub Pages avec GitHub Actions

## 📋 Prérequis

- Node.js 18+ 
- npm ou yarn
- Git

## 🔧 Installation et Développement

### 1. Cloner le repository
```bash
git clone https://github.com/lansanacisse/lansanacisse.github.io.git
cd lansanacisse.github.io
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Lancer le serveur de développement
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### 4. Build pour production
```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`

## 🚀 Déploiement

### GitHub Pages (Automatique)

Le déploiement se fait automatiquement via GitHub Actions :

1. **Push sur main** : Déclenche automatiquement le build et déploiement
2. **GitHub Actions** : Build le projet et déploie sur GitHub Pages
3. **URL live** : [https://lansanacisse.github.io](https://lansanacisse.github.io)

### Autres plateformes

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm run build
# Puis drag & drop du dossier dist/ sur netlify.com
```

## 📁 Structure du Projet

```
src/
├── components/
│   ├── Header.jsx          # Navigation et menu
│   ├── Hero.jsx            # Section d'accueil
│   ├── About.jsx           # À propos et compétences
│   ├── Projects.jsx        # Projets avec API GitHub
│   ├── Contact.jsx         # Formulaire de contact
│   └── Footer.jsx          # Pied de page
├── App.jsx                 # Composant principal
├── main.jsx               # Point d'entrée React
└── index.css              # Styles Tailwind CSS
```

## 🎨 Personnalisation

### Couleurs
Les couleurs primaires sont définies dans `tailwind.config.js` :
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    600: '#0284c7',
    // ...
  }
}
```

### Contenu
- **Informations personnelles** : Modifier dans `Hero.jsx` et `About.jsx`
- **Projets featured** : Liste dans `Projects.jsx`
- **Contact** : Mettre à jour dans `Contact.jsx`

## 🔌 API GitHub

Le portfolio utilise l'API GitHub publique pour récupérer automatiquement :
- Liste des repositories
- Statistiques (stars, forks)
- Langages de programmation
- Dates de mise à jour

## 📱 Responsive Design

- **Mobile-first** : Design optimisé pour mobiles
- **Breakpoints** : sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navigation mobile** : Menu hamburger responsive

## ⚡ Performance

- **Lazy loading** : Chargement différé des images
- **Code splitting** : Division automatique du code
- **Minification** : Fichiers optimisés en production
- **Font optimization** : Chargement optimisé des Google Fonts

## 🐛 Résolution des Problèmes

### Erreur de build
```bash
# Vider le cache et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### API GitHub rate limit
L'API publique GitHub a une limite de 60 requêtes/heure. Pour éviter cette limite, ajouter un token GitHub dans les variables d'environnement.

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👤 Auteur

**Lansana CISSE**
- GitHub: [@lansanacisse](https://github.com/lansanacisse)
- Blog: [medium.com/@lansana.cisse](https://medium.com/@lansana.cisse)
- Email: lansana.cisse@univ-lyon2.fr

---

*Portfolio hébergé avec GitHub Pages - [Voir le site en ligne](https://lansanacisse.github.io/)*
