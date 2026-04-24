import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900">Tanishq Sutrave</h3>
            <p className="text-slate-500 text-sm max-w-xs">
              Building intelligent solutions and digital experiences with code and data.
            </p>
          </div>

          <div className="flex gap-6">
            <a href="https://github.com/Tanishq-bns" target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/tanishq-sutrave-65b8622a0" target="_blank" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:tanishqbns@gmail.com" className="text-slate-400 hover:text-blue-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>

          <div className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Tanishq Sutrave. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
