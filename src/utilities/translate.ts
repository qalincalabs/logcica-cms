function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function keyToDefaultTitle(key: string) {
  return capitalizeFirstLetter(key.replaceAll('_', ','))
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function getLabelTranslations(key: string) {
  return {
    en: translations.en.logcica.fields[key] ?? keyToDefaultTitle(key),
    fr: translations.fr.logcica.fields[key] ?? keyToDefaultTitle(key),
  }
}

export function getPlaceholderTranslations(key: string) {
  return {
    en: translations.en.logcica.placeholder[key] ?? key + ' placeholder',
    fr: translations.fr.logcica.placeholder[key] ?? key + ' placeholder',
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function getCollectionLabelsTranslations(collectionSlug: string) {
  return {
    singular: {
      en: translations.en.logcica.collections[collectionSlug + '_one'] ?? collectionSlug,
      fr: translations.fr.logcica.collections[collectionSlug + '_one'] ?? collectionSlug,
    },
    plural: {
      en: translations.en.logcica.collections[collectionSlug + '_other'] ?? collectionSlug,
      fr: translations.fr.logcica.collections[collectionSlug + '_other'] ?? collectionSlug,
    },
  }
}

// this follows i18next structure
const translations = {
  en: {
    logcica: {
      placeholder: {
        recipeYieldStatement: 'For 4 persons',
      },
      fields: {
        name: 'Name',
        area: 'Area',
        categories: 'Categories',
        ingredientList: 'Ingredients',
        quantity: 'Quantity',
        unit: 'Unit',
        value: 'Value',
        description: 'Description',
        short: 'Short',
        author: 'Author',
        stepStatement: 'Steps',
        cookTime: 'Cook time',
        prepTime: 'Preparation time',
        totalTime: 'Total time',
        difficulty: 'Difficulty',
        seasonality: 'Seasonality',
        yieldStatement: 'Yield',
        costCategory: 'Cost',
        nutrientList: 'Nutrients',
        mainImage: 'Main image',
        images: 'Images',
        nutrient: 'Nutrient',
        partnerships: 'Partnerships',
        organisations: 'Organisations',
        persons: 'Persons',
        number: 'number',
        legalFormShort: 'legalFormShort',
        legalForm: 'legalForm',
        registeredAt: 'registeredAt',
        workspaces: 'workspaces',
        workspace: 'workspace',
        url: 'url',
        place: 'place',
        mainActivity: 'mainActivity',
        owner: 'owner',
        contacts: 'contacts',
        profiles: 'profiles',
        givenName: 'givenName',
        familyName: 'familyName',
        internalName: 'internalName',
        manager: 'manager',
        activities: 'activities',
        isMain: 'isMain',
        productionCategories: 'productionCategories',
        otherCategories: 'otherCategories',
        mainWorkspace: 'mainWorkspace',
        type: 'type',
        marketplace: 'marketplace',
        catalog: 'catalog',
        availabilities: 'availabilities',
        link: 'link',
        key: 'key',
        address: 'address',
        locality: 'locality',
        municipality: 'municipality',
        region: 'region',
        country: 'country',
        within: 'within',
        title: 'title',
        street: 'street',
        postalCode: 'postalCode',
        gmaps: 'Gmaps',
        id: 'id',
        center: 'Geo coord.',
        productGroup: 'productGroup',
        dimensions: 'dimensions',
        allergenList: 'allergenList',
        containmentLevel: 'containmentLevel',
        allergen: 'allergen',
        ingredientStatement: 'ingredientStatement',
        netWeight: 'netWeight',
        length: 'length',
        width: 'width',
        height: 'height',
        volume: 'volume',
        level: 'level',
        parent: 'parent',
        timeRange: 'timeRange',
        from: 'from',
        to: 'to',
        subject: 'subject',
        counter: 'counter',
        productCategories: 'productCategories',
        seller: 'seller',
        organisation: 'organisation',
        partnership: 'partnership',
        person: 'person',
        activity: 'activity',
        product: 'product',
        season: 'season',
        week: 'week',
        Mo: 'Mo',
        Tu: 'Tu',
        We: 'We',
        Th: 'Th',
        Fr: 'Fr',
        Sa: 'Sa',
        Su: 'Su',
        days: 'days',
        Jan: 'Jan',
        Feb: 'Feb',
        Mar: 'Mar',
        Apr: 'Apr',
        May: 'May',
        Jun: 'Jun',
        Jul: 'Jul',
        Aug: 'Aug',
        Sep: 'Sep',
        Oct: 'Oct',
        Nov: 'Nov',
        Dec: 'Dec',
        year: 'year',
        months: 'months',
        alt: 'alt',
        roles: 'roles',
        contributor: 'contributor',
        counters: 'Counters',
        products: 'Products',
        localKey: 'Local Key',
        informationSystem: 'informationSystem',
        mainEmail: 'mainEmail',
        mainPhoneNumber: 'mainPhoneNumber',
        target: 'target',
        targetType: 'targetType',
        targetCollection: 'targetCollection',
        session: 'session',
        orders: 'orders',
        lines: 'lines',
        batch: 'batch',
        classification: 'classification',
        rank: 'rank',
        skip: 'skip',
        list: 'list',
        base: 'base',
        holder: 'holder',
        status: 'status',
        frequency: 'frequency',
        interval: 'interval',
        note: 'note',
        symbol: 'symbol',
        license: 'license',
        claims: 'Claims',
        storageInstructions: 'Storage instructions',
        usageInstructions: 'Usage instructions',
        references: 'References',
        system: 'System',
      },
      collections: {
        recipes_one: 'Recipe',
        recipes_other: 'Recipes',
        persons_one: 'Person',
        persons_other: 'Persons',
        organisations_one: 'Organisation',
        organisations_other: 'Organisations',
        partnerships_one: 'Partnership',
        partnerships_other: 'Partnerships',
        workspaces_one: 'Workspace',
        workspaces_other: 'Workspaces',
        activities_one: 'Activity',
        activities_other: 'Activities',
        counters_one: 'Counter',
        counters_other: 'Counters',
        places_one: 'Place',
        places_other: 'Places',
        products_one: 'Product',
        products_other: 'Products',
        product_groups_one: 'Product group',
        product_groups_other: 'Product groups',
        sessions_one: 'Session',
        sessions_other: 'Sessions',
        catalogs_one: 'Catalog',
        catalogs_other: 'Catalogs',
        catalog_items_one: 'Item',
        catalog_items_other: 'Items',
        availabilities_one: 'Availability',
        availabilities_other: 'Availabilities',
        week_availabilities_one: 'Weekly availability',
        week_availabilities_other: 'Weekly availabilities',
        season_availabilities_one: 'Seasonal availability',
        season_availabilities_other: 'Seasonal availabilities',
        media_one: 'Media',
        media_other: 'Media',
        contributions_one: 'Contribution',
        contributions_other: 'Contributions',
        profiles_one: 'Profile',
        profiles_other: 'Profiles',
        contacts_one: 'Contact',
        contacts_other: 'Contacts',
        actions_one: 'Action',
        actions_other: 'Actions',
        units_one: 'Unit',
        units_other: 'Units',
        references_one: 'Reference',
        references_other: 'References',
        fulfilments_one: 'Fulfilment',
        fulfilments_other: 'Fulfilments',
        batches_one: 'Batch',
        batches_other: 'Batches',
        categories_one: 'Category',
        categories_other: 'Categories',
        classifications_one: 'Classification',
        classifications_other: 'Classifications',
        code_lists_one: 'Code list',
        code_lists_other: 'Code lists',
        codes_one: 'Code',
        codes_other: 'Codes',
        information_systems_one: 'Information system',
        information_systems_other: 'Information systems',
        knowledge_bases_one: 'Knowledge base',
        knowledge_bases_other: 'Knowledge bases',
        knowledge_element_one: 'Knowledge element',
        knowledge_element_other: 'Knowledge elements',
        orders_one: 'Order',
        orders_other: 'Orders',
        relationships_one: 'Relationship',
        relationships_other: 'Relationships',
        sectors_one: 'Sector',
        sectors_other: 'Sectors',
        subscriptions_one: 'Subscription',
        subscriptions_other: 'Subscriptions',
      },
    },
  },
  fr: {
    logcica: {
      placeholder: {
        recipeYieldStatement: 'Pour 4 personnes',
      },
      fields: {
        name: 'Nom',
        area: 'Territoire',
        categories: 'Catégories',
        ingredientList: 'Ingrédients',
        quantity: 'Quantité',
        unit: 'Unité',
        value: 'Valeur',
        description: 'Description',
        short_male: 'Court',
        short_female: 'Courte',
        long_male: 'Long',
        long_female: 'Longue',
        author: 'Auteur',
        stepStatement: 'Instructions',
        cookTime: 'Temps de cuisson',
        prepTime: 'Temps de préparation',
        totalTime: 'Temps total',
        difficulty: 'Difficulté',
        seasonality: 'Saisonnalité',
        yieldStatement: 'Rendement',
        costCategory: 'Coût',
        nutrientList: 'Valeurs nutritionnelles',
        mainImage: 'Image principale',
        images: 'Images',
        nutrient: 'Nutriment',
        partnerships: 'Partenariats',
        organisations: 'Organisations',
        persons: 'Personnes',
        number: 'Numéro',
        legalFormShort: 'Forme juridique abrégée',
        legalForm: 'Forme juridique',
        registeredAt: 'Inscrit au',
        workspaces: 'Espaces de travail',
        workspace: 'Espace de travail',
        url: 'URL',
        place: 'Emplacement',
        mainActivity: 'Activité principale',
        owner: 'Propriétaire',
        contacts: 'Contacts',
        profiles: 'Profils',
        givenName: 'Prénom',
        familyName: 'Nom de famille',
        internalName: 'Nom interne',
        manager: 'Gestionnaire',
        activities: 'Activités',
        isMain_male: 'Principal',
        isMain_female: 'Principale',
        productionCategories: 'Catégories de production',
        otherCategories: 'Autres catégories',
        mainWorkspace: 'Espace de travail principal',
        type: 'Type',
        marketplace: 'Marché',
        catalog: 'Catalogue',
        availabilities: 'Disponibilités',
        link: 'Lien',
        key: 'Clé',
        address: 'Adresse',
        locality: 'Localité',
        municipality: 'Municipalité',
        region: 'Région',
        country: 'Pays',
        within: 'Au sein de',
        title: 'Titre',
        street: 'Rue',
        postalCode: 'Code Postal',
        gmaps: 'Gmaps',
        id: 'ID',
        center: 'Coord. géo.',
        productGroup: 'Groupe de produits',
        dimensions: 'Dimensions',
        allergenList: 'Allergènes',
        containmentLevel: 'Niveau de confinement',
        allergen: 'Allergène',
        ingredientStatement: "Liste d'ingrédients",
        netWeight: 'Poids net',
        length: 'Longueur',
        width: 'Largeur',
        height: 'Hauteur',
        volume: 'Volume',
        level: 'Niveau',
        parent: 'Parent',
        timeRange: 'Intervalle de temps',
        from: 'De',
        to: 'À',
        subject: 'Sujet',
        counter: 'Comptoir',
        productCategories: 'Catégories de produits',
        seller: 'Vendeur',
        gmapsPlaceId: 'Place ID',
        operator: 'Opérateur',
        provider: 'Fournisseur',
        subscriber: 'Abonné',
        producer: 'Producteur',
        customer: 'Client',
        broker: 'Intermédiaire',
        organisation: 'Organisation',
        partnership: 'Partenariat',
        person: 'Personne',
        activity: 'Activité',
        product: 'Produit',
        season: 'Saison',
        week: 'Semaine',
        Mo: 'Lu',
        Tu: 'Ma',
        We: 'Me',
        Th: 'Je',
        Fr: 'Ve',
        Sa: 'Sa',
        Su: 'Di',
        days: 'Jours',
        Jan: 'Jan',
        Feb: 'Fev',
        Mar: 'Mar',
        Apr: 'Avr',
        May: 'Mai',
        Jun: 'Juin',
        Jul: 'Juil',
        Aug: 'Août',
        Sep: 'Sep',
        Oct: 'Oct',
        Nov: 'Nov',
        Dec: 'Déc',
        year: 'Année',
        months: 'Mois',
        alt: 'alt',
        roles: 'Rôles',
        contributor: 'Contributeur',
        counters: 'Comptoirs',
        products: 'Produits',
        localKey: 'Clé locale',
        informationSystem: "Système d'information",
        mainEmail: 'E-mail principal',
        mainPhoneNumber: 'Numéro de téléphone principal',
        target: 'Cible',
        targetType: 'Type de cible',
        targetCollection: 'Collection cible',
        session: 'Session',
        orders: 'Commandes',
        lines: 'Lignes',
        batch: 'Lot',
        classification: 'Classification',
        rank: 'Rang',
        skip: 'Passer',
        list: 'Liste',
        base: 'Base',
        holder: 'Titulaire',
        status: 'Statut',
        frequency: 'Fréquence',
        interval: 'Intervalle',
        note: 'Note',
        symbol: 'Symbole',
        license: 'Licence',
        claims: 'Allégations',
        storageInstructions: 'Instructions de stockage',
        usageInstructions: "Instructions d'utilisation",
        references: 'Références',
        system: 'Système',
      },
      collections: {
        recipes_one: 'Recette',
        recipes_other: 'Recettes',
        persons_one: 'Personne',
        persons_other: 'Personnes',
        organisations_one: 'Organisation',
        organisations_other: 'Organisations',
        partnerships_one: 'Partenariat',
        partnerships_other: 'Partenariats',
        workspaces_one: 'Espace de travail',
        workspaces_other: 'Espaces de travail',
        activities_one: 'Activité',
        activities_other: 'Activités',
        counters_one: 'Comptoir',
        counters_other: 'Comptoirs',
        places_one: 'Emplacement',
        places_other: 'Emplacements',
        products_one: 'Produit',
        products_other: 'Produits',
        product_groups_one: 'Groupe de produits',
        product_groups_other: 'Groupes de produits',
        sessions_one: 'Session',
        sessions_other: 'Sessions',
        catalogs_one: 'Catalogue',
        catalogs_other: 'Catalogues',
        catalog_items_one: 'Article',
        catalog_items_other: 'Articles',
        availabilities_one: 'Disponibilité',
        availabilities_other: 'Disponibilités',
        week_availabilities_one: 'Disponibilité hebdo.',
        week_availabilities_other: 'Disponibilités hebdo.',
        season_availabilities_one: 'Disponibilité saisonnière',
        season_availabilities_other: 'Disponibilités saisonnières',
        media_one: 'Média',
        media_other: 'Médias',
        contributions_one: 'Contribution',
        contributions_other: 'Contributions',
        profiles_one: 'Profil',
        profiles_other: 'Profils',
        contacts_one: 'Contact',
        contacts_other: 'Contacts',
        actions_one: 'Action',
        actions_other: 'Actions',
        units_one: 'Unité',
        units_other: 'Unités',
        references_one: 'Référence',
        references_other: 'Références',
        fulfilments_one: 'Préparation',
        fulfilments_other: 'Préparations',
        batches_one: 'Lot',
        batches_other: 'Lots',
        categories_one: 'Catégorie',
        categories_other: 'Catégories',
        classifications_one: 'Classification',
        classifications_other: 'Classifications',
        code_lists_one: 'Liste de codes',
        code_lists_other: 'Listes de codes',
        codes_one: 'Code',
        codes_other: 'Codes',
        information_systems_one: "Système d'information",
        information_systems_other: "Systèmes d'information",
        knowledge_bases_one: 'Base de connaissances',
        knowledge_bases_other: 'Bases de connaissances',
        knowledge_element_one: 'Élément de connaissances',
        knowledge_element_other: 'Éléments de connaissances',
        orders_one: 'Commande',
        orders_other: 'Commandes',
        relationships_one: 'Relation',
        relationships_other: 'Relations',
        sectors_one: 'Filière',
        sectors_other: 'Filières',
        subscriptions_one: 'Abonnement',
        subscriptions_other: 'Abonnements',
      },
    },
  },
}
