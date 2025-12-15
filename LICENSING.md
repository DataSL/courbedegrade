# Système de Licensing Power BI - API Officielle Microsoft

Ce visuel personnalisé utilise l'**API officielle de gestion des licences Power BI** pour contrôler l'accès et l'utilisation du visuel selon les licences achetées via AppSource ou le système de commerce Microsoft.

## 🎯 Vue d'ensemble

Le système de licensing permet de :
- ✅ Gérer les licences via le Centre d'administration Microsoft 365
- ✅ Vérifier automatiquement les plans de service de l'utilisateur
- ✅ Afficher des notifications natives Power BI
- ✅ Bloquer l'accès aux fonctionnalités sans licence
- ✅ Supporter les environnements multiples (Desktop, Service, Embedded)

## 📚 Architecture du Système

### 1. API de Gestion des Licences (`IVisualLicenseManager`)

Le visuel utilise l'API `IVisualLicenseManager` fournie par Power BI (disponible depuis la version 4.7+).

```typescript
private licenseManager: IVisualLicenseManager;
private currentUserValidPlans: ServicePlan[] | undefined;
private hasServicePlans: boolean | undefined;
private isLicenseUnsupportedEnv: boolean | undefined;
```

### 2. Récupération des Licences

La méthode `getAvailableServicePlans()` récupère les informations de licence :

```typescript
this.licenseManager.getAvailableServicePlans()
    .then((result: LicenseInfoResult) => {
        const { plans, isLicenseUnsupportedEnv, isLicenseInfoAvailable } = result;
        // Traitement des plans...
    });
```

#### Structure de `LicenseInfoResult`

- **`plans`** : Tableau des plans de service achetés pour ce visuel
- **`isLicenseUnsupportedEnv`** : Indique si l'environnement supporte les licences
- **`isLicenseInfoAvailable`** : Indique si les informations sont disponibles

#### Structure de `ServicePlan`

- **`spIdentifier`** : ID du service (généré dans Partner Center)
- **`state`** : État du plan (`Active`, `Warning`, `Suspended`, `Inactive`, `Unknown`)

### 3. États des Plans de Service

| État | Description | Utilisable |
|------|-------------|-----------|
| **Active** | Licence active et utilisable | ✅ Oui |
| **Warning** | Période de grâce (problème de paiement) | ✅ Oui |
| **Suspended** | Licence suspendue | ❌ Non |
| **Inactive** | Licence inactive | ❌ Non |
| **Unknown** | État inconnu | ❌ Non |

## 🔔 Système de Notifications

Le visuel utilise les notifications natives Power BI au lieu de messages personnalisés.

### Types de Notifications

#### 1. Icône Générale (`LicenseNotificationType.General`)

Affiche une petite icône dans le coin du visuel :

```typescript
this.licenseManager.notifyLicenseRequired(LicenseNotificationType.General)
```

**Usage** : Pour informer l'utilisateur sans bloquer le visuel
**Contexte** : Mode modification uniquement

#### 2. Visuel Bloqué (`LicenseNotificationType.VisualIsBlocked`)

Overlay complet qui bloque le visuel avec un message :

```typescript
this.licenseManager.notifyLicenseRequired(LicenseNotificationType.VisualIsBlocked)
```

**Usage** : Pour bloquer complètement l'accès au visuel
**Affiche** : Bouton "Obtenir une licence" et "En savoir plus"

#### 3. Environnement Non Supporté (`LicenseNotificationType.UnsupportedEnv`)

Indique que l'environnement ne supporte pas les licences :

```typescript
this.licenseManager.notifyLicenseRequired(LicenseNotificationType.UnsupportedEnv)
```

**Environnements non supportés** :
- Publier sur le web
- Incorporation PaaS (Embedded)
- Clouds nationaux/régionaux
- Power BI Report Server
- Export PDF/PPT via API REST

#### 4. Fonctionnalité Bloquée (`notifyFeatureBlocked`)

Bannière contextuelle pour une fonctionnalité spécifique :

```typescript
this.licenseManager.notifyFeatureBlocked("Nom de la fonctionnalité")
```

**Usage** : Bloquer une fonctionnalité spécifique tout en laissant le visuel fonctionnel
**Durée** : 10 secondes ou jusqu'à nouvelle notification

## 🔧 Implémentation dans le Code

### Initialisation (Constructor)

```typescript
constructor(options: VisualConstructorOptions) {
    // ... autres initialisations
    
    // Initialiser le gestionnaire de licences
    this.licenseManager = this.host.licenseManager;
    
    // Récupérer les informations de licence
    this.retrieveLicenseInfo();
}
```

### Récupération des Licences

