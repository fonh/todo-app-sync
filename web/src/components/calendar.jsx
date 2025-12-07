// src/components/Calendar.jsx
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Calendar({ tasks }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Fonction pour générer les jours du mois
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Fonction pour obtenir le premier jour du mois
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Récupère l'année et le mois actuels
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  // Génère les jours du mois
  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} className='calendar-day empty'></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
    const tasksForDay = Object.values(tasks)
      .flat()
      .filter((task) => task.dueDate === dateStr);
    days.push(
      <div key={`day-${i}`} className='calendar-day'>
        {i}
        {tasksForDay.map((task) => (
          <div
            key={task.id}
            className='calendar-task-dot'
            style={{ backgroundColor: '#48bb78' }}
          ></div>
        ))}
      </div>
    );
  }

  // Noms des mois
  const monthNames = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];

  // Noms des jours
  const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  return (
    <div className='calendar'>
      <div className='calendar-nav'>
        <button onClick={() => setCurrentDate(new Date(year, month - 1, 1))}>
          <FaChevronLeft />
        </button>
        <h4>
          {monthNames[month]} {year}
        </h4>
        <button onClick={() => setCurrentDate(new Date(year, month + 1, 1))}>
          <FaChevronRight />
        </button>
      </div>
      <div className='calendar-weekdays'>
        {dayNames.map((day) => (
          <div key={day} className='calendar-weekday'>
            {day}
          </div>
        ))}
      </div>
      <div className='calendar-days'>{days}</div>
    </div>
  );
}
