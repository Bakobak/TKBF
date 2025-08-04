/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUtilisateur = /* GraphQL */ `
  mutation CreateUtilisateur(
    $input: CreateUtilisateurInput!
    $condition: ModelUtilisateurConditionInput
  ) {
    createUtilisateur(input: $input, condition: $condition) {
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
export const updateUtilisateur = /* GraphQL */ `
  mutation UpdateUtilisateur(
    $input: UpdateUtilisateurInput!
    $condition: ModelUtilisateurConditionInput
  ) {
    updateUtilisateur(input: $input, condition: $condition) {
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
export const deleteUtilisateur = /* GraphQL */ `
  mutation DeleteUtilisateur(
    $input: DeleteUtilisateurInput!
    $condition: ModelUtilisateurConditionInput
  ) {
    deleteUtilisateur(input: $input, condition: $condition) {
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
export const createVente = /* GraphQL */ `
  mutation CreateVente(
    $input: CreateVenteInput!
    $condition: ModelVenteConditionInput
  ) {
    createVente(input: $input, condition: $condition) {
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
export const updateVente = /* GraphQL */ `
  mutation UpdateVente(
    $input: UpdateVenteInput!
    $condition: ModelVenteConditionInput
  ) {
    updateVente(input: $input, condition: $condition) {
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
export const deleteVente = /* GraphQL */ `
  mutation DeleteVente(
    $input: DeleteVenteInput!
    $condition: ModelVenteConditionInput
  ) {
    deleteVente(input: $input, condition: $condition) {
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