```typescript
private retrieveLicenseInfo() {
    if (!this.licenseManager) {
        // Mode développement : licence valide par défaut
        this.hasServicePlans = true;
        return;
    }
    
    this.licenseManager.getAvailableServicePlans()
        .then((result: LicenseInfoResult) => {
            // Filtrer les plans actifs ou en avertissement
            this.currentUserValidPlans = result.plans?.filter(({ state }) => 
                state === ServicePlanState.Active || 
                state === ServicePlanState.Warning
            );
            
            this.hasServicePlans = !!this.currentUserValidPlans?.length;
            this.isLicenseUnsupportedEnv = result.isLicenseUnsupportedEnv;
            
            // Afficher les notifications appropriées
            this.notifyLicenseStatus();
        });
}
```

### Gestion des Notifications

```typescript
private notifyLicenseStatus() {
    // Effacer les notifications précédentes
    this.licenseManager.clearLicenseNotification();
    
    if (this.isLicenseUnsupportedEnv) {
        this.showUnsupportedEnvNotification();
        return;
    }
    
    if (this.hasServicePlans === false) {
        this.showLicenseRequiredNotification();
        return;
    }
}
```

### Vérification dans `update()`

```typescript
public update(options: VisualUpdateOptions) {
    // Bloquer le rendu si pas de licence valide
    if (this.hasServicePlans === false || this.isLicenseUnsupportedEnv === true) {
        // Nettoyer le visuel
        // Les notifications Power BI sont déjà affichées
        return;
    }
    
    // Continuer le rendu normal...
}
```

## 🧪 Mode Test

### Tester sans Licence

Décommentez dans `retrieveLicenseInfo()` :

```typescript
// Simuler une licence manquante
this.hasServicePlans = false;
this.isLicenseUnsupportedEnv = false;
this.notifyLicenseStatus();
return;
```

### Tester Environnement Non Supporté

```typescript
// Simuler un environnement non supporté
this.isLicenseUnsupportedEnv = true;
this.notifyLicenseStatus();
return;
```

### Tester une Fonctionnalité Bloquée

```typescript
// Dans update() ou une méthode spécifique
if (!this.hasSpecificFeatureLicense()) {
    this.notifyFeatureBlocked("Export avancé");
}
```

## 📦 Configuration AppSource

### 1. Configuration Partner Center

Lorsque vous créez votre offre dans l'Espace partenaires :

1. **Choisir la transaction via Microsoft** : Activez la gestion des licences par Microsoft
2. **Définir les plans** : Créez des plans tarifaires (Gratuit, Pro, Premium, etc.)
3. **Générer les identifiants** : Notez les `spIdentifier` pour chaque plan
4. **Configurer la disponibilité** : Définissez les marchés et la visibilité

### 2. Identifiants de Plan (spIdentifier)

Chaque plan génère un identifiant unique dans Partner Center :

Exemple : `courbedegrade-pro-monthly-v1`

Utilisez ces identifiants pour vérifier les licences spécifiques :

```typescript
const hasProLicense = this.currentUserValidPlans?.some(
    plan => plan.spIdentifier === "courbedegrade-pro-monthly-v1"
);
```

### 3. Gestion Multi-Plans

Pour supporter plusieurs plans (Gratuit, Pro, Premium) :

```typescript
private checkFeatureAccess(feature: string): boolean {
    const proFeatures = ["export", "advanced-styling"];
    const premiumFeatures = ["real-time-data", "api-access"];
    
    if (premiumFeatures.includes(feature)) {
        return this.hasPremiumLicense();
    }
    
    if (proFeatures.includes(feature)) {
        return this.hasProOrPremiumLicense();
    }
    
    return true; // Fonctionnalité gratuite
}
```

## 🌐 Environnements Power BI

### Power BI Desktop

- **Vérification** : Limitée (mode développement)
- **Comportement** : `licenseManager` peut être `undefined`
- **Recommandation** : Considérer comme valide pour le développement

### Power BI Service (Web)

- **Vérification** : Complète via API
- **Licences** : Free, Pro, Premium par utilisateur
- **Gestion** : Centre d'administration Microsoft 365

### Power BI Embedded

- **Vérification** : Basée sur la capacité
- **Configuration** : Au niveau de l'application
- **Support** : Dépend de la version de l'API

### Environnements Non Supportés

Les environnements suivants retournent `isLicenseUnsupportedEnv = true` :

- 📤 Publier sur le web
- 🔗 Incorporation PaaS (sans authentification)
- 🌍 Clouds nationaux (selon disponibilité)
- 💾 Power BI Report Server
- 📄 Export PDF/PPT via REST API

## 📊 Expérience Utilisateur

### Avec Licence Valide

✅ Le visuel fonctionne normalement
✅ Toutes les fonctionnalités sont accessibles
✅ Aucune notification affichée

### Sans Licence (Mode Général)

⚠️ Icône d'avertissement dans le coin
ℹ️ Info-bulle explicative au survol
🔓 Visuel partiellement fonctionnel

