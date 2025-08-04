import { useState } from 'react';

interface Utilisateur {
  id: string;
  nom: string;
  prenom: string;
  telephone: string;
  email?: string;
  role: 'ADMIN' | 'PROMOTEUR' | 'CLIENT';
  statut: 'ACTIF' | 'INACTIF';
  ville: string;
  quartier?: string;
  dateCreation: string;
}

interface Evenement {
  id: string;
  promoteurId: string;
  nom: string;
  description?: string;
  date: string;
  heure: string;
  lieu: string;
  quartier: string;
  ville: string;
  prixBillet: number;
  capaciteMax: number;
  statut: 'EN_ATTENTE' | 'APPROUVE' | 'REJETE';
  dateCreation: string;
  categorie: string;
  image?: string;
  sponsor?: string;
}

interface Vente {
  id: string;
  evenementId: string;
  promoteurId: string;
  acheteur: string;
  telephone: string;
  email?: string;
  quantite: number;
  prixTotal: number;
  dateAchat: string;
  methodePaiement: 'ORANGE_MONEY' | 'MOOV_MONEY' | 'CORIS_MONEY' | 'ESPECES';
  numeroTransaction?: string;
  statut: 'EN_ATTENTE' | 'CONFIRME' | 'ECHEC';
  qrCode?: string;
}

const utilisateursTest = [
  { 
    telephone: '70123456', 
    password: 'admin123', 
    userId: '1', 
    role: 'ADMIN', 
    nom: 'Ouédraogo', 
    prenom: 'Amadou',
    ville: 'Ouagadougou',
    quartier: 'Ouaga 2000',
    email: 'amadou@tkbf.bf'
  },
  { 
    telephone: '76234567', 
    password: 'promo123', 
    userId: '2', 
    role: 'PROMOTEUR', 
    nom: 'Kaboré', 
    prenom: 'Fatimata',
    ville: 'Ouagadougou',
    quartier: 'Cissin',
    email: 'fatimata@tkbf.bf'
  },
  { 
    telephone: '78345678', 
    password: 'client123', 
    userId: '3', 
    role: 'CLIENT', 
    nom: 'Sawadogo', 
    prenom: 'Ibrahim',
    ville: 'Bobo-Dioulasso',
    quartier: 'Secteur 25',
    email: 'ibrahim@tkbf.bf'
  }
];

const evenementsParDefaut: Evenement[] = [
  {
    id: '1',
    promoteurId: '2',
    nom: 'Festival des Arts de Ouaga',
    description: 'Le plus grand festival culturel du Burkina Faso',
    date: '2025-12-01',
    heure: '19:00',
    lieu: 'Palais des Sports',
    quartier: 'Ouaga 2000',
    ville: 'Ouagadougou',
    prixBillet: 5000,
    capaciteMax: 500,
    statut: 'APPROUVE',
    dateCreation: '2025-07-31',
    categorie: 'Festival',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop'
  },
  {
    id: '2',
    promoteurId: '2',
    nom: 'Concert Yeelen',
    description: 'Soirée musicale avec les meilleurs artistes burkinabè',
    date: '2025-08-15',
    heure: '20:00',
    lieu: 'Centre Culturel Français',
    quartier: 'Zone du Bois',
    ville: 'Ouagadougou',
    prixBillet: 3000,
    capaciteMax: 200,
    statut: 'APPROUVE',
    dateCreation: '2025-07-31',
    categorie: 'Concert',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop'
  },
  {
    id: '3',
    promoteurId: '2',
    nom: 'Soirée Danse Traditionnelle',
    description: 'Découvrez les danses ancestrales du Burkina Faso',
    date: '2025-09-10',
    heure: '18:30',
    lieu: 'Maison du Peuple',
    quartier: 'Centre-ville',
    ville: 'Ouagadougou',
    prixBillet: 2500,
    capaciteMax: 300,
    statut: 'EN_ATTENTE',
    dateCreation: '2025-08-01',
    categorie: 'Danse',
    image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&h=250&fit=crop'
  }
];

const categories = [
  { id: 'tous', nom: 'Tous', icon: '🎯', couleur: '#e67e22' },
  { id: 'Festival', nom: 'Festivals', icon: '🎪', couleur: '#e74c3c' },
  { id: 'Concert', nom: 'Concerts', icon: '🎵', couleur: '#8e44ad' },
  { id: 'Théâtre', nom: 'Théâtre', icon: '🎭', couleur: '#2980b9' },
  { id: 'Danse', nom: 'Danse', icon: '💃', couleur: '#27ae60' },
  { id: 'Culture', nom: 'Culture', icon: '🥁', couleur: '#f39c12' }
];

