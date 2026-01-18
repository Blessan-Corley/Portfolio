import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiLeetcode, 
  SiCodeforces, 
  SiCodechef, 
  SiGeeksforgeeks 
} from 'react-icons/si';
import { FiExternalLink, FiCode, FiTrendingUp, FiAward } from 'react-icons/fi';

const CompetitiveProgramming = () => {
  const platforms = [
    {
      name: "LeetCode",
      icon: SiLeetcode,
      color: "#FFA116", // LeetCode Yellow
      username: "blessan_corley",
      rating: "Max Rating: 1650", // Placeholder
      solved: "500+ Problems",
      link: "https://leetcode.com/u/blessan_corley/",
      description: "Consistent daily challenge solver"
    },
    {
      name: "Codeforces",
      icon: SiCodeforces,
      color: "#1F8ACB", // Codeforces Blue
      username: "BlessanCorley",
      rating: "Specialist (1420)", // Placeholder
      solved: "300+ Problems",
      link: "https://codeforces.com/profile/BlessanCorley",
      description: "Competitive contest participant"
    },
    {
      name: "CodeChef",
      icon: SiCodechef,
      color: "#5B4638", // CodeChef Brown
      username: "blessan_corley",
      rating: "3 Star (1600)", // Placeholder
      solved: "200+ Problems",
      link: "https://www.codechef.com/users/blessan_corley",
      description: "Regular contest performer"
    },
    {
      name: "GeeksforGeeks",
      icon: SiGeeksforgeeks,
      color: "#2F8D46", // GFG Green
      username: "blessancorley",
      rating: "Institute Rank: 5", // Placeholder
      solved: "150+ Problems",
      link: "https://www.geeksforgeeks.org/user/blessancorley/",
      description: "DSA concept mastery"
    },
    {
      name: "Codolio",
      icon: FiCode, // Using generic icon
      color: "#8B5CF6", // Purple
      username: "Blessan Corley",
      rating: "Global Rank: Top 5%", // Placeholder
      solved: "Aggregated Stats",
      link: "https://codolio.com/profile/Blessan%20Corley",
      description: "Unified coding portfolio"
    }
  ];

  return (
    <section 
      id="competitive-programming" 
      className="relative bg-black text-white py-20 px-6 md:px-12 lg:px-20 w-full overflow-hidden"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #ff7b54, #ffb347, #ffd700, #4fc3f7, #42a5f5)',
                backgroundSize: '200% 200%'
              }}
            >
              Coding Profiles
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Pushing the boundaries of algorithms and data structures across various competitive arenas.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Hover Gradient Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${platform.color}, transparent)` }}
              />

              <div className="relative z-10">
                {/* Header: Icon & Arrow */}
                <div className="flex justify-between items-start mb-6">
                  <div 
                    className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: platform.color }}
                  >
                    <platform.icon className="text-3xl" />
                  </div>
                  <FiExternalLink className="text-white/40 group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                  {platform.name}
                </h3>
                <p className="text-white/50 text-sm mb-6 line-clamp-2">
                  {platform.description}
                </p>

                {/* Stats Row */}
                <div className="flex items-center gap-4 text-sm font-medium pt-4 border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-white/80">
                    <FiTrendingUp className="text-emerald-400" />
                    <span>{platform.rating}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/80 ml-auto">
                    <FiAward className="text-yellow-400" />
                    <span>{platform.solved}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;