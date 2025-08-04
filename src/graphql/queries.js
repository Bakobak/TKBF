/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPromoteur = /* GraphQL */ `
  query GetPromoteur($id: ID!) {
    getPromoteur(id: $id) {
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
export const listPromoteurs = /* GraphQL */ `
  query ListPromoteurs(
    $filter: ModelPromoteurFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPromoteurs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const promoteursByEmail = /* GraphQL */ `
  query PromoteursByEmail(
    $email: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPromoteurFilterInput
    $limit: Int
    $nextToken: String
  ) {
    promoteursByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getEvenement = /* GraphQL */ `
  query GetEvenement($id: ID!) {
    getEvenement(id: $id) {
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
export const listEvenements = /* GraphQL */ `
  query ListEvenements(
    $filter: ModelEvenementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvenements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const evenementsByPromoteurId = /* GraphQL */ `
  query EvenementsByPromoteurId(
    $promoteurId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEvenementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    evenementsByPromoteurId(
      promoteurId: $promoteurId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getVente = /* GraphQL */ `
  query GetVente($id: ID!) {
    getVente(id: $id) {
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
export const listVentes = /* GraphQL */ `
  query ListVentes(
    $filter: ModelVenteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVentes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        evenementId
        promoteurId
        acheteur
        email
        quantite
        prixTotal
        dateAchat
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ventesByEvenementId = /* GraphQL */ `
  query VentesByEvenementId(
    $evenementId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVenteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ventesByEvenementId(
      evenementId: $evenementId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        evenementId
        promoteurId
        acheteur
        email
        quantite
        prixTotal
        dateAchat
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
