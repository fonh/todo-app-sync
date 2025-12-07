import React from 'react'; // ← Ajoute cette ligne
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import './App.css';
import { ICON_MAP } from './icons';
import AddCategoryModal from './components/AddCategoryModal';
import AddTaskModal from './components/AddTaskModal';

function App() {
  // État pour les catégories et la catégorie sélectionnée
  const [categories, setCategories] = useState([
    { id: 1, name: 'Travail', iconName: 'FaBriefcase', color: '#ff9f43' },
    { id: 2, name: 'Courses', iconName: 'FaShoppingCart', color: '#4cd964' },
    { id: 3, name: 'Personnel', iconName: 'FaSmile', color: '#5ac8fa' },
    { id: 4, name: 'Études', iconName: 'FaBook', color: '#ff6b6b' },
    { id: 5, name: 'Sport', iconName: 'FaDumbbell', color: '#a55eea' },
  ]);

  // État pour les tâches (structure : { [categoryId]: [tasks] })
  const [tasks, setTasks] = useState({
    1: [{ id: 1, title: 'Apprendre React Native', done: false }],
    2: [
      { id: 2, title: 'Acheter du lait', done: false, dueDate: '2025-12-10' },
    ],
  });

  // État pour la modale d'ajout de tâche
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);

  const handleAddCategory = (newCategory) => {
    setCategories([...categories, newCategory]);
  };
  // Ajouter une tâche à la catégorie sélectionnée
  const handleAddTask = (newTask) => {
    setTasks({
      ...tasks,
      [selectedCategory.id]: [...(tasks[selectedCategory.id] || []), newTask],
    });
  };

  // Basculer l'état "done" d'une tâche
  const toggleTaskDone = (taskId) => {
    setTasks({
      ...tasks,
      [selectedCategory.id]: tasks[selectedCategory.id].map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      ),
    });
  };

  // Supprimer une tâche
  const deleteTask = (taskId) => {
    setTasks({
      ...tasks,
      [selectedCategory.id]: tasks[selectedCategory.id].filter(
        (task) => task.id !== taskId
      ),
    });
  };

  return (
    <div className='app-container'>
      {/* BARRE LATÉRALE */}
      <div className='sidebar'>
        <h2 className='sidebar-title'>Mes catégories</h2>
        <ul className='category-list'>
          {categories.map((category) => {
            const IconComponent = ICON_MAP[category.iconName];
            return (
              <li
                key={category.id}
                className={`category-item ${selectedCategory.id === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                style={{ '--category-color': category.color }}
              >
                <span className='category-icon'>
                  {IconComponent && <IconComponent size={20} />}
                </span>
                <span className='category-name'>{category.name}</span>
              </li>
            );
          })}
          <li
            className='category-item add-category-item'
            onClick={() => setIsAddCategoryModalOpen(true)}
          >
            <FaPlus className='category-icon' />
            <span className='category-name'>Nouvelle catégorie</span>
          </li>
        </ul>
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className='main-content'>
        <div className='content-header'>
          <div>
            <h1 className='content-title'>
              <span
                className='content-icon'
                style={{ color: selectedCategory.color }}
              >
                {ICON_MAP[selectedCategory.iconName] && (
                  <>
                    {React.createElement(ICON_MAP[selectedCategory.iconName], {
                      size: 24,
                    })}
                  </>
                )}
              </span>
              {selectedCategory.name}
            </h1>
            <p className='content-subtitle'>3 tâches en attente</p>
          </div>
          <button
            className='fab-button'
            onClick={() => setIsAddTaskModalOpen(true)}
            style={{ backgroundColor: selectedCategory.color }}
          >
            <FaPlus />
          </button>
        </div>

        {/* LISTE DES TÂCHES */}
        <div className='tasks-list'>
          {tasks[selectedCategory.id]?.map((task) => (
            <div key={task.id} className='task-item'>
              <input
                type='checkbox'
                checked={task.done}
                onChange={() => toggleTaskDone(task.id)}
                className='task-checkbox'
              />
              <span className={task.done ? 'task-label done' : 'task-label'}>
                {task.title}
              </span>
              {task.description && (
                <p className='task-description'>{task.description}</p>
              )}
              {task.dueDate && (
                <span className='task-due-date'>
                  {new Date(task.dueDate).toLocaleDateString()}
                </span>
              )}
              <button
                className='delete-task-btn'
                onClick={() => deleteTask(task.id)}
                aria-label='Supprimer la tâche'
              >
                🗑
              </button>
            </div>
          ))}
          {!tasks[selectedCategory.id]?.length && (
            <div className='empty-state'>
              <p>Aucune tâche. Clique sur "+" pour en ajouter une.</p>
            </div>
          )}
        </div>
      </div>

      <AddCategoryModal
        isOpen={isAddCategoryModalOpen}
        onClose={() => setIsAddCategoryModalOpen(false)}
        onAddCategory={handleAddCategory}
      />
      <AddTaskModal
        isOpen={isAddTaskModalOpen}
        onClose={() => setIsAddTaskModalOpen(false)}
        onAddTask={handleAddTask}
        categoryColor={selectedCategory.color}
      />
    </div>
  );
}

export default App;
