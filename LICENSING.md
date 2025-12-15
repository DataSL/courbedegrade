# Système de Licensing Power BI

Ce visuel personnalisé intègre un système de licensing Power BI qui permet de contrôler l'accès et l'utilisation du visuel selon les licences disponibles.

## Fonctionnalités

### 1. Vérification des Privilèges
Le visuel vérifie automatiquement les privilèges Power BI à chaque chargement et mise à jour :
- **WebAccess** : Privilège requis pour le fonctionnement complet du visuel
- Détection automatique de l'environnement (développement vs production)

### 2. Messages d'Avertissement
- Si la licence n'est pas valide, un message d'avertissement s'affiche en haut à gauche du visuel
- Le visuel affiche également un message centré indiquant que la licence est requise
- En mode développement, le visuel fonctionne normalement sans licence

### 3. Configuration dans capabilities.json

Le système de licensing est configuré dans le fichier `capabilities.json` :

```json
"privileges": [
  {
    "name": "WebAccess",
    "essential": true,
    "parameters": ["*"]
  }
]
```

#### Paramètres :
- **name** : Le nom du privilège requis (`WebAccess`)
- **essential** : Indique si le privilège est essentiel au fonctionnement
- **parameters** : Domaines ou ressources accessibles (ici `["*"]` pour tout)

### 4. Comportement du Visuel

#### Avec Licence Valide :
- Le visuel fonctionne normalement
- Toutes les fonctionnalités sont disponibles
- Aucun message d'avertissement

#### Sans Licence Valide :
- Le visuel se nettoie automatiquement
- Un message d'avertissement jaune s'affiche en haut à gauche
- Un message centré indique "Licence Power BI requise"
- Les données ne sont pas affichées

#### En Mode Développement :
- Le visuel fonctionne normalement
- Les erreurs de vérification de licence sont loguées dans la console
- Permet de développer et tester sans contraintes

## Types de Privilèges Power BI

Voici les privilèges disponibles que vous pouvez utiliser :

1. **WebAccess** : Accès aux ressources web externes
2. **ExportContent** : Exportation de contenu
3. **CreateDataflow** : Création de flux de données
4. **ViewDataflow** : Visualisation des flux de données
5. **ShareDashboard** : Partage de tableaux de bord

## Personnalisation

### Modifier les Privilèges Requis

Pour ajouter ou modifier les privilèges, éditez le fichier `capabilities.json` :

```json
"privileges": [
  {
    "name": "WebAccess",
    "essential": true,
    "parameters": ["*.votredomaine.com"]
  },
  {
    "name": "ExportContent",
    "essential": false,
    "parameters": []
  }
]
```

### Personnaliser les Messages

Dans le fichier `visual.ts`, vous pouvez modifier les messages d'avertissement :

```typescript
// Ligne ~135 - Message d'avertissement principal
this.licenseCheckMessage.textContent = "⚠️ Votre message personnalisé";

// Ligne ~222 - Message centré
centerMessage.textContent = "Votre message personnalisé";
```

### Désactiver la Vérification de Licence

Pour désactiver temporairement la vérification (développement uniquement) :

```typescript
// Dans la méthode checkLicense(), ligne ~115
private checkLicense() {
    this.isLicenseValid = true;  // Forcer à true
    this.licenseCheckMessage.style.display = "none";
    return;  // Sortir immédiatement
    
    // ... reste du code
}
```

## Déploiement

Lors du déploiement du visuel sur Power BI Service :

1. **Assurez-vous que les privilèges sont correctement configurés** dans `capabilities.json`
2. **Testez le visuel** avec différents types de licences Power BI
3. **Vérifiez les messages** d'avertissement dans différents environnements
4. **Documentez les exigences** de licence pour les utilisateurs finaux

## Environnements Power BI

### Power BI Desktop
- Mode développement : Licence toujours valide
- Les privilèges peuvent ne pas être vérifiés

### Power BI Service
- Vérification complète des privilèges
- Restrictions basées sur les licences utilisateur :
  - **Free** : Fonctionnalités limitées
  - **Pro** : Fonctionnalités complètes
  - **Premium** : Toutes les fonctionnalités + capacités étendues

### Power BI Embedded
- Vérification basée sur la capacité
- Privilèges configurés au niveau de l'application

## Dépannage

### Le message de licence s'affiche en mode développement

**Cause** : La méthode `getPrivileges()` n'est pas disponible
**Solution** : C'est normal, le code détecte automatiquement le mode développement et permet le fonctionnement

### Le visuel ne fonctionne pas en production

**Cause** : Privilèges non accordés ou licence insuffisante
**Solution** : 
1. Vérifiez que l'utilisateur a une licence appropriée
2. Vérifiez que les privilèges dans `capabilities.json` sont corrects
3. Consultez les logs de la console Power BI

### Erreur "Property 'getPrivileges' does not exist"

**Cause** : Version de l'API Power BI ne supporte pas cette méthode
**Solution** : Le code utilise déjà un cast vers `any` pour gérer ce cas

## Ressources

- [Documentation Power BI Visuals](https://learn.microsoft.com/en-us/power-bi/developer/visuals/)
- [API Reference](https://learn.microsoft.com/en-us/javascript/api/overview/powerbi/)
- [Licensing in Power BI](https://learn.microsoft.com/en-us/power-bi/enterprise/service-admin-licensing-organization)

## Support

Pour toute question concernant le licensing :
1. Consultez la documentation Power BI
2. Vérifiez les logs de la console du navigateur
3. Testez dans différents environnements (Desktop, Service, Embedded)
