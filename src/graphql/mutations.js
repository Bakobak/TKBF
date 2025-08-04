/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPromoteur = /* GraphQL */ `
  mutation CreatePromoteur(
    $input: CreatePromoteurInput!
    $condition: ModelPromoteurConditionInput
  ) {
    createPromoteur(input: $input, condition: $condition) {
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
export const updatePromoteur = /* GraphQL */ `
  mutation UpdatePromoteur(
    $input: UpdatePromoteurInput!
    $condition: ModelPromoteurConditionInput
  ) {
    updatePromoteur(input: $input, condition: $condition) {
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
export const deletePromoteur = /* GraphQL */ `
  mutation DeletePromoteur(
    $input: DeletePromoteurInput!
    $condition: ModelPromoteurConditionInput
  ) {
    deletePromoteur(input: $input, condition: $condition) {
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
export const createEvenement = /* GraphQL */ `
  mutation CreateEvenement(
    $input: CreateEvenementInput!
    $condition: ModelEvenementConditionInput
  ) {
    createEvenement(input: $input, condition: $condition) {
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
export const updateEvenement = /* GraphQL */ `
  mutation UpdateEvenement(
    $input: UpdateEvenementInput!
    $condition: ModelEvenementConditionInput
  ) {
    updateEvenement(input: $input, condition: $condition) {
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
export const deleteEvenement = /* GraphQL */ `
  mutation DeleteEvenement(
    $input: DeleteEvenementInput!
    $condition: ModelEvenementConditionInput
  ) {
    deleteEvenement(input: $input, condition: $condition) {
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
export const createVente = /* GraphQL */ `
  mutation CreateVente(
    $input: CreateVenteInput!
    $condition: ModelVenteConditionInput
  ) {
    createVente(input: $input, condition: $condition) {
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
export const updateVente = /* GraphQL */ `
  mutation UpdateVente(
    $input: UpdateVenteInput!
    $condition: ModelVenteConditionInput
  ) {
    updateVente(input: $input, condition: $condition) {
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
export const deleteVente = /* GraphQL */ `
  mutation DeleteVente(
    $input: DeleteVenteInput!
    $condition: ModelVenteConditionInput
  ) {
    deleteVente(input: $input, condition: $condition) {
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
