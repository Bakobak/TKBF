/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUtilisateur = /* GraphQL */ `
  subscription OnCreateUtilisateur(
    $filter: ModelSubscriptionUtilisateurFilterInput
    $owner: String
  ) {
    onCreateUtilisateur(filter: $filter, owner: $owner) {
      id
      nom
      prenom
      telephone
      email
      role
      statut
      ville
      quartier
      dateCreation
      evenements {
        nextToken
        __typename
      }
      achats {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateUtilisateur = /* GraphQL */ `
  subscription OnUpdateUtilisateur(
    $filter: ModelSubscriptionUtilisateurFilterInput
    $owner: String
  ) {
    onUpdateUtilisateur(filter: $filter, owner: $owner) {
      id
      nom
      prenom
      telephone
      email
      role
      statut
      ville
      quartier
      dateCreation
      evenements {
        nextToken
        __typename
      }
      achats {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteUtilisateur = /* GraphQL */ `
  subscription OnDeleteUtilisateur(
    $filter: ModelSubscriptionUtilisateurFilterInput
    $owner: String
  ) {
    onDeleteUtilisateur(filter: $filter, owner: $owner) {
      id
      nom
      prenom
      telephone
      email
      role
      statut
      ville
      quartier
      dateCreation
      evenements {
        nextToken
        __typename
      }
      achats {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateEvenement = /* GraphQL */ `
  subscription OnCreateEvenement(
    $filter: ModelSubscriptionEvenementFilterInput
    $promoteurId: String
  ) {
    onCreateEvenement(filter: $filter, promoteurId: $promoteurId) {
      id
      promoteurId
      nom
      description
      date
      heure
      lieu
      quartier
      ville
      prixBillet
      capaciteMax
      statut
      dateCreation
      categorie
      image
      sponsor
      promoteur {
        id
        nom
        prenom
        telephone
        email
        role
        statut
        ville
        quartier
        dateCreation
        createdAt
        updatedAt
        owner
        __typename
      }
      ventes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateEvenement = /* GraphQL */ `
  subscription OnUpdateEvenement(
    $filter: ModelSubscriptionEvenementFilterInput
    $promoteurId: String
  ) {
    onUpdateEvenement(filter: $filter, promoteurId: $promoteurId) {
      id
      promoteurId
      nom
      description
      date
      heure
      lieu
      quartier
      ville
      prixBillet
      capaciteMax
      statut
      dateCreation
      categorie
      image
      sponsor
      promoteur {
        id
        nom
        prenom
        telephone
        email
        role
        statut
        ville
        quartier
        dateCreation
        createdAt
        updatedAt
        owner
        __typename
      }
      ventes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteEvenement = /* GraphQL */ `
  subscription OnDeleteEvenement(
    $filter: ModelSubscriptionEvenementFilterInput
    $promoteurId: String
  ) {
    onDeleteEvenement(filter: $filter, promoteurId: $promoteurId) {
      id
      promoteurId
      nom
      description
      date
      heure
      lieu
      quartier
      ville
      prixBillet
      capaciteMax
      statut
      dateCreation
      categorie
      image
      sponsor
      promoteur {
        id
        nom
        prenom
        telephone
        email
        role
        statut
        ville
        quartier
        dateCreation
        createdAt
        updatedAt
        owner
        __typename
      }
      ventes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateVente = /* GraphQL */ `
  subscription OnCreateVente(
    $filter: ModelSubscriptionVenteFilterInput
    $acheteurId: String
    $promoteurId: String
  ) {
    onCreateVente(
      filter: $filter
      acheteurId: $acheteurId
      promoteurId: $promoteurId
    ) {
      id
      evenementId
      promoteurId
      acheteurId
      acheteurNom
      acheteurTelephone
      acheteurEmail
      quantite
      prixTotal
      dateAchat
      methodePaiement
      numeroTransaction
      statut
      qrCode
      evenement {
        id
        promoteurId
        nom
        description
        date
        heure
        lieu
        quartier
        ville
        prixBillet
        capaciteMax
        statut
        dateCreation
        categorie
        image
        sponsor
        createdAt
        updatedAt
        __typename
      }
      promoteur {
        id
        nom
        prenom
        telephone
        email
        role
        statut
        ville
        quartier
        dateCreation
        createdAt
        updatedAt
        owner
        __typename
      }
      acheteur {
        id
        nom
        prenom
        telephone
        email
        role
        statut
        ville
        quartier
        dateCreation
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateVente = /* GraphQL */ `
  subscription OnUpdateVente(
    $filter: ModelSubscriptionVenteFilterInput
    $acheteurId: String
    $promoteurId: String
  ) {
    onUpdateVente(
      filter: $filter
      acheteurId: $acheteurId
      promoteurId: $promoteurId
    ) {
      id
      evenementId
      promoteurId
      acheteurId
      acheteurNom
      acheteurTelephone
      acheteurEmail
      quantite
      prixTotal
      dateAchat
      methodePaiement
      numeroTransaction
      statut
      qrCode
      evenement {
        id
        promoteurId
        nom
        description
        date
        heure
        lieu
        quartier
        ville
        prixBillet
        capaciteMax
        statut
        dateCreation
        categorie
        image
        sponsor
        createdAt
        updatedAt
        __typename
      }
      promoteur {
        id
        nom
        prenom
        telephone
        email
        role
        statut
        ville
        quartier
        dateCreation
        createdAt
        updatedAt
        owner
        __typename
      }
      acheteur {
        id
        nom
        prenom
        telephone
        email
        role
        statut
        ville
        quartier
        dateCreation
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteVente = /* GraphQL */ `
  subscription OnDeleteVente(
    $filter: ModelSubscriptionVenteFilterInput
    $acheteurId: String
    $promoteurId: String
  ) {
    onDeleteVente(
      filter: $filter
      acheteurId: $acheteurId
      promoteurId: $promoteurId
    ) {
      id
      evenementId
      promoteurId
      acheteurId
      acheteurNom
      acheteurTelephone
      acheteurEmail
      quantite
      prixTotal
      dateAchat
      methodePaiement
      numeroTransaction
      statut
      qrCode
      evenement {
        id
        promoteurId
        nom
        description
        date
        heure
        lieu
        quartier
        ville
        prixBillet
        capaciteMax
        statut
        dateCreation
        categorie
        image
        sponsor
        createdAt
        updatedAt
        __typename
      }
      promoteur {
        id
        nom
        prenom
        telephone
        email
        role
        statut
        ville
        quartier
        dateCreation
        createdAt
        updatedAt
        owner
        __typename
      }
      acheteur {
        id
        nom
        prenom
        telephone
        email
        role
        statut
        ville
        quartier
        dateCreation
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
