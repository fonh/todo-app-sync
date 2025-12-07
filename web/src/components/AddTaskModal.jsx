// src/components/AddTaskModal.jsx
import { useState, useEffect } from 'react';
import { FaPlus, FaEdit } from 'react-icons/fa';

export default function AddTaskModal({
  isOpen,
  onClose,
  onAddTask,
  categoryColor,
  taskToEdit,
}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  // Si on édite une tâche, on remplit le formulaire avec ses données
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description || '');
      setDueDate(taskToEdit.dueDate || '');
    } else {
      // Réinitialise le formulaire si on ajoute une nouvelle tâche
      setTitle('');
      setDescription('');
      setDueDate('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const taskData = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      title: title.trim(),
      description: description.trim(),
      done: taskToEdit ? taskToEdit.done : false,
      dueDate: dueDate || null,
    };

    onAddTask(taskData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className='modal-overlay'
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className='modal-content'>
        <h3 style={{ color: categoryColor }}>
          {taskToEdit ? <FaEdit /> : <FaPlus />}{' '}
          {taskToEdit ? 'Modifier la tâche' : 'Nouvelle tâche'}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='task-title'>Titre</label>
            <input
              id='task-title'
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Ex: Faire les courses'
              required
              autoFocus
            />
          </div>
          <div className='form-group'>
            <label htmlFor='task-description'>Description (optionnel)</label>
            <textarea
              id='task-description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Détails...'
              rows={3}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='task-due-date'>Date limite (optionnel)</label>
            <input
              id='task-due-date'
              type='date'
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <div className='modal-actions'>
            <button type='button' onClick={onClose} className='cancel-btn'>
              Annuler
            </button>
            <button
              type='submit'
              className='add-btn'
              style={{ backgroundColor: categoryColor }}
            >
              {taskToEdit ? <FaEdit /> : <FaPlus />}{' '}
              {taskToEdit ? 'Enregistrer' : 'Ajouter'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
