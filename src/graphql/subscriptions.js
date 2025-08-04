/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePromoteur = /* GraphQL */ `
  subscription OnCreatePromoteur(
    $filter: ModelSubscriptionPromoteurFilterInput
    $id: String
  ) {
    onCreatePromoteur(filter: $filter, id: $id) {
      id
      nom
      email
      statut
      dateCreation
      entreprise
      evenements {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePromoteur = /* GraphQL */ `
  subscription OnUpdatePromoteur(
    $filter: ModelSubscriptionPromoteurFilterInput
    $id: String
  ) {
    onUpdatePromoteur(filter: $filter, id: $id) {
      id
      nom
      email
      statut
      dateCreation
      entreprise
      evenements {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePromoteur = /* GraphQL */ `
  subscription OnDeletePromoteur(
    $filter: ModelSubscriptionPromoteurFilterInput
    $id: String
  ) {
    onDeletePromoteur(filter: $filter, id: $id) {
      id
      nom
      email
      statut
      dateCreation
      entreprise
      evenements {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
      prixBillet
      capaciteMax
      statut
      dateCreation
      image
      categorie
      promoteur {
        id
        nom
        email
        statut
        dateCreation
        entreprise
        createdAt
        updatedAt
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
      prixBillet
      capaciteMax
      statut
      dateCreation
      image
      categorie
      promoteur {
        id
        nom
        email
        statut
        dateCreation
        entreprise
        createdAt
        updatedAt
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
      prixBillet
      capaciteMax
      statut
      dateCreation
      image
      categorie
      promoteur {
        id
        nom
        email
        statut
        dateCreation
        entreprise
        createdAt
        updatedAt
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
    $promoteurId: String
  ) {
    onCreateVente(filter: $filter, promoteurId: $promoteurId) {
      id
      evenementId
      promoteurId
      acheteur
      email
      quantite
      prixTotal
      dateAchat
      evenement {
        id
        promoteurId
        nom
        description
        date
        heure
        lieu
        prixBillet
        capaciteMax
        statut
        dateCreation
        image
        categorie
        createdAt
        updatedAt
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
    $promoteurId: String
  ) {
    onUpdateVente(filter: $filter, promoteurId: $promoteurId) {
      id
      evenementId
      promoteurId
      acheteur
      email
      quantite
      prixTotal
      dateAchat
      evenement {
        id
        promoteurId
        nom
        description
        date
        heure
        lieu
        prixBillet
        capaciteMax
        statut
        dateCreation
        image
        categorie
        createdAt
        updatedAt
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
    $promoteurId: String
  ) {
    onDeleteVente(filter: $filter, promoteurId: $promoteurId) {
      id
      evenementId
      promoteurId
      acheteur
      email
      quantite
      prixTotal
      dateAchat
      evenement {
        id
        promoteurId
        nom
        description
        date
        heure
        lieu
        prixBillet
        capaciteMax
        statut
        dateCreation
        image
        categorie
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
