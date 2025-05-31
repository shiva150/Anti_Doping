import { Link } from 'react-router-dom';
import {
  HomeIcon,
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            
            <span className="font-bold text-xl">Clean Sport Edu</span>
          </Link>

          <div className="flex space-x-4">
            <NavLink to="/" icon={<HomeIcon className="w-5 h-5" />} text="Home" />
            <NavLink to="/learn" icon={<AcademicCapIcon className="w-5 h-5" />} text="Learn" />
            <NavLink to="/quiz" icon={<QuestionMarkCircleIcon className="w-5 h-5" />} text="Quiz" />
            <NavLink to="/leaderboard" icon={<ChartBarIcon className="w-5 h-5" />} text="Leaderboard" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }) {
  return (
    <Link to={to} className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-100">
      {icon}
      <span>{text}</span>
    </Link>
  );
}

export default Navbar;
