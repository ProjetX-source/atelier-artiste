# Atelier d'artiste — site Hugo + Pages CMS

Site vitrine en français pour présenter des **sculptures et dessins**, avec des fiches détaillées et un CMS visuel très simple.

**État du projet :** prêt à personnaliser, puis à publier. Aucune identité ni œuvre réelle n'a été inventée. Le contenu de démonstration est en brouillon, donc invisible sur le site public.

## 1 — Ce qui est inclus

- Accueil éditorial, responsive (ordinateur, tablette, téléphone).
- Galerie de toutes les œuvres, et pages **Sculptures** / **Dessins**.
- Une page par œuvre : titre, photo principale, vues supplémentaires avec agrandissement, description, technique, dimensions, année.
- Page **À propos** et photographie de l'artiste (facultative).
- Page **Contact**, adresse e-mail et Instagram facultatifs, formulaire de contact compatible **Netlify Forms**.
- Page `/admin/` qui ouvre l'éditeur externe **Pages CMS**.
- Traitement automatique des photos téléversées en **WebP optimisé** par Hugo lors de la construction ; originals conservés dans `assets/uploads/`.
- Pas de thème externe, pas de publicité, pas de traceurs d'audience, pas de base de données.

## 2 — Voir le site sur son ordinateur (Linux / Debian)

Installer Hugo si nécessaire : https://gohugo.io/installation/linux/

```bash
cd atelier-sculptures-hugo
hugo server -D
```

Ouvrir l'adresse affichée, en général `http://localhost:1313/`.

L'option `-D` affiche également le brouillon de démonstration. Sans cette option, seuls les vrais contenus publiés apparaissent.

Le fichier `hugo.toml` contient une adresse fictive `example.org`. Le déploiement Netlify utilise automatiquement la véritable adresse via `--baseURL "$URL"`.

## 3 — Mettre le projet sur GitHub

Créer un **nouveau dépôt GitHub** (par exemple `atelier-artiste`), distinct de tout autre site.

Depuis le répertoire du projet :

```bash
git init
git add .
git commit -m "Créer le portfolio de l'artiste"
git branch -M main
git remote add origin git@github.com:VOTRE_COMPTE/atelier-artiste.git
git push -u origin main
```

Remplacer `VOTRE_COMPTE` et `atelier-artiste` par le véritable compte et dépôt.

Un dépôt public ou privé fonctionne selon les droits d'accès GitHub/Netlify. Ne jamais placer de mots de passe ou clés secrètes dans ce dépôt.

## 4 — Héberger gratuitement ou à faible coût sur Netlify

1. Aller sur https://app.netlify.com/ ; choisir **Add new project > Import an existing project**.
2. Connecter GitHub et choisir le nouveau dépôt.
3. Netlify détecte `netlify.toml` : commande `hugo --gc --minify --baseURL "$URL"`, répertoire `public` et version Hugo.
4. Lancer le premier déploiement. Le site reçoit une adresse `.netlify.app`. Un nom de domaine personnel peut être ajouté plus tard.
5. Pour activer le formulaire : **Forms > Enable form detection**, puis relancer un déploiement. Vérifier qu'un formulaire `contact` apparaît. Dans les réglages de formulaire, activer si souhaité une notification par e-mail.

**Important :** le formulaire ne transmet pas de message quand on exécute Hugo localement. Il fonctionne après déploiement sur Netlify avec la détection de formulaires activée. Sur un autre hébergeur, remplacer Netlify Forms par un service compatible.

## 5 — Mettre en place Pages CMS (une seule fois)

1. Ouvrir https://app.pagescms.org/ et choisir l'authentification via GitHub.
2. Autoriser / installer l'application **Pages CMS** sur le **nouveau dépôt** GitHub.
3. Sélectionner le dépôt : Pages CMS détecte automatiquement le fichier `.pages.yml` fourni.
4. Dans l'éditeur, on voit les deux espaces : **Œuvres : sculptures et dessins** et **Textes, artiste et coordonnées**.
5. Donner un accès de modification à ta mère (avec un compte autorisé ou une invitation Pages CMS si proposée ; vérifier les accès au dépôt et au CMS).
6. Il suffira ensuite d'ouvrir **`https://votre-site.netlify.app/admin/`**, puis de cliquer sur **Ouvrir l'éditeur Pages CMS**. L'éditeur demeure hébergé séparément, sur app.pagescms.org.

**Le CMS n'est pas actif tant que le dépôt n'a pas été connecté.** Il n'y a pas de serveur CMS à administrer ; chaque enregistrement modifie les fichiers du dépôt GitHub et déclenche un nouveau déploiement Netlify.

## 6 — Ajouter une sculpture ou un dessin (pour l'artiste)

Dans **Pages CMS** :

1. Ouvrir **Œuvres : sculptures et dessins** → **Nouvelle entrée**.
2. Entrer un **titre** et choisir **Sculpture** ou **Dessin**.
3. Ajouter la **photo principale** ; ajouter au besoin jusqu'à **12 autres vues**.
4. Indiquer l'année, les matériaux/techniques, les dimensions et une description libre.
5. Activer **Afficher sur la page d'accueil** pour mettre l'œuvre en avant.
6. Laisser **Brouillon** désactivé pour publier (ou l'activer si l'œuvre doit rester invisible).
7. Cliquer sur **Enregistrer**. La publication s'effectuera après le déploiement automatique.

Exemples de formats photo conseillés : JPG, PNG ou WebP, largeur 1400–2500 px ; penser à retirer les données de géolocalisation EXIF avant l'envoi si nécessaire. L'éditeur conserve les originaux et Hugo prépare les versions affichées.

Pour modifier son nom, son portrait, sa biographie, sa démarche, ses coordonnées, les textes de l'accueil : utiliser **Textes, artiste et coordonnées**.

## 7 — Personnalisation technique

| Fichier | Rôle |
|---|---|
| `data/site.yaml` | Textes, identité, contact, portrait |
| `content/oeuvres/` | Fiches œuvres Markdown |
| `.pages.yml` | Champs, galerie média et configuration du CMS |
| `assets/uploads/` | Photographies et images téléversées |
| `assets/css/style.css` | Couleurs, typographie et mises en page |
| `static/images/hero-abstrait.svg` | Illustration abstraite **décorative**, à remplacer si souhaité |
| `layouts/` | Modèles HTML Hugo |
| `netlify.toml` | Hébergement, construction et en-têtes de sécurité |

Pour une autre palette, modifier les variables CSS de début de fichier dans `assets/css/style.css`.

## 8 — À faire avant publication définitive

- [ ] Remplacer « Nom de l'artiste » par le vrai nom dans Pages CMS.
- [ ] Personnaliser la présentation et la démarche.
- [ ] Importer au moins quelques photos réelles, correctement cadrées et lumineuses.
- [ ] Ajouter et tester une adresse de contact ou les notifications Netlify Forms.
- [ ] Supprimer ou personnaliser le brouillon « EXEMPLE — À remplacer ».
- [ ] Tester le formulaire en ligne (et vérifier les messages classés comme spam).
- [ ] Vérifier que l'artiste peut bien se connecter à Pages CMS et publier seule.
- [ ] Mettre en place les mentions de confidentialité et mentions légales adaptées au site et à son lieu d'exploitation.

## Documentation utilisée

- [Hugo](https://gohugo.io/)
- [Pages CMS](https://pagescms.org/docs/)
- [Déployer Hugo sur Netlify](https://gohugo.io/host-and-deploy/deploy-to-netlify/)
- [Netlify Forms](https://docs.netlify.com/manage/forms/setup/)
