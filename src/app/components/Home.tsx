import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Github, Cpu, Code, Database, BrainCircuit, Layers, Trophy } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImage from "../../imports/profile.jpeg";

export function Home() {
  const skills = {
    "Machine Learning": ["PyTorch", "Scikit-learn", "OpenCV", "TensorFlow", "SHAP", "LIME"],
    "Languages": ["Python", "Java", "SQL"],
    "Dev & Data Tools": ["Git/GitHub", "Pandas", "NumPy", "Matplotlib", "Jupyter", "VS Code"]
  };

  const researchInterests = [
    "Natural Language Processing (NLP)",
    "Computer Vision",
    "Reinforcement Learning",
    "Generative AI (LLMs, RAG, Fine-tuning)"
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-20">
      {/* Hero / About Me */}
      <section className="flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-64 h-64 md:w-80 md:h-80 relative"
        >
          <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 -z-10 opacity-10"></div>
          <ImageWithFallback 
            src={profileImage} 
            alt="Tanishq Sutrave" 
            className="w-full h-full object-cover rounded-3xl shadow-xl"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">
              Tanishq Sutrave
            </h1>
            <p className="text-xl text-blue-600 font-medium">
              AI & ML Engineer
            </p>
          </div>
          
          <div className="space-y-4 text-slate-600 leading-relaxed max-w-2xl">
            <p>
              Hello! I'm a Computer Science student at Mahindra University with a deep passion for Artificial Intelligence and Machine Learning. I specialize in building predictive models and intelligent systems that solve real-world problems.
            </p>
            <p>
              Currently serving as the Vice President of the Entrepreneurship & Innovation Cell, I thrive at the intersection of technology and leadership, aiming to create impactful digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="mailto:tanishqbns@gmail.com" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Get in Touch
            </a>
            <div className="flex gap-3">
              <a href="https://github.com/Tanishq-bns" target="_blank" className="p-3 text-slate-600 hover:text-blue-600 border border-slate-200 rounded-lg transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/tanishq-sutrave-65b8622a0" target="_blank" className="p-3 text-slate-600 hover:text-blue-600 border border-slate-200 rounded-lg transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Personal Details */}
      <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Code className="text-blue-600" /> Personal Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-2">
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Full Name</span>
            <p className="text-lg font-medium text-slate-900">Tanishq Sutrave</p>
          </div>
          <div className="space-y-2">
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Phone Number</span>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-blue-600" />
              <p className="text-lg font-medium text-slate-900">+91 8501909215</p>
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Personal Email</span>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-blue-600" />
              <p className="text-lg font-medium text-slate-900">tanishqbns@gmail.com</p>
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">College Email</span>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-blue-600" />
              <p className="text-lg font-medium text-slate-900">se23ucse168@mahindrauniversity.edu.in</p>
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Location</span>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-600" />
              <p className="text-lg font-medium text-slate-900">Hyderabad, India</p>
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Education</span>
            <p className="text-lg font-medium text-slate-900">B.Tech CSE, Mahindra University</p>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section>
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <BrainCircuit className="text-blue-600" /> Research Interests
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {researchInterests.map((interest, idx) => (
            <motion.div 
              key={interest}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-center font-semibold text-slate-700"
            >
              {interest}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Layers className="text-blue-600" /> Experience
        </h2>
        <div className="space-y-6">
          {[
            {
              role: "Vice President",
              org: "Entrepreneurship & Innovation Cell, Mahindra University",
              period: "Aug 2025 – Present",
              desc: "Led entrepreneurship initiatives by organising flagship events and innovation workshops engaging 100+ students."
            },
            {
              role: "Machine Learning Intern",
              org: "Unified Mentor",
              period: "Jul 2025 – Sep 2025",
              desc: "Developed 4 end-to-end ML projects achieving up to 95% accuracy using TensorFlow and OpenCV."
            },
            {
              role: "Webmaster",
              org: "IEEE CIS Chapter, Mahindra University",
              period: "Feb 2026 – Present",
              desc: "Manage and maintain the digital presence of the IEEE CIS chapter, promoting AI and computational intelligence events."
            }
          ].map((exp, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                <p className="text-blue-600 font-medium">{exp.org}</p>
                <p className="text-slate-500 text-sm mt-1">{exp.desc}</p>
              </div>
              <div className="text-sm font-semibold text-slate-400 whitespace-nowrap">
                {exp.period}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section>
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Trophy className="text-blue-600" /> Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "1st Place — Quantum ML Hackathon",
              desc: "Led Team Quantum Intelligence to victory at an advanced-level Quantum Machine Learning hackathon, competing against top teams."
            },
            {
              title: "Academic Scholarship (×2)",
              desc: "Awarded the Academic Excellence Scholarship twice for consistently maintaining a high GPA throughout the program."
            }
          ].map((ach, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-6">
                <Trophy size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{ach.title}</h3>
              <p className="text-slate-600 leading-relaxed">{ach.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Cpu className="text-blue-600" /> Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-lg font-bold mb-4 text-blue-600 uppercase tracking-wider text-sm">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-600 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
