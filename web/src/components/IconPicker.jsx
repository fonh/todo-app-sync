// src/components/IconPicker.jsx
import { useState } from 'react';
import { ICON_LIST } from '../icons';

export default function IconPicker({ selectedIcon, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  // Trouve l'icône sélectionnée
  const SelectedIcon = ICON_LIST.find(icon => icon.name === selectedIcon)?.component;

  return (
    <div className="icon-picker">
      <div className="selected-icon" onClick={() => setIsOpen(!isOpen)}>
        {SelectedIcon ? <SelectedIcon size={24} /> : <span>Choisir une icône</span>}
      </div>
      {isOpen && (
        <div className="icon-grid">
          {ICON_LIST.map((icon) => (
            <div
              key={icon.name}
              className="icon-option"
              onClick={() => {
                onSelect(icon.name);
                setIsOpen(false);
              }}
              title={icon.label}
            >
              <icon.component size={24} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
