import React from 'react';
import { Link } from 'react-router-dom';
import zerodayLogo from '@/assets/zeroday-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={zerodayLogo} 
                alt="Zeroday101 Logo" 
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="text-lg font-bold">Zeroday101</div>
                <div className="text-xs text-muted-foreground">Part of Zeroday Operations</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Program cybersecurity intensif untuk membentuk profesional keamanan siber dan peneliti keamanan tingkat internasional.
              Ethical hacking adalah filosofi hidup yang mencakup cara berpikir analitis dan pendekatan metodis dalam keamanan digital.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Program</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/program" className="text-muted-foreground hover:text-primary transition-colors">
                  Overview Program
                </Link>
              </li>
              <li>
                <Link to="/kurikulum" className="text-muted-foreground hover:text-primary transition-colors">
                  Kurikulum Lengkap
                </Link>
              </li>
              <li>
                <Link to="/mentor" className="text-muted-foreground hover:text-primary transition-colors">
                  Meet Our Mentors
                </Link>
              </li>
              <li>
                <Link to="/harga" className="text-muted-foreground hover:text-primary transition-colors">
                  Investment & Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Website: www.opzero.id</li>
              <li>Email: pendaftaran@opzero.id</li>
              <li>Instagram: @opzeroid</li>
              <li>WhatsApp/Telegram: via Instagram DM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Zeroday Operations. All rights reserved. Part of operation opzero.ru
          </div>
          <div className="text-sm text-muted-foreground mt-4 md:mt-0">
            Excellence in Cybersecurity Education. Professional Development Through Practice.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;