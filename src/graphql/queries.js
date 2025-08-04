/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUtilisateur = /* GraphQL */ `
  query GetUtilisateur($id: ID!) {
    getUtilisateur(id: $id) {
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
export const listUtilisateurs = /* GraphQL */ `
  query ListUtilisateurs(
    $filter: ModelUtilisateurFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUtilisateurs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const utilisateursByTelephone = /* GraphQL */ `
  query UtilisateursByTelephone(
    $telephone: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUtilisateurFilterInput
    $limit: Int
    $nextToken: String
  ) {
    utilisateursByTelephone(
      telephone: $telephone
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ventesByPromoteurId = /* GraphQL */ `
  query VentesByPromoteurId(
    $promoteurId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVenteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ventesByPromoteurId(
      promoteurId: $promoteurId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ventesByAcheteurId = /* GraphQL */ `
  query VentesByAcheteurId(
    $acheteurId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVenteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ventesByAcheteurId(
      acheteurId: $acheteurId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
