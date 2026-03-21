export const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

export const resumeFileName = 'Blessan_resume.pdf';
export const resumePath = `${import.meta.env.BASE_URL}resume/${resumeFileName}`;

export const contactInfo = {
  email: "blessancorley@gmail.com",
  phone: "+91-9976768211",
  location: "Coimbatore, Tamil Nadu",
  timezone: "GMT +5:30",
  linkedin: "https://www.linkedin.com/in/blessan-corley-a-9662642a6",
  github: "https://github.com/Blessan-Corley",
  portfolio: "https://blessan-portfolio.vercel.app/",
  whatsapp: "https://wa.me/919976768211?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%21",
  status: "Open to opportunities",
  workType: "Remote/Hybrid/On-site OK"
};

export const footerQuickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

export const footerSocialLinks = [
  { iconKey: "github", href: contactInfo.github, label: "GitHub", color: "#ffffff" },
  { iconKey: "linkedin", href: contactInfo.linkedin, label: "LinkedIn", color: "#0077b5" },
  { iconKey: "email", href: `mailto:${contactInfo.email}`, label: "Email", color: "#ea4335" },
  { iconKey: "whatsapp", href: contactInfo.whatsapp, label: "WhatsApp", color: "#25D366" }
];

export const footerTechStack = ["React", "Framer Motion", "Tailwind CSS", "Vite"];
