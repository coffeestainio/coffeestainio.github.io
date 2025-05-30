import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { NavItem } from '../../types';

interface LayoutProps {
  children: ReactNode;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors">
      <Navbar items={navItems} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;