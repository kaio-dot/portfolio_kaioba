import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0 },
};

export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    //Constantes
    const toggleMenu = () => { setMenuOpen(!menuOpen);}
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" }
    ];


    return (
    <header className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Nome */}
        <Link to="/" className="text-2xl font-bold text-white tracking-tight">
          <span className="inline-block animate-typing">
            <span className="text-blue-500">Kaioba</span>.dev
          </span>
        </Link>

        {/* Menu Desktop */}
        <motion.nav
         variants={navVariants}
         initial="hidden"
         animate="visible"
         className="hidden md:flex space-x-8"
        >
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={linkVariants}>
              <Link
                to={link.path}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Menu Mobile Expandido */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center bg-gray-900 border-t border-gray-800 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );

}