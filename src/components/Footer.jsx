import { Link } from 'react-scroll';

const footerLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/50 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
            <span className="text-xl font-display font-bold gradient-text">
              AD
            </span>
          </Link>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-400 dark:text-slate-500">
            &copy; {new Date().getFullYear()} Aditya Dhikale
          </p>
        </div>
      </div>
    </footer>
  );
}
