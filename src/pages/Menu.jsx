import { Link } from "react-router-dom";
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';

function Menu() {
  return (
    <>
      {/* Menu de navigation */}
      <div className="text-white fixed top-0 left-0 w-full flex items-center justify-center gap-10 p-4 bg-[#0c0c0c] z-10 h-16">
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/benjamin-laurent-5896ba30b" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </a>
          <a href="https://github.com/PearceKof" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
        </div>
        <Link to="/" className="text-lg font-semibold hover:text-pink-600 transition-colors">
          Home
        </Link>
        <Link to="/to-do-list" className="text-lg font-semibold hover:text-pink-600 transition-colors">
          To Do List
        </Link>
        <Link to="/calculator" className="text-lg font-semibold hover:text-pink-600 transition-colors">
          Calculator
        </Link>
        <Link to="/predictive-maintenance-simulator" className="text-lg font-semibold hover:text-pink-600 transition-colors">
          Monitoring
        </Link>
      </div>

      {/* Espace réservé pour le menu */}
      <div className="h-16"></div>
    </>
  );
}

export default Menu;