### Sans Licence (Mode Bloqué)

🚫 Overlay complet sur le visuel
📝 Message "Licence requise pour afficher ce visuel"
🛒 Bouton "Obtenir une licence" → AppSource
ℹ️ Lien "En savoir plus"

### Fonctionnalité Spécifique Bloquée

📢 Bannière contextuelle (10 secondes)
💬 Message personnalisé : "La fonctionnalité X nécessite une licence"
✅ Reste du visuel fonctionnel

## 🔐 Meilleures Pratiques

### 1. Récupération des Licences

✅ **À FAIRE** :
- Récupérer les licences dans le `constructor` ou `init`
- Mettre en cache les résultats (Power BI les met déjà en cache)
- Gérer les erreurs gracieusement

❌ **À ÉVITER** :
- Appeler `getAvailableServicePlans()` dans `update()` (performance)
- Bloquer l'UI en attendant la réponse
- Faire des appels répétés

### 2. Notifications

✅ **À FAIRE** :
- Utiliser les notifications natives Power BI
- Appeler `clearLicenseNotification()` avant de changer de type
- Fournir des messages clairs et actionnables

❌ **À ÉVITER** :
- Créer des overlays HTML personnalisés
- Afficher plusieurs notifications simultanément
- Messages vagues ou techniques

### 3. Mode Développement

✅ **À FAIRE** :
- Vérifier si `licenseManager` existe
- Permettre le fonctionnement en mode dev
- Logger les informations de debug

❌ **À ÉVITER** :
- Bloquer le développement sans licence
- Crash si l'API n'est pas disponible

### 4. Localisation

✅ **À FAIRE** :
- Utiliser l'API de localisation Power BI
- Supporter les tooltips multilingues
- Tester dans différentes langues

```typescript
const locale = this.host.locale;
const tooltip = this.getLocalizedTooltip(locale, featureName);
this.licenseManager.notifyFeatureBlocked(tooltip);
```

## 🐛 Dépannage

### Problème : `licenseManager` est `undefined`

**Causes** :
- Mode Power BI Desktop
- Version API < 4.7
- Environnement non supporté

**Solutions** :
```typescript
if (!this.licenseManager) {
    console.log("Gestionnaire de licences non disponible");
    this.hasServicePlans = true; // Mode dev
    return;
}
```

### Problème : Notifications ne s'affichent pas

**Causes** :
- Environnement non supporté
- Mode lecture (pas mode édition)
- Notification déjà affichée

**Solutions** :
- Vérifier `isLicenseUnsupportedEnv`
- Tester en mode édition
- Appeler `clearLicenseNotification()` d'abord

### Problème : Plans de service vides

**Causes** :
- Utilisateur non connecté (Desktop)
- Pas de connexion Internet
- Aucune licence achetée

**Solutions** :
```typescript
.then((result) => {
    if (!result.isLicenseInfoAvailable) {
        console.warn("Impossible de récupérer les licences");
        // Gérer le cas offline
    }
});
```

## 📈 Rapports et Analyse

Dans l'Espace partenaires, vous pouvez consulter :

- 💰 **Revenus** : Revenus par plan et période
- 📊 **Licences** : Licences actives, renouvelées, annulées
- 🌍 **Géographie** : Répartition par pays/région
- 👥 **Clients** : Organisations utilisatrices
- 📅 **Tendances** : Évolution dans le temps

## 🔗 Ressources

- [Documentation API Licensing Power BI](https://learn.microsoft.com/en-us/power-bi/developer/visuals/licensing-api)
- [Espace partenaires Microsoft](https://partner.microsoft.com/)
- [AppSource](https://appsource.microsoft.com/)
- [API Power BI Visuals](https://learn.microsoft.com/en-us/javascript/api/overview/powerbi/)
- [Centre d'administration Microsoft 365](https://admin.microsoft.com/)

## 📝 Notes de Version

### Version Actuelle

- ✅ API officielle Microsoft Power BI
- ✅ Support de `getAvailableServicePlans()`
- ✅ Notifications natives Power BI
- ✅ Gestion des environnements non supportés
- ✅ Mode test intégré

### Anciennes Versions (Dépréciées)

- ❌ Système de privilèges (`privileges` dans `capabilities.json`)
- ❌ Messages HTML personnalisés
- ❌ Vérification manuelle avec `getPrivileges()`

## 💡 Exemple Complet

Voir le code source dans [visual.ts](src/visual.ts) pour l'implémentation complète avec :

- Récupération des licences
- Gestion des notifications
- Vérification dans `update()`
- Mode test et debug
- Gestion des erreurs

---

**Important** : Ce système nécessite Power BI API version 4.7+ et est conçu pour les visuels distribués via AppSource avec transaction via Microsoft.
