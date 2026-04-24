import { motion } from "motion/react";
import { Github, ExternalLink, Calendar, Layers } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Hybrid Predictive Maintenance",
      subtitle: "using Enhanced CMAPSS NASA Dataset",
      date: "Apr 2025 – May 2025",
      tags: ["Python", "Machine Learning", "Time-Series Analysis"],
      description: "Designed a multi-stage predictive maintenance framework to model engine degradation and estimate Remaining Useful Life (RUL). Built a hybrid pipeline combining clustering, classification, and regression.",
      highlights: [
        "Engineered temporal and sensor-derived features for performance drift capture.",
        "Developed custom risk scoring mechanism for maintenance prioritization.",
        "Integrated model outputs to support data-driven maintenance planning."
      ],
      github: "https://github.com/Tanishq-bns"
    },
    {
      title: "Mobile Phone Price Classification",
      date: "Jul 2025",
      tags: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Seaborn"],
      description: "Built ML models on a dataset of 2000+ specifications to classify devices into four price categories. Achieved 93.8% test accuracy with Random Forest.",
      highlights: [
        "Performed EDA and feature engineering (pixel resolution, screen area).",
        "Applied Isolation Forest for outlier detection and StandardScaler.",
        "Identified RAM as the strongest predictor of price range."
      ],
      github: "https://github.com/Tanishq-bns"
    },
    {
      title: "Energy Consumption Forecasting",
      date: "Oct 2025",
      tags: ["Python", "Scikit-learn", "Pandas"],
      description: "Developed a predictive model to forecast time-series energy data, achieving a high R-Squared value.",
      highlights: [
        "Implemented extensive feature engineering (lag and rolling statistics).",
        "Captured seasonality trends and improved forecast accuracy."
      ],
      github: "https://github.com/Tanishq-bns"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center md:text-left"
      >
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Featured Projects</h1>
        <p className="text-slate-600 max-w-2xl">
          A collection of my work in Machine Learning, Data Science, and Software Engineering.
          Each project represents a unique challenge and a step forward in my learning journey.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Layers size={24} />
              </div>
              <div className="flex gap-2">
                <a 
                  href={project.github} 
                  target="_blank" 
                  className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
                  title="View Source on GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  className="p-2 text-slate-400 hover:text-blue-600 transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                  <Calendar size={14} />
                  <span>{project.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-sm font-medium text-slate-500">{project.subtitle}</p>
                )}
              </div>

              <p className="text-slate-600 leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-2">
                {project.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex gap-2 text-sm text-slate-500">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
