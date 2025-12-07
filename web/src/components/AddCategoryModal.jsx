import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import IconPicker from './IconPicker';

export default function AddCategoryModal({ isOpen, onClose, onAddCategory }) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#ff9f43');
  const [iconName, setIconName] = useState('FaTag');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAddCategory({
      id: Date.now(),
      name: name.trim(), // Supprime les espaces inutiles
      iconName,
      color,
    });

    // Réinitialisation du formulaire
    setName('');
    setColor('#ff9f43');
    setIconName('FaTag');
    onClose();
  };

  // Fermeture de la modale en cliquant à l'extérieur
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Fermeture avec la touche Echap
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className='modal-overlay'
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      role='dialog'
      aria-modal='true'
      aria-label='Ajouter une nouvelle catégorie'
    >
      <div className='modal-content'>
        <h3>Nouvelle catégorie</h3>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='category-name'>Nom</label>
            <input
              id='category-name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Ex: Voyage, Travail, Loisirs...'
              required
              autoFocus // Focus automatique pour une meilleure UX
              maxLength={30} // Limite la longueur du nom
            />
          </div>

          <div className='form-group'>
            <label>Icône</label>
            <IconPicker selectedIcon={iconName} onSelect={setIconName} />
          </div>

          <div className='form-group'>
            <label htmlFor='category-color'>Couleur</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input
                id='category-color'
                type='color'
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{
                  width: '50px',
                  height: '50px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              />
              <span
                style={{
                  width: '30px',
                  height: '30px',
                  backgroundColor: color,
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                }}
              />
            </div>
          </div>

          <div className='modal-actions'>
            <button type='button' onClick={onClose} className='cancel-btn'>
              Annuler
            </button>
            <button type='submit' className='add-btn'>
              <FaPlus /> Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
