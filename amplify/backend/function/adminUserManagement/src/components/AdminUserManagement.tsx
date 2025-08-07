import React, { useState } from 'react';
import { fetchAuthSession } from 'aws-amplify/auth';

interface AdminUserManagementProps {
  utilisateur: any;
}

const AdminUserManagement: React.FC<AdminUserManagementProps> = ({ utilisateur }) => {
  const [formInvitation, setFormInvitation] = useState({
    email: '',
    nom: '',
    prenom: '',
    telephone: '',
    ville: ''
  });
  const [chargement, setChargement] = useState(false);
  const [message, setMessage] = useState('');
  const [erreur, setErreur] = useState('');

  const obtenirTokenAuth = async () => {
    try {
      const session = await fetchAuthSession();
      return session.tokens?.accessToken?.toString();
    } catch (error) {
      console.error('Erreur récupération token:', error);
      throw error;
    }
  };

  const inviterPromoteur = async () => {
    if (!formInvitation.email || !formInvitation.nom || !formInvitation.prenom) {
      setErreur('Veuillez remplir au moins l\'email, nom et prénom');
      return;
    }

    setChargement(true);
    setErreur('');
    setMessage('');

    try {
      const token = await obtenirTokenAuth();
      
      // URL temporaire - sera mise à jour après le déploiement
      const API_URL = 'https://fy3hi3w4f0.execute-api.us-east-1.amazonaws.com/dev/admin/invite-promoteur';
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formInvitation)
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(`✅ Promoteur ${formInvitation.prenom} ${formInvitation.nom} invité avec succès !`);
        setMessage(prevMsg => `${prevMsg}\n🔑 Mot de passe temporaire: ${result.tempPassword}`);
        setFormInvitation({
          email: '', nom: '', prenom: '', telephone: '', ville: ''
        });
      } else {
        setErreur(result.error || 'Erreur lors de l\'invitation');
      }
    } catch (error) {
      console.error('Erreur invitation:', error);
      setErreur('Erreur de connexion. Vérifiez l\'URL de l\'API dans le code.');
    } finally {
      setChargement(false);
    }
  };

  return (
    <div style={{ background: 'white', padding: '20px', borderRadius: '15px', border: '2px solid #8e44ad' }}>
      <h3 style={{ margin: '0 0 20px 0', color: '#8e44ad' }}>
        🛠️ Gestion des Promoteurs (Admin)
      </h3>

      {message && (
        <div style={{
          background: '#d4edda',
          color: '#155724',
          padding: '15px',
          borderRadius: '8px',
          marginBottom: '20px',
          border: '1px solid #c3e6cb',
          whiteSpace: 'pre-line'
        }}>
          {message}
        </div>
      )}

      {erreur && (
        <div style={{
          background: '#f8d7da',
          color: '#721c24',
          padding: '15px',
          borderRadius: '8px',
          marginBottom: '20px',
          border: '1px solid #f5c6cb'
        }}>
          ❌ {erreur}
        </div>
      )}

      <h4 style={{ color: '#8e44ad', marginBottom: '20px' }}>
        📧 Inviter un nouveau promoteur
      </h4>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginBottom: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email *</label>
          <input
            type="email"
            value={formInvitation.email}
            onChange={(e) => setFormInvitation(prev => ({ ...prev, email: e.target.value }))}
            placeholder="promoteur@example.com"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '2px solid #bdc3c7',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Prénom *</label>
          <input
            type="text"
            value={formInvitation.prenom}
            onChange={(e) => setFormInvitation(prev => ({ ...prev, prenom: e.target.value }))}
            placeholder="Jean"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '2px solid #bdc3c7',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Nom *</label>
          <input
            type="text"
            value={formInvitation.nom}
            onChange={(e) => setFormInvitation(prev => ({ ...prev, nom: e.target.value }))}
            placeholder="Dupont"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '2px solid #bdc3c7',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Téléphone</label>
          <input
            type="tel"
            value={formInvitation.telephone}
            onChange={(e) => setFormInvitation(prev => ({ ...prev, telephone: e.target.value }))}
            placeholder="70123456"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '2px solid #bdc3c7',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Ville</label>
          <input
            type="text"
            value={formInvitation.ville}
            onChange={(e) => setFormInvitation(prev => ({ ...prev, ville: e.target.value }))}
            placeholder="Ouagadougou"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '2px solid #bdc3c7',
              boxSizing: 'border-box'
            }}
          />
        </div>
      </div>

      <button
        onClick={inviterPromoteur}
        disabled={chargement || !formInvitation.email || !formInvitation.nom || !formInvitation.prenom}
        style={{
          background: chargement ? '#95a5a6' : 'linear-gradient(45deg, #8e44ad, #9b59b6)',
          color: 'white',
          padding: '15px 30px',
          border: 'none',
          borderRadius: '10px',
          cursor: chargement ? 'wait' : 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          width: '100%'
        }}
      >
        {chargement ? '🔄 Envoi en cours...' : '📧 Inviter le promoteur'}
      </button>

      <div style={{
        background: '#fff3cd',
        padding: '15px',
        borderRadius: '8px',
        marginTop: '20px',
        border: '1px solid #ffeaa7'
      }}>
        <h5 style={{ margin: '0 0 10px 0', color: '#e17055' }}>⚠️ Configuration nécessaire :</h5>
        <p style={{ margin: '0', fontSize: '14px' }}>
          Après le déploiement avec <code>amplify push</code>, vous devrez mettre à jour l'URL de l'API dans ce fichier.
        </p>
      </div>
    </div>
  );
};

export default AdminUserManagement;