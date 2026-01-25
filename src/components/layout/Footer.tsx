import Link from "next/link";
import { Linkedin, Facebook, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[#02040a]/50 text-white pt-24 pb-8 px-6 md:px-24 border-t border-white/10 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />

      <div className="max-w-[100rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 mb-24 relative z-10">
        <div className="col-span-1 md:col-span-6">
          <h2 className="font-sans text-5xl md:text-8xl font-black tracking-tighter mb-8 text-white">
            JOIN THE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              FLOW
            </span>
          </h2>
          <a
            href="mailto:dataoverflow2023@gmail.com"
            className="text-xl font-bold text-white/40 hover:text-white transition-colors flex items-center gap-2"
          >
            <Mail className="w-5 h-5" /> dataoverflow2023@gmail.com
          </a>
        </div>

        <div className="col-span-1 md:col-span-6 flex flex-col md:flex-row gap-16 md:justify-end">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-primary mb-6">
              Explore
            </h4>
            <ul className="space-y-4 font-sans text-sm text-white/40">
              <li>
                <Link
                  href="#workshops"
                  className="hover:text-white transition-colors"
                >
                  Academy
                </Link>
              </li>
              <li>
                <Link
                  href="#aiday"
                  className="hover:text-white transition-colors"
                >
                  Data & Beyond
                </Link>
              </li>
              <li>
                <Link
                  href="#hackathon"
                  className="hover:text-white transition-colors"
                >
                  Dataquest
                </Link>
              </li>
              <li>
                <Link
                  href="/archive"
                  className="hover:text-white transition-colors"
                >
                  Insights
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-secondary mb-6">
              Connect
            </h4>
            <ul className="space-y-4 font-sans text-sm text-white/40">
              <li>
                <a
                  href="#"
                  className="hover:text-white flex items-center gap-2"
                >
                  <Instagram size={16} /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white flex items-center gap-2"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white flex items-center gap-2"
                >
                  <Facebook size={16} /> Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[100rem] mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 uppercase font-mono tracking-wider">
        <span>© 2026 Data Overflow. All Rights Reserved.</span>
        <span className="mt-4 md:mt-0">Made in Tunisia</span>
      </div>
    </footer>
  );
};
