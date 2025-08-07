const AWS = require('aws-sdk');
const cognito = new AWS.CognitoIdentityServiceProvider();

exports.handler = async (event) => {
  console.log('Event:', JSON.stringify(event, null, 2));
  
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight' })
    };
  }

  try {
    const userPoolId = process.env.AUTH_TKBF_USERPOOLID;
    console.log('UserPoolId:', userPoolId);
    
    if (event.path.includes('invite-promoteur') && event.httpMethod === 'POST') {
      return await invitePromoter(JSON.parse(event.body), userPoolId);
    }
    
    if (event.path.includes('list-promoteurs') && event.httpMethod === 'GET') {
      return await listPromoteurs(userPoolId);
    }

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: 'Action non supportée' })
    };

  } catch (error) {
    console.error('Erreur:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Erreur interne du serveur',
        details: error.message 
      })
    };
  }
};

async function invitePromoter(body, userPoolId) {
  const { email, nom, prenom, telephone, ville } = body;
  
  try {
    const tempPassword = generateTempPassword();
    
    const createParams = {
      UserPoolId: userPoolId,
      Username: email,
      TemporaryPassword: tempPassword,
      MessageAction: 'SUPPRESS',
      UserAttributes: [
        { Name: 'email', Value: email },
        { Name: 'email_verified', Value: 'true' },
        { Name: 'given_name', Value: prenom },
        { Name: 'family_name', Value: nom },
        { Name: 'phone_number', Value: `+226${telephone || '70000000'}` },
        { Name: 'website', Value: 'PROMOTEUR' },
        { Name: 'address', Value: ville || 'Ouagadougou' }
      ]
    };

    console.log('Création utilisateur:', createParams);
    const user = await cognito.adminCreateUser(createParams).promise();
    console.log('Utilisateur créé:', user.User.Username);
    
    // Ajouter au groupe PROMOTEUR
    try {
      await cognito.adminAddUserToGroup({
        UserPoolId: userPoolId,
        Username: email,
        GroupName: 'PROMOTEUR'
      }).promise();
      console.log('Utilisateur ajouté au groupe PROMOTEUR');
    } catch (groupError) {
      console.log('Erreur ajout groupe (peut-être que le groupe n\'existe pas encore):', groupError.message);
    }

    // Définir le mot de passe
    await cognito.adminSetUserPassword({
      UserPoolId: userPoolId,
      Username: email,
      Password: tempPassword,
      Permanent: false
    }).promise();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: `Promoteur ${prenom} ${nom} invité avec succès`,
        tempPassword: tempPassword,
        userId: user.User.Username
      })
    };

  } catch (error) {
    console.error('Erreur invitation promoteur:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Erreur lors de l\'invitation',
        details: error.message
      })
    };
  }
}

async function listPromoteurs(userPoolId) {
  try {
    // Lister tous les utilisateurs et filtrer ceux avec website=PROMOTEUR
    const result = await cognito.listUsers({
      UserPoolId: userPoolId,
      Limit: 50
    }).promise();

    const promoteurs = result.Users.filter(user => {
      const websiteAttr = user.Attributes.find(attr => attr.Name === 'website');
      return websiteAttr && websiteAttr.Value === 'PROMOTEUR';
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        users: promoteurs,
        totalCount: promoteurs.length
      })
    };

  } catch (error) {
    console.error('Erreur listage promoteurs:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Erreur lors du listage',
        details: error.message
      })
    };
  }
}

function generateTempPassword() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let password = 'Tkbf2025!'; // Base sécurisée
  
  for (let i = 0; i < 4; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  
  return password;
}