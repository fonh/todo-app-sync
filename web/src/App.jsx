import React from 'react'; // ← Ajoute cette ligne
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import './App.css';
import { ICON_MAP } from './icons';
import AddCategoryModal from './components/AddCategoryModal';

function App() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Travail", iconName: "FaBriefcase", color: "#ff9f43" },
    { id: 2, name: "Courses", iconName: "FaShoppingCart", color: "#4cd964" },
    { id: 3, name: "Personnel", iconName: "FaSmile", color: "#5ac8fa" },
    { id: 4, name: "Études", iconName: "FaBook", color: "#ff6b6b" },
    { id: 5, name: "Sport", iconName: "FaDumbbell", color: "#a55eea" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);

  const handleAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  return (
    <div className="app-container">
      {/* BARRE LATÉRALE */}
      <div className="sidebar">
        <h2 className="sidebar-title">Mes catégories</h2>
        <ul className="category-list">
          {categories.map(category => {
            const IconComponent = ICON_MAP[category.iconName];
            return (
              <li
                key={category.id}
                className={`category-item ${selectedCategory.id === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                style={{ '--category-color': category.color }}
              >
                <span className="category-icon">
                  {IconComponent && <IconComponent size={20} />}
                </span>
                <span className="category-name">{category.name}</span>
              </li>
            );
          })}
          <li
            className="category-item add-category-item"
            onClick={() => setIsAddCategoryModalOpen(true)}
          >
            <FaPlus className="category-icon" />
            <span className="category-name">Nouvelle catégorie</span>
          </li>
        </ul>
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="main-content">
        <div className="content-header">
          <div>
            <h1 className="content-title">
              <span className="content-icon" style={{ color: selectedCategory.color }}>
                {ICON_MAP[selectedCategory.iconName] && (
                  <>{React.createElement(ICON_MAP[selectedCategory.iconName], { size: 24 })}</>
                )}
              </span>
              {selectedCategory.name}
            </h1>
            <p className="content-subtitle">3 tâches en attente</p>
          </div>
          <button
            className="fab-button"
            onClick={() => alert("Fonctionnalité à implémenter : Ajouter une tâche")}
          >
            <FaPlus />
          </button>
        </div>

        {/* LISTE DES TÂCHES */}
        <div className="tasks-list">
          <div className="task-item">
            <input type="checkbox" className="task-checkbox" />
            <span className="task-label">Apprendre React Native</span>
          </div>
          <div className="task-item">
            <input type="checkbox" className="task-checkbox" />
            <span className="task-label">Faire les courses</span>
          </div>
          <div className="empty-state">
            <p>Glisse-dépose pour réorganiser tes tâches</p>
          </div>
        </div>
      </div>

      <AddCategoryModal
        isOpen={isAddCategoryModalOpen}
        onClose={() => setIsAddCategoryModalOpen(false)}
        onAddCategory={handleAddCategory}
      />
    </div>
  );
}

export default App;
