// src/icons.js
import {
  FaBriefcase, FaShoppingCart, FaSmile, FaBook, FaDumbbell,
  FaPlane, FaHeart, FaHome, FaUtensils, FaTag, FaPlus,
  FaMusic, FaGamepad, FaFilm, FaPaintBrush, FaLightbulb,
  FaTree, FaCar, FaBicycle, FaBus, FaTrain, FaShip,
  FaPlaneDeparture, FaHotel, FaUmbrellaBeach, FaCamera,
  FaGift, FaBirthdayCake, FaGraduationCap, FaLaptopCode,
  FaMobileAlt, FaTools, FaPencilAlt, FaPalette, FaTheaterMasks,
  FaDice, FaCookie, FaCoffee, FaWineGlass, FaHamburger, FaPizzaSlice
} from 'react-icons/fa';

// Liste de toutes les icônes disponibles
export const ICON_LIST = [
  { name: "FaBriefcase", label: "Travail", component: FaBriefcase },
  { name: "FaShoppingCart", label: "Courses", component: FaShoppingCart },
  { name: "FaSmile", label: "Personnel", component: FaSmile },
  { name: "FaBook", label: "Études", component: FaBook },
  { name: "FaDumbbell", label: "Sport", component: FaDumbbell },
  { name: "FaPlane", label: "Voyage", component: FaPlane },
  { name: "FaHeart", label: "Santé", component: FaHeart },
  { name: "FaHome", label: "Maison", component: FaHome },
  { name: "FaUtensils", label: "Cuisine", component: FaUtensils },
  { name: "FaTag", label: "Étiquette", component: FaTag },
  { name: "FaMusic", label: "Musique", component: FaMusic },
  { name: "FaGamepad", label: "Jeux", component: FaGamepad },
  { name: "FaFilm", label: "Cinéma", component: FaFilm },
  { name: "FaPaintBrush", label: "Art", component: FaPaintBrush },
  { name: "FaLightbulb", label: "Idées", component: FaLightbulb },
  { name: "FaTree", label: "Nature", component: FaTree },
  { name: "FaCar", label: "Voiture", component: FaCar },
  { name: "FaBicycle", label: "Vélo", component: FaBicycle },
  { name: "FaBus", label: "Bus", component: FaBus },
  { name: "FaTrain", label: "Train", component: FaTrain },
  { name: "FaShip", label: "Bateau", component: FaShip },
  { name: "FaPlaneDeparture", label: "Avion", component: FaPlaneDeparture },
  { name: "FaHotel", label: "Hôtel", component: FaHotel },
  { name: "FaUmbrellaBeach", label: "Plage", component: FaUmbrellaBeach },
  { name: "FaCamera", label: "Photo", component: FaCamera },
  { name: "FaGift", label: "Cadeau", component: FaGift },
  { name: "FaBirthdayCake", label: "Anniversaire", component: FaBirthdayCake },
  { name: "FaGraduationCap", label: "Diplôme", component: FaGraduationCap },
  { name: "FaLaptopCode", label: "Code", component: FaLaptopCode },
  { name: "FaMobileAlt", label: "Téléphone", component: FaMobileAlt },
  { name: "FaTools", label: "Outils", component: FaTools },
  { name: "FaPencilAlt", label: "Écriture", component: FaPencilAlt },
  { name: "FaPalette", label: "Design", component: FaPalette },
  { name: "FaTheaterMasks", label: "Théâtre", component: FaTheaterMasks },
  { name: "FaDice", label: "Hasard", component: FaDice },
  { name: "FaCookie", label: "Cookie", component: FaCookie },
  { name: "FaCoffee", label: "Café", component: FaCoffee },
  { name: "FaWineGlass", label: "Vin", component: FaWineGlass },
  { name: "FaHamburger", label: "Fast-food", component: FaHamburger },
  { name: "FaPizzaSlice", label: "Pizza", component: FaPizzaSlice },
];

// Mappage pour accéder aux composants par nom
export const ICON_MAP = ICON_LIST.reduce((acc, { name, component }) => {
  acc[name] = component;
  return acc;
}, {});
