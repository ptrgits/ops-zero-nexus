import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-background rounded-sm"></div>
              </div>
              <div>
                <div className="text-lg font-bold">Zeroday101</div>
                <div className="text-xs text-muted-foreground">Part of Zeroday Operations</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Bootcamp cybersecurity intensif untuk membentuk ethical hacker dan peneliti keamanan profesional.
              Hacking adalah gaya hidup yang meliputi bagaimana cara kita berfikir, menganalisa dan bertindak.
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
            Train Hard, Hack Real. #RealWorldPentest #BugBounty
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;