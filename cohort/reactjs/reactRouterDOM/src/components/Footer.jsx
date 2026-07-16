import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-400 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h1 className="text-3xl font-bold mb-3">NotesApp</h1>

            <p className="text-sm leading-6">
              NotesApp helps you organize your daily tasks, save important
              notes, and manage your work efficiently anytime and anywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Quick Links</h2>

            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-900 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-blue-900 transition">
                  About
                </a>
              </li>

              <li>
                <a href="/contect" className="hover:text-blue-900 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Contact</h2>

            <p>Email: support@notesapp.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Location: India</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/40 mt-8 pt-5 text-center">
          <p>© {new Date().getFullYear()} NotesApp. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