const methodesPaiement = [
  { id: 'ORANGE_MONEY', nom: 'Orange Money', icon: '🧡', couleur: '#FF6600' },
  { id: 'MOOV_MONEY', nom: 'Moov Money', icon: '🔵', couleur: '#0066CC' },
  { id: 'CORIS_MONEY', nom: 'Coris Money', icon: '🟢', couleur: '#009900' },
  { id: 'ESPECES', nom: 'Espèces', icon: '💵', couleur: '#34495e' }
];

const genererQRCode = (data: string) => {
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(data)}`;
};

const PageConnexion = ({ onConnexion }: { onConnexion: (utilisateur: Utilisateur) => void }) => {
  const [telephone, setTelephone] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [erreur, setErreur] = useState('');
  const [chargement, setChargement] = useState(false);

  const gererConnexion = async () => {
    if (!telephone || !motDePasse) {
      setErreur('Veuillez remplir tous les champs');
      return;
    }

    setChargement(true);
    setErreur('');

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const utilisateurValide = utilisateursTest.find(u => 
        u.telephone === telephone && u.password === motDePasse
      );
      
      if (utilisateurValide) {
        const utilisateur: Utilisateur = {
          id: utilisateurValide.userId,
          nom: utilisateurValide.nom,
          prenom: utilisateurValide.prenom,
          telephone: utilisateurValide.telephone,
          email: utilisateurValide.email,
          role: utilisateurValide.role as 'ADMIN' | 'PROMOTEUR' | 'CLIENT',
          statut: 'ACTIF',
          ville: utilisateurValide.ville,
          quartier: utilisateurValide.quartier,
          dateCreation: new Date().toLocaleDateString('fr-FR')
        };
        
        onConnexion(utilisateur);
      } else {
        setErreur('Numéro ou mot de passe incorrect');
      }
    } catch (erreur: any) {
      setErreur('Erreur de connexion');
    } finally {
      setChargement(false);
    }
  };

  const connexionRapide = async (telTest: string, motDePasseTest: string) => {
    setChargement(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      const utilisateurValide = utilisateursTest.find(u => 
        u.telephone === telTest && u.password === motDePasseTest
      );
      
      if (utilisateurValide) {
        const utilisateur: Utilisateur = {
          id: utilisateurValide.userId,
          nom: utilisateurValide.nom,
          prenom: utilisateurValide.prenom,
          telephone: utilisateurValide.telephone,
          email: utilisateurValide.email,
          role: utilisateurValide.role as 'ADMIN' | 'PROMOTEUR' | 'CLIENT',
          statut: 'ACTIF',
          ville: utilisateurValide.ville,
          quartier: utilisateurValide.quartier,
          dateCreation: new Date().toLocaleDateString('fr-FR')
        };
        onConnexion(utilisateur);
      }
    } finally {
      setChargement(false);
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '20px',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
        border: '3px solid #27ae60'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <span style={{ fontSize: '3em' }}>🇧🇫</span>
          <h1 style={{ margin: '10px 0 5px 0', fontSize: '2.5em', color: '#e67e22' }}>TKBF</h1>
          <p style={{ margin: '0 0 5px 0', color: '#27ae60', fontSize: '18px', fontWeight: 'bold' }}>
            Burkina Events
          </p>
          <p style={{ margin: '0 0 20px 0', color: '#7f8c8d', fontSize: '16px' }}>
            Plateforme burkinabè avec QR Code et paiement mobile
          </p>
        </div>

        <div style={{ marginBottom: '30px', textAlign: 'left' }}>
          <input
            type="tel"
            placeholder="📱 Numéro de téléphone (Ex: 70123456)"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            disabled={chargement}
            style={{
              width: '100%',
              padding: '15px',
              borderRadius: '10px',
              border: erreur ? '2px solid #e74c3c' : '2px solid #bdc3c7',
              fontSize: '16px',
              marginBottom: '15px',
              boxSizing: 'border-box'
            }}
          />

          <input
            type="password"
            placeholder="🔐 Mot de passe"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            disabled={chargement}
            style={{
              width: '100%',
              padding: '15px',
              borderRadius: '10px',
              border: erreur ? '2px solid #e74c3c' : '2px solid #bdc3c7',
              fontSize: '16px',
              marginBottom: '20px',
              boxSizing: 'border-box'
            }}
          />

          {erreur && (
            <p style={{ color: '#e74c3c', margin: '0 0 20px 0', fontWeight: 'bold', textAlign: 'center' }}>
              ❌ {erreur}
            </p>
          )}

          <button
            onClick={gererConnexion}
            disabled={chargement || !telephone || !motDePasse}
            style={{
              width: '100%',
              background: chargement ? '#95a5a6' : 'linear-gradient(45deg, #e67e22, #f39c12)',
              color: 'white',
              padding: '15px',
              border: 'none',
              borderRadius: '10px',
              cursor: chargement ? 'wait' : 'pointer',
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}
          >
            {chargement ? '🔄 Connexion...' : '🚀 Se connecter'}
          </button>
        </div>

        <div style={{
          background: '#ecf0f1',
          padding: '25px',
          borderRadius: '15px',
          textAlign: 'left'
        }}>
          <h4 style={{ margin: '0 0 20px 0', textAlign: 'center', color: '#2c3e50' }}>
            🧪 Tests Rapides
          </h4>
          
          <div style={{ marginBottom: '15px' }}>
            <button
              onClick={() => connexionRapide('70123456', 'admin123')}
              disabled={chargement}
              style={{
                display: 'block',
                background: '#8e44ad',
                color: 'white',
                padding: '15px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                width: '100%',
                fontWeight: 'bold',
                marginBottom: '10px'
              }}
            >
              🛠️ ADMINISTRATEUR
              <br />
              <small>Amadou OUÉDRAOGO - Validation événements</small>
            </button>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <button
              onClick={() => connexionRapide('76234567', 'promo123')}
              disabled={chargement}
              style={{
                display: 'block',
                background: '#e67e22',
                color: 'white',
                padding: '15px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                width: '100%',
                fontWeight: 'bold',
                marginBottom: '10px'
              }}
            >
              🎪 PROMOTEUR
              <br />
              <small>Fatimata KABORÉ - Créer événements</small>
            </button>
          </div>

          <div>
            <button
              onClick={() => connexionRapide('78345678', 'client123')}
              disabled={chargement}
              style={{
                display: 'block',
                background: '#27ae60',
                color: 'white',
                padding: '15px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                width: '100%',
                fontWeight: 'bold'
              }}
            >
              👤 CLIENT
              <br />
              <small>Ibrahim SAWADOGO - Acheter billets QR</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = ({ utilisateur, onDeconnexion }: { utilisateur: Utilisateur, onDeconnexion: () => void }) => {
  const [evenements, setEvenements] = useState<Evenement[]>(evenementsParDefaut);
  const [ventes, setVentes] = useState<Vente[]>([]);
  const [ongletActif, setOngletActif] = useState('accueil');
  const [categorieSelectionnee, setCategorieSelectionnee] = useState('tous');
  const [evenementSelectionne, setEvenementSelectionne] = useState<Evenement | null>(null);
  const [quantite, setQuantite] = useState(1);
  const [methodePaiement, setMethodePaiement] = useState('ORANGE_MONEY');
  const [numeroPaiement, setNumeroPaiement] = useState('');
  
  const [nouvelEvenement, setNouvelEvenement] = useState({
    nom: '',
    description: '',
    date: '',
    heure: '',
    lieu: '',
    quartier: '',
    ville: '',
    prixBillet: '',
    capaciteMax: '',
    categorie: 'Concert'
  });

  const estAdmin = utilisateur.role === 'ADMIN';
  const estPromoteur = utilisateur.role === 'PROMOTEUR';
  const estClient = utilisateur.role === 'CLIENT';

  const evenementsPublics = evenements.filter(e => e.statut === 'APPROUVE');
  const evenementsFiltres = categorieSelectionnee === 'tous' 
    ? evenementsPublics 
    : evenementsPublics.filter(e => e.categorie === categorieSelectionnee);
  
  const evenementsEnAttente = evenements.filter(e => e.statut === 'EN_ATTENTE');
  const mesEvenements = evenements.filter(e => e.promoteurId === utilisateur.id);
  const mesVentes = ventes.filter(v => v.acheteur.includes(utilisateur.nom));
  const ventesPromotion = ventes.filter(v => v.promoteurId === utilisateur.id);

  const couleurRole = estAdmin ? '#8e44ad' : estPromoteur ? '#e67e22' : '#27ae60';

  const confirmerAchat = () => {
    if (!evenementSelectionne || !numeroPaiement) return;

    const methodePaiementInfo = methodesPaiement.find(m => m.id === methodePaiement);
    const montantTotal = evenementSelectionne.prixBillet * quantite;
    const numeroTransaction = 'TXN' + Date.now();

    const qrData = JSON.stringify({
      evenement: evenementSelectionne.nom,
      acheteur: `${utilisateur.prenom} ${utilisateur.nom}`,
      quantite: quantite,
      prix: montantTotal,
      transaction: numeroTransaction
    });

    const nouvelleVente: Vente = {
      id: Date.now().toString(),
      evenementId: evenementSelectionne.id,
      promoteurId: evenementSelectionne.promoteurId,
      acheteur: `${utilisateur.prenom} ${utilisateur.nom}`,
      telephone: numeroPaiement,
      email: utilisateur.email,
      quantite: quantite,
      prixTotal: montantTotal,
      methodePaiement: methodePaiement as any,
      numeroTransaction: numeroTransaction,
      statut: 'CONFIRME',
      dateAchat: new Date().toISOString(),
      qrCode: genererQRCode(qrData)
    };

    setVentes(prev => [...prev, nouvelleVente]);
    alert(`✅ Achat confirmé !\n🎫 ${quantite} billet(s)\n💰 ${montantTotal.toLocaleString()} FCFA\n📱 QR Code disponible dans "Mes Billets"`);
    setEvenementSelectionne(null);
  };

  const approuverEvenement = (idEvenement: string) => {
    setEvenements(prev => prev.map(e => 
      e.id === idEvenement ? { ...e, statut: 'APPROUVE' as const } : e
    ));
  };

  const rejeterEvenement = (idEvenement: string) => {
    setEvenements(prev => prev.map(e => 
      e.id === idEvenement ? { ...e, statut: 'REJETE' as const } : e
    ));
  };

  const creerEvenement = () => {
    if (!nouvelEvenement.nom || !nouvelEvenement.date || !nouvelEvenement.lieu) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    const evenement: Evenement = {
      id: Date.now().toString(),
      promoteurId: utilisateur.id,
      nom: nouvelEvenement.nom,
      description: nouvelEvenement.description,
      date: nouvelEvenement.date,
      heure: nouvelEvenement.heure,
      lieu: nouvelEvenement.lieu,
      quartier: nouvelEvenement.quartier,
      ville: nouvelEvenement.ville || utilisateur.ville,
      prixBillet: parseInt(nouvelEvenement.prixBillet),
      capaciteMax: parseInt(nouvelEvenement.capaciteMax),
      statut: 'EN_ATTENTE',
      dateCreation: new Date().toISOString(),
      categorie: nouvelEvenement.categorie,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=250&fit=crop'
    };

    setEvenements(prev => [...prev, evenement]);
    setNouvelEvenement({
      nom: '', description: '', date: '', heure: '', lieu: '', quartier: '', ville: '',
      prixBillet: '', capaciteMax: '', categorie: 'Concert'
    });
    alert('✅ Événement créé ! Il sera visible après validation par l\'administrateur.');
  };

  return (
    <div style={{ background: '#ecf0f1', minHeight: '100vh' }}>
      <header style={{
        background: `linear-gradient(135deg, ${couleurRole} 0%, ${couleurRole}dd 100%)`,
        color: 'white',
        padding: '15px 0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 15px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ fontSize: '2em' }}>🇧🇫</span>
            <div>
              <h1 style={{ margin: 0, fontSize: '2em' }}>TKBF</h1>
              <p style={{ margin: '2px 0 0 0', opacity: 0.9, fontSize: '14px' }}>Burkina Events</p>
            </div>
            <div style={{ 
              background: 'rgba(255,255,255,0.2)', 
              padding: '8px 15px', 
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              {estAdmin ? '🛠️ Admin' : estPromoteur ? '🎪 Promoteur' : '👤 Client'}
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ textAlign: 'right', fontSize: '14px' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>{utilisateur.prenom} {utilisateur.nom}</p>
              <p style={{ margin: 0, opacity: 0.8, fontSize: '12px' }}>📱 {utilisateur.telephone}</p>
            </div>
            <button 
              onClick={onDeconnexion} 
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                padding: '10px 15px',
                border: '2px solid rgba(255,255,255,0.3)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >
              🚪 Déconnexion
            </button>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '15px' }}>
        <div style={{ 
          display: 'flex', 
          gap: '10px', 
          marginBottom: '20px', 
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <button
            onClick={() => setOngletActif('accueil')}
            style={{
              background: ongletActif === 'accueil' ? couleurRole : 'white',
              color: ongletActif === 'accueil' ? 'white' : couleurRole,
              border: `2px solid ${couleurRole}`,
              padding: '10px 20px',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            🏠 Événements
          </button>
          
          {estAdmin && (
            <button
              onClick={() => setOngletActif('validation')}
              style={{
                background: ongletActif === 'validation' ? couleurRole : 'white',
                color: ongletActif === 'validation' ? 'white' : couleurRole,
                border: `2px solid ${couleurRole}`,
                padding: '10px 20px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              🛠️ Validation ({evenementsEnAttente.length})
            </button>
          )}
          
          {estPromoteur && (
            <>
              <button
                onClick={() => setOngletActif('creer')}
                style={{
                  background: ongletActif === 'creer' ? couleurRole : 'white',
                  color: ongletActif === 'creer' ? 'white' : couleurRole,
                  border: `2px solid ${couleurRole}`,
                  padding: '10px 20px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                ➕ Créer
              </button>
              <button
                onClick={() => setOngletActif('ventes')}
                style={{
                  background: ongletActif === 'ventes' ? couleurRole : 'white',
                  color: ongletActif === 'ventes' ? 'white' : couleurRole,
                  border: `2px solid ${couleurRole}`,
                  padding: '10px 20px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                💰 Ventes
              </button>
            </>
          )}
          
          {estClient && (
            <button
              onClick={() => setOngletActif('billets')}
              style={{
                background: ongletActif === 'billets' ? couleurRole : 'white',
                color: ongletActif === 'billets' ? 'white' : couleurRole,
                border: `2px solid ${couleurRole}`,
                padding: '10px 20px',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              🎫 Mes Billets ({mesVentes.length})
            </button>
          )}
        </div>

        {ongletActif === 'accueil' && (
          <>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
              marginBottom: '25px'
            }}>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategorieSelectionnee(cat.id)}
                  style={{
                    background: categorieSelectionnee === cat.id ? cat.couleur : 'white',
                    color: categorieSelectionnee === cat.id ? 'white' : cat.couleur,
                    border: `2px solid ${cat.couleur}`,
                    padding: '8px 16px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  {cat.icon} {cat.nom}
                </button>
              ))}
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {evenementsFiltres.map(event => {
                const ventesEvent = ventes.filter(v => v.evenementId === event.id);
                const billetVendus = ventesEvent.reduce((sum, v) => sum + v.quantite, 0);
                const placesRestantes = event.capaciteMax - billetVendus;
                const categorie = categories.find(c => c.id === event.categorie);
                
                return (
                  <div key={event.id} style={{
                    background: 'white',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                    border: '2px solid #27ae60'
                  }}>
                    <div style={{ 
                      height: '180px',
                      backgroundImage: `url(${event.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: categorie?.couleur,
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '15px',
                        fontSize: '11px',
                        fontWeight: 'bold'
                      }}>
                        {categorie?.icon} {categorie?.nom}
                      </div>
                      <div style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '10px',
                        background: 'rgba(0,0,0,0.8)',
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '15px',
                        fontSize: '14px',
                        fontWeight: 'bold'
                      }}>
                        {event.prixBillet.toLocaleString()} FCFA
                      </div>
                    </div>
                    
                    <div style={{ padding: '15px' }}>
                      <h4 style={{ margin: '0 0 10px 0', fontSize: '1.1em', color: '#2c3e50' }}>
                        {event.nom}
                      </h4>
                      
                      <div style={{ marginBottom: '12px', color: '#7f8c8d', fontSize: '13px' }}>
                        <p style={{ margin: '3px 0' }}>📅 {event.date} à {event.heure}</p>
                        <p style={{ margin: '3px 0' }}>📍 {event.lieu}</p>
                        <p style={{ margin: '3px 0' }}>🏙️ {event.ville}</p>
                        <p style={{ margin: '3px 0' }}>
                          🎫 {placesRestantes > 0 ? (
                            <span style={{ color: '#27ae60', fontWeight: 'bold' }}>
                              {placesRestantes} places disponibles
                            </span>
                          ) : (
                            <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>Complet</span>
                          )}
                        </p>
                      </div>
                      
                      <p style={{ 
                        margin: '12px 0', 
                        fontSize: '13px', 
                        color: '#666',
                        height: '2.8em',
                        overflow: 'hidden'
                      }}>
                        {event.description}
                      </p>
                      
                      {estClient && (
                        <button
                          onClick={() => setEvenementSelectionne(event)}
                          disabled={placesRestantes === 0}
                          style={{
                            width: '100%',
                            background: placesRestantes > 0 ? 'linear-gradient(45deg, #e67e22, #f39c12)' : '#95a5a6',
                            color: 'white',
                            padding: '12px',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: placesRestantes > 0 ? 'pointer' : 'not-allowed',
                            fontSize: '14px',
                            fontWeight: 'bold'
                          }}
                        >
                          {placesRestantes > 0 ? '🎫 Réserver' : '❌ Complet'}
                        </button>
                      )}
                      
                      {!estClient && (
                        <div style={{
                          background: '#f8f9fa',
                          padding: '10px',
                          borderRadius: '8px',
                          textAlign: 'center',
                          fontSize: '14px',
                          color: '#666'
                        }}>
                          {billetVendus} / {event.capaciteMax} billets vendus
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {ongletActif === 'validation' && estAdmin && (
          <div style={{ background: 'white', padding: '20px', borderRadius: '15px', border: `2px solid ${couleurRole}` }}>
            <h3 style={{ margin: '0 0 20px 0', color: couleurRole }}>
              🛠️ Validation Événements ({evenementsEnAttente.length} en attente)
            </h3>
            
            {evenementsEnAttente.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                <p style={{ fontSize: '18px' }}>✅ Aucun événement en attente</p>
              </div>
            ) : (
              evenementsEnAttente.map(event => (
                <div key={event.id} style={{ 
                  background: '#fff3cd', 
                  padding: '20px', 
                  borderRadius: '12px', 
                  marginBottom: '15px',
                  border: '2px solid #f39c12'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '15px' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                      <h4 style={{ margin: '0 0 10px 0' }}>{event.nom}</h4>
                      <p style={{ margin: '3px 0', fontSize: '14px' }}>📅 {event.date} à {event.heure}</p>
                      <p style={{ margin: '3px 0', fontSize: '14px' }}>📍 {event.lieu}, {event.ville}</p>
                      <p style={{ margin: '3px 0', fontSize: '14px' }}>💰 {event.prixBillet.toLocaleString()} FCFA</p>
                      <p style={{ margin: '3px 0', fontSize: '14px' }}>👥 {event.capaciteMax} places</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <button
                        onClick={() => approuverEvenement(event.id)}
                        style={{
                          background: '#27ae60',
                          color: 'white',
                          padding: '10px 20px',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontWeight: 'bold'
                        }}
                      >
                        ✅ Approuver
                      </button>
                      <button
                        onClick={() => rejeterEvenement(event.id)}
                        style={{
                          background: '#e74c3c',
                          color: 'white',
                          padding: '10px 20px',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontWeight: 'bold'
                        }}
                      >
                        ❌ Rejeter
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {ongletActif === 'creer' && estPromoteur && (
          <div style={{ background: 'white', padding: '30px', borderRadius: '15px', border: `2px solid ${couleurRole}` }}>
            <h3 style={{ margin: '0 0 25px 0', color: couleurRole }}>➕ Créer un Événement</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Nom *</label>
                <input
                  type="text"
                  placeholder="Nom de l'événement"
                  value={nouvelEvenement.nom}
                  onChange={(e) => setNouvelEvenement(prev => ({ ...prev, nom: e.target.value }))}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid #bdc3c7', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Catégorie</label>
                <select
                  value={nouvelEvenement.categorie}
                  onChange={(e) => setNouvelEvenement(prev => ({ ...prev, categorie: e.target.value }))}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid #bdc3c7', boxSizing: 'border-box' }}
                >
                  {categories.filter(c => c.id !== 'tous').map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.nom}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Date *</label>
                <input
                  type="date"
                  value={nouvelEvenement.date}
                  onChange={(e) => setNouvelEvenement(prev => ({ ...prev, date: e.target.value }))}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid #bdc3c7', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Heure</label>
                <input
                  type="time"
                  value={nouvelEvenement.heure}
                  onChange={(e) => setNouvelEvenement(prev => ({ ...prev, heure: e.target.value }))}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid #bdc3c7', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Lieu *</label>
                <input
                  type="text"
                  placeholder="Lieu de l'événement"
                  value={nouvelEvenement.lieu}
                  onChange={(e) => setNouvelEvenement(prev => ({ ...prev, lieu: e.target.value }))}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid #bdc3c7', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Prix (FCFA) *</label>
                <input
                  type="number"
                  placeholder="5000"
                  value={nouvelEvenement.prixBillet}
                  onChange={(e) => setNouvelEvenement(prev => ({ ...prev, prixBillet: e.target.value }))}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid #bdc3c7', boxSizing: 'border-box' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Capacité *</label>
                <input
                  type="number"
                  placeholder="500"
                  value={nouvelEvenement.capaciteMax}
                  onChange={(e) => setNouvelEvenement(prev => ({ ...prev, capaciteMax: e.target.value }))}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid #bdc3c7', boxSizing: 'border-box' }}
                />
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Description</label>
              <textarea
                placeholder="Décrivez votre événement..."
                value={nouvelEvenement.description}
                onChange={(e) => setNouvelEvenement(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid #bdc3c7', boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <button
                onClick={creerEvenement}
                style={{
                  background: 'linear-gradient(45deg, #e67e22, #f39c12)',
                  color: 'white',
                  padding: '15px 40px',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '18px',
                  fontWeight: 'bold'
                }}
              >
                🎪 Créer l'Événement
              </button>
            </div>
          </div>
        )}

        {ongletActif === 'ventes' && estPromoteur && (
          <div style={{ background: 'white', padding: '20px', borderRadius: '15px', border: `2px solid ${couleurRole}` }}>
            <h3 style={{ margin: '0 0 20px 0', color: couleurRole }}>💰 Suivi de mes Ventes</h3>
            
            <div style={{ 
              background: couleurRole, 
              color: 'white', 
              padding: '20px', 
              borderRadius: '10px', 
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '2em' }}>
                {ventesPromotion.reduce((sum, v) => sum + v.prixTotal, 0).toLocaleString()} FCFA
              </h3>
              <p style={{ margin: 0 }}>Total encaissé • {ventesPromotion.length} ventes</p>
            </div>

            {ventesPromotion.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                <p style={{ fontSize: '18px' }}>💰 Aucune vente pour le moment</p>
              </div>
            ) : (
              ventesPromotion.map(vente => {
                const event = evenements.find(e => e.id === vente.evenementId);
                return (
                  <div key={vente.id} style={{ 
                    background: '#f8f9fa', 
                    padding: '15px', 
                    borderRadius: '8px', 
                    marginBottom: '10px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h4 style={{ margin: '0 0 5px 0' }}>{event?.nom}</h4>
                        <p style={{ margin: '2px 0', fontSize: '13px' }}>👤 {vente.acheteur}</p>
                        <p style={{ margin: '2px 0', fontSize: '13px' }}>🎫 {vente.quantite} billet(s)</p>
                      </div>
                      <div style={{ 
                        padding: '10px 15px', 
                        background: '#27ae60',
                        color: 'white',
                        borderRadius: '8px',
                        fontWeight: 'bold'
                      }}>
                        {vente.prixTotal.toLocaleString()} FCFA
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {ongletActif === 'billets' && estClient && (
          <div style={{ background: 'white', padding: '20px', borderRadius: '15px', border: `2px solid ${couleurRole}` }}>
            <h3 style={{ margin: '0 0 20px 0', color: couleurRole }}>🎫 Mes Billets avec QR Code</h3>
            
            {mesVentes.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                <p style={{ fontSize: '18px' }}>🎫 Aucun billet pour le moment</p>
                <button
                  onClick={() => setOngletActif('accueil')}
                  style={{
                    background: couleurRole,
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  🏠 Voir les événements
                </button>
              </div>
            ) : (
              mesVentes.map(vente => {
                const event = evenements.find(e => e.id === vente.evenementId);
                return (
                  <div key={vente.id} style={{ 
                    background: '#f8f9fa', 
                    padding: '20px', 
                    borderRadius: '12px', 
                    marginBottom: '20px',
                    border: '2px solid #27ae60'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '20px' }}>
                      <div style={{ flex: 1, minWidth: '250px' }}>
                        <h4 style={{ margin: '0 0 10px 0' }}>{event?.nom}</h4>
                        <p style={{ margin: '3px 0', fontSize: '14px' }}>📅 {event?.date} à {event?.heure}</p>
                        <p style={{ margin: '3px 0', fontSize: '14px' }}>📍 {event?.lieu}</p>
                        <p style={{ margin: '3px 0', fontSize: '14px' }}>🎫 {vente.quantite} billet(s)</p>
                        <p style={{ margin: '3px 0', fontSize: '14px' }}>💰 {vente.prixTotal.toLocaleString()} FCFA</p>
                        <div style={{ 
                          marginTop: '10px',
                          padding: '8px 12px', 
                          borderRadius: '20px',
                          background: '#27ae60',
                          color: 'white',
                          display: 'inline-block',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}>
                          ✅ Confirmé
                        </div>
                      </div>
                      
                      <div style={{ 
                        textAlign: 'center', 
                        background: 'white', 
                        padding: '15px', 
                        borderRadius: '10px',
                        border: '2px solid #27ae60'
                      }}>
                        <p style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold', color: '#27ae60' }}>
                          📱 QR Code
                        </p>
                        {vente.qrCode && (
                          <img 
                            src={vente.qrCode} 
                            alt="QR Code" 
                            style={{ 
                              width: '150px', 
                              height: '150px', 
                              border: '1px solid #ddd',
                              borderRadius: '8px'
                            }} 
                          />
                        )}
                        <p style={{ margin: '10px 0 0 0', fontSize: '12px', color: '#666' }}>
                          Code d'entrée
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>

      {evenementSelectionne && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '15px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            maxWidth: '500px',
            width: '100%',
            padding: '25px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, color: '#e67e22' }}>🎫 Réservation</h3>
              <button 
                onClick={() => setEvenementSelectionne(null)} 
                style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
              <h4 style={{ margin: '0 0 10px 0' }}>{evenementSelectionne.nom}</h4>
              <p style={{ margin: '5px 0', fontSize: '14px' }}>📅 {evenementSelectionne.date}</p>
              <p style={{ margin: '5px 0', fontSize: '14px' }}>📍 {evenementSelectionne.lieu}</p>
              <p style={{ margin: '5px 0', fontSize: '14px', fontWeight: 'bold', color: '#e67e22' }}>
                💰 {evenementSelectionne.prixBillet.toLocaleString()} FCFA
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>🎫 Billets</label>
              <select 
                value={quantite} 
                onChange={(e) => setQuantite(parseInt(e.target.value))} 
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid #bdc3c7' }}
              >
                {[1,2,3,4,5].map(n => (
                  <option key={n} value={n}>{n} billet{n > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>📱 Paiement</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                {methodesPaiement.map(methode => (
                  <button 
                    key={methode.id} 
                    onClick={() => setMethodePaiement(methode.id)} 
                    style={{ 
                      background: methodePaiement === methode.id ? methode.couleur : 'white', 
                      color: methodePaiement === methode.id ? 'white' : methode.couleur, 
                      border: `2px solid ${methode.couleur}`, 
                      padding: '10px', 
                      borderRadius: '8px', 
                      cursor: 'pointer', 
                      fontWeight: 'bold',
                      fontSize: '12px'
                    }}
                  >
                    {methode.icon} {methode.nom}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>📞 Téléphone</label>
              <input 
                type="tel" 
                placeholder="70123456" 
                value={numeroPaiement} 
                onChange={(e) => setNumeroPaiement(e.target.value)} 
                style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid #bdc3c7', boxSizing: 'border-box' }} 
              />
            </div>

            <div style={{ background: '#27ae60', color: 'white', padding: '15px', borderRadius: '10px', textAlign: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0 }}>Total: {(evenementSelectionne.prixBillet * quantite).toLocaleString()} FCFA</h3>
              <p style={{ margin: '5px 0 0 0', fontSize: '14px' }}>📱 QR Code inclus</p>
            </div>

            <button 
              onClick={confirmerAchat}
              disabled={!numeroPaiement}
              style={{ 
                width: '100%', 
                background: numeroPaiement ? 'linear-gradient(45deg, #e67e22, #f39c12)' : '#95a5a6', 
                color: 'white', 
                padding: '15px', 
                border: 'none', 
                borderRadius: '10px', 
                cursor: numeroPaiement ? 'pointer' : 'not-allowed', 
                fontSize: '16px', 
                fontWeight: 'bold' 
              }}
            >
              {numeroPaiement ? '✅ Confirmer l\'achat' : '📱 Saisissez votre numéro'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [utilisateur, setUtilisateur] = useState<Utilisateur | null>(null);

  if (!utilisateur) {
    return <PageConnexion onConnexion={setUtilisateur} />;
  }

  return <Dashboard utilisateur={utilisateur} onDeconnexion={() => setUtilisateur(null)} />;
};

export default App;