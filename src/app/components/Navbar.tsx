import { NavLink } from "react-router";
import { motion } from "motion/react";

export function Navbar() {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-blue-600 ${
      isActive ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
        >
          Tanishq Sutrave
        </motion.div>
        
        <div className="flex gap-8">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClasses}>
            Projects
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
