import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 bg-white border-t border-slate-200">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div>
            <div className="flex items-center gap-2 font-outfit font-bold text-2xl tracking-wider mb-6">
              <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">⚡</span>
              <span className="text-slate-900">TECHNOVATE</span>
            </div>
            <p className="text-text-muted max-w-[250px]">Innovating the digital landscape since 2009.</p>
          </div>
          <div>
            <h4 className="text-lg mb-6 text-slate-900">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#hero" className="text-[0.95rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Home</a></li>
              <li><a href="#services" className="text-[0.95rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Services</a></li>
              <li><a href="#about" className="text-[0.95rem] text-text-muted hover:text-primary hover:pl-1 transition-all">About Us</a></li>
              <li><a href="#contact" className="text-[0.95rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg mb-6 text-slate-900">Services</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-[0.95rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Cloud Solutions</a></li>
              <li><a href="#" className="text-[0.95rem] text-text-muted hover:text-primary hover:pl-1 transition-all">AI & ML</a></li>
              <li><a href="#" className="text-[0.95rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Cybersecurity</a></li>
              <li><a href="#" className="text-[0.95rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Development</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg mb-6 text-slate-900">Social</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-[0.95rem] text-text-muted hover:text-primary hover:pl-1 transition-all">LinkedIn</a></li>
              <li><a href="#" className="text-[0.95rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Twitter</a></li>
              <li><a href="#" className="text-[0.95rem] text-text-muted hover:text-primary hover:pl-1 transition-all">GitHub</a></li>
              <li><a href="#" className="text-[0.95rem] text-text-muted hover:text-primary hover:pl-1 transition-all">Dribbble</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-muted">
          <p>&copy; 2026 Technovate Solutions Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
