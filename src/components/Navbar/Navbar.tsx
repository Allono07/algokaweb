import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { label: "HOME", href: "#home", type: "anchor" },
  { label: "ABOUT", href: "#about", type: "anchor" },
  { label: "PROJECTS", href: "#projects", type: "anchor" },
  { label: "SOLUTIONS", href: "/solutions", type: "route" },
  { label: "CONTACT", href: "#contact", type: "anchor" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isSolutionsPage = location.pathname === "/solutions";

  const resolveHref = (href: string, type: string) => {
    if (type === "route") {
      return href;
    }
    return isSolutionsPage ? `/${href}` : href;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <motion.a
          href="/"
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="navbar-logo-text">ALGOKA</span>
          <img src="/algoka3.png" alt="Algoka logo" className="navbar-logo-icon" />
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.label} className={item.label === "CONTACT" ? "navbar-item-contact" : ""}>
              <a
                href={resolveHref(item.href, item.type)}
                className={`navbar-link ${item.label === "CONTACT" ? "navbar-btn-contact" : ""}`}
              >
                <span>{item.label}</span>
                {/* <span className="navbar-link-underline" /> */}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="navbar-mobile-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className="navbar-mobile-links">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={resolveHref(item.href, item.type)}
                    className="navbar-mobile-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
