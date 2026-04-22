import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Rocket, 
  Users, 
  Heart, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  ShieldAlert, 
  ArrowRight,
  Check,
  Map,
  Menu,
  X
} from "lucide-react";
import { ComingSoon } from "./components/ComingSoon";

const Nav = ({ onComingSoon }: { onComingSoon: (title?: string) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Features", href: "#features" },
    { name: "Community", href: "#community" },
    { name: "Safety", href: "#safety" },
    { name: "Download", action: () => onComingSoon("Download App") },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm shadow-on-surface/5">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <div 
          className="text-2xl font-extrabold tracking-tighter text-primary cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Sidequest
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            link.href ? (
              <a 
                key={link.name}
                className="text-on-surface font-medium hover:text-primary transition-colors" 
                href={link.href}
              >
                {link.name}
              </a>
            ) : (
              <button 
                key={link.name}
                onClick={link.action}
                className="text-on-surface font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            )
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => onComingSoon("Registration")}
            className="hidden sm:block signature-gradient text-white px-6 py-2.5 rounded-full font-bold active:scale-95 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30"
          >
            Get Started
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-on-surface p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-surface-container border-b border-outline/10 p-6 space-y-4 md:hidden shadow-xl"
          >
            {links.map((link) => (
              <div key={link.name}>
                {link.href ? (
                  <a 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-xl font-bold text-on-surface"
                  >
                    {link.name}
                  </a>
                ) : (
                  <button 
                    onClick={() => {
                      link.action?.();
                      setIsMenuOpen(false);
                    }}
                    className="block text-xl font-bold text-on-surface"
                  >
                    {link.name}
                  </button>
                )}
              </div>
            ))}
            <button 
              onClick={() => {
                onComingSoon("Registration");
                setIsMenuOpen(false);
              }}
              className="w-full signature-gradient text-white py-4 rounded-full font-bold text-lg"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onComingSoon }: { onComingSoon: (t?: string) => void }) => (
  <section className="relative min-h-[90vh] flex items-center px-6 pt-24 md:pt-20 overflow-hidden">
    <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="z-10 space-y-6 md:space-y-8 text-center lg:text-left"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed/20 text-primary font-bold text-sm tracking-widest uppercase">
          Available in Egypt
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1]">
          Your next local journey starts with a <span className="text-primary">hello.</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Discover the pulse of your city. Sidequest connects you with genuine local experiences and meaningful communities across Cairo and Alexandria.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
          <button 
            onClick={() => onComingSoon("Download App")}
            className="signature-gradient text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95"
          >
            Download App
          </button>
          <button 
            onClick={() => onComingSoon("Explore Quests")}
            className="bg-surface-container-high text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-container-highest transition-all active:scale-95"
          >
            Explore Quests
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 md:w-96 md:h-96 bg-primary-fixed/30 rounded-full blur-[100px]"></div>
        <div className="relative rounded-xl overflow-hidden shadow-2xl tonal-shadow lg:rotate-2 max-w-lg mx-auto">
          <img 
            className="w-full h-[400px] md:h-[600px] object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGBEtWctuWW8pU2rYwAPi-WSxbsYM6p7AyW15A5oxneN7wJZMi9vDt4zVnIiEGAKtX66IlJ65i5H9QNilhdRnZb-UYi1VRvf7iv_YDCwgZnVyS6OgwB2ycxaksDjkkwUngdw5zEj9HnSAi1h7ozswjBhU_AfkLNbPqaRi2i0D4fQEm6X2-HwFaF0Rj-upEuLKkNV0Ra4cdfeQ7jk9LP6FQEMagIuyMGaXIZFsPS3JVOYG2UxwEItTy4Sw31NMVELVP9kFadqBqgIpk" 
            alt="Sidequest Hero"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent"></div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Features = ({ onComingSoon }: { onComingSoon: (t?: string) => void }) => (
  <section id="features" className="py-24 md:py-32 px-6 bg-surface-container-low">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 md:mb-20 space-y-6">
        <h2 className="text-4xl md:text-5xl font-black">The Sidequest Way</h2>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          We prioritize heart over hype. Our platform is built to foster human connection, not to gamify your social life for rewards.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: Rocket,
            title: "Request a Quest",
            desc: "Want to explore a hidden gem in Zamalek? Put out a call and find a companion who knows the ropes.",
            color: "bg-secondary-container",
            border: false
          },
          {
            icon: Users,
            title: "Join an Adventure",
            desc: "Hop onto existing quests. From morning runs in Maadi to weekend trips to Fayoum, the adventure is ready.",
            color: "bg-primary-fixed/20",
            border: true
          },
          {
            icon: Heart,
            title: "Simple Connection",
            desc: "No complicated algorithms. Just real people looking for real conversations in the physical world.",
            color: "bg-tertiary-container",
            border: false
          }
        ].map((feature, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => onComingSoon(feature.title)}
            className={`p-10 bg-surface-container-lowest rounded-lg tonal-shadow hover:translate-y-[-8px] transition-transform duration-300 cursor-pointer ${feature.border ? "border-t-4 border-primary" : ""}`}
          >
            <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center text-primary mb-8`}>
              <feature.icon size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-on-surface-variant leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const BentoShowcase = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="lg:col-span-7 bg-surface-container rounded-xl p-8 md:p-12 overflow-hidden relative min-h-[400px] md:min-h-[500px]"
      >
        <div className="relative z-10 max-w-sm">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Designed for real interaction.</h2>
          <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
            Our interface stays out of your way. Focus on the message, the location, and the person.
          </p>
          <div className="flex gap-4">
            <div className="bg-white/50 backdrop-blur rounded-lg p-4 tonal-shadow">
              <MessageSquare className="text-primary mb-2" size={24} />
              <p className="font-bold text-[10px] md:text-xs">REAL-TIME CHAT</p>
            </div>
            <div className="bg-white/50 backdrop-blur rounded-lg p-4 tonal-shadow">
              <MapPin className="text-primary mb-2" size={24} />
              <p className="font-bold text-[10px] md:text-xs">LIVE TRACKING</p>
            </div>
          </div>
        </div>
        
        {/* Phone Mockup - hidden on smaller screens */}
        <div className="absolute -right-20 -bottom-20 w-[400px] h-[600px] bg-primary rounded-[3rem] border-[12px] border-on-surface shadow-2xl rotate-[-10deg] hidden xl:block">
          <div className="p-8 h-full flex flex-col gap-6">
            <div className="h-8 w-32 bg-white/20 rounded-full mx-auto"></div>
            <div className="space-y-4">
              <div className="bg-surface-container-lowest p-4 rounded-lg w-3/4 shadow-sm">
                <p className="text-sm text-on-surface">Meet at the Cairo Jazz Club?</p>
              </div>
              <div className="bg-primary-fixed/30 p-4 rounded-lg w-3/4 ml-auto">
                <p className="text-sm text-on-primary-container">Perfect, see you at 9!</p>
              </div>
            </div>
            <div className="mt-auto bg-white/10 h-32 rounded-lg border border-white/20 flex items-center justify-center">
              <Map className="text-white" size={48} />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="lg:col-span-5 bg-tertiary-dim rounded-xl p-8 md:p-12 text-white flex flex-col justify-between"
      >
        <div>
          <h3 className="text-3xl font-bold mb-4">Quest Path</h3>
          <p className="text-on-tertiary/70 text-lg">
            Track your community journey with our unique Quest Path — visual progress that celebrates every new friend made.
          </p>
        </div>
        <div className="flex items-center gap-4 mt-8 md:mt-12 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
            <Check size={20} className="md:size-[24px]" strokeWidth={3} />
          </div>
          <div className="flex-shrink-0 h-1 w-8 md:w-12 bg-tertiary-container/30"></div>
          <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
            <Check size={20} className="md:size-[24px]" strokeWidth={3} />
          </div>
          <div className="flex-shrink-0 h-1 w-8 md:w-12 bg-tertiary-container/30"></div>
          <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-dashed border-white/50 flex items-center justify-center animate-pulse">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white"></div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const SafetySection = () => (
  <section id="safety" className="py-24 md:py-32 px-6">
    <div className="max-w-7xl mx-auto rounded-xl bg-on-surface text-surface overflow-hidden flex flex-col lg:flex-row">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:w-1/2 p-8 md:p-20 space-y-12"
      >
        <h2 className="text-3xl md:text-5xl font-black">Safety First, Always.</h2>
        <div className="space-y-10 md:space-y-12">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <ShieldCheck className="text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-primary-fixed">Age Verification</h4>
              <p className="text-surface/70 leading-relaxed">
                We use secure, identity-first verification to ensure everyone on Sidequest is who they say they are.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <ShieldAlert className="text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-primary-fixed">Community Standards</h4>
              <p className="text-surface/70 leading-relaxed">
                Zero tolerance for harassment. Our moderation team is active 24/7, keeping Cairo's favorite community safe.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="lg:w-1/2 min-h-[300px] md:min-h-[400px] relative">
        <img 
          className="absolute inset-0 w-full h-full object-cover opacity-60" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtP6FDTYOh0SOlEfRpbpkmKqUrLb7qiTiS64ZYuaG1Y0ZFNmwfZtbk9qvzxKPDncwIELzjry6U8UmzP1B5S74sM_-lTi5at98rfJ9m6SLAyrRvhzACp-DSv0IvJBxbd3sqN5N1ukX9nWcxIwT5DZRDlF8yD8ZYzRyD59gGbfEnSSRA7x2o2F-gpfaLZjZ1C1ixz9anZFaDltXvhtKyxp13Icqk4S_FWbqkA7iYFkK9-8uBTW3veCkWdRUTYDInt3iAfCDgSky12HR_" 
          alt="Safety Center"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </section>
);

const Neighborhoods = ({ onComingSoon }: { onComingSoon: (t?: string) => void }) => (
  <section id="community" className="py-24 md:py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
        <div className="max-w-2xl space-y-6">
          <h2 className="text-3xl md:text-5xl font-black">Roots in your neighborhood.</h2>
          <p className="text-on-surface-variant text-lg md:text-xl">
            We don't just cover cities; we live in neighborhoods. From the quiet streets of Degla to the bustling vibes of Glym.
          </p>
        </div>
        <button 
          onClick={() => onComingSoon("Full Neighborhood Directory")}
          className="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform group"
        >
          See all neighborhoods <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
        </button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { name: "Maadi", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLynEmhuMOmgyXoeJQ-dQlRoT6O9szJ_HK170QtYwL9opmlzIKU5fCSNgANo-19JLNUakeH_DV7MoOjtKE_yjTp-WCOkEMGC96a86e1S6w2QphfWnmtRR1Br6g59TmyxNfIWbHcUtuHL9r-nWM-E2r1p2vT_WXrjNdKJhOu9GD_YMinlaYBMNploVz1qEhutTQJlw0FKXLpgs6BkF3T_57_7t3zNY4dMVxfbfLgnRepcSq1gAHqgWU7rv0PCrJXbaq7VqMvOY8Y0fa", delay: 0 },
          { name: "Zamalek", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKMZY6c0Rt_nz-ODhQihkRlWucFSaVHinMl-LpvnHd9ziWOfZLeCZkHKNsxy_QlwSVcREi2AZkwTgHUwHpaQv5K-cfeaeDwO7vxPKDbxQXpyzDDp8KvDVb6ld-eOmi3LMJHPjWR0_deDaheB-aYKL3CH6bpoOH3QS4wb1ujbtPA4jbogdyxzNGqcanhNiDYGgu3-85fIDrF0ZuyJPA101OaCHF7KbVZZSzrDzu7kjtc3nhb2lgevoQVizv97UTpcY6Jl1uagLOVYZz", delay: 0.1, offset: true },
          { name: "Alex Corniche", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzu4HJN-NVurdm8vAppcopCmODkFp0GCHLiw7ND7IV8sLUgqp5wI2W-EO-MnZI70bIB9HVJdsqlh7YeJv8avnzt8ycUm44QiIwvBt9_sJnaQVxQq_uYAkFhDpk7LAJbl6lxOY2EXaIc7YAIXJJvoBLXjtIDbM5NkQ9UJ3cX_Ys2mVEQ_5xd3lInOuNMblLLhYzLOQ72oVgujDQf4JfvaQGvvj7Y8FZ_JdtDm1g_0iSotYPmymnoiaMYl3hYrHAAuiGPqrwd4H2kZ1a", delay: 0.2 },
          { name: "Heliopolis", img: "https://lh3.googleusercontent.com/aida/ADBb0uge9vaxa-qcEOlYQbMn4xVErdn2EZGiwtlQM8VsRbpXcMLmtUzV2u0cdRz0BLGQjacpietm7QnSwRWYxswmaPvW-qpTWXnyIbf3L_iX68scXqYDFGbc3ArOCIePhLygw6uS6uTCDsE1voNJ6lqiKAjNPgf3I_OxaUI1pZZj5SYmMUdIHHAZXJLbFR_S5fHhowb2PN5OlJ7VZtsRd-9eCfCZyX7GBrqMYPMTOaO0-Q9HtnsoeqwBJwEZmVZ-1b_uyiDOmRk0t_z0vw", delay: 0.3, offset: true }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: item.delay }}
            className={`relative group aspect-[4/5] rounded-l overflow-hidden tonal-shadow cursor-pointer ${item.offset ? "mt-4 md:mt-8" : ""}`}
            onClick={() => onComingSoon(item.name + " Map")}
          >
            <img 
              referrerPolicy="no-referrer"
              src={item.img} 
              alt={item.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <p className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white font-bold text-lg md:text-xl uppercase tracking-tighter">
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = ({ onComingSoon }: { onComingSoon: (t?: string) => void }) => (
  <section className="py-24 md:py-32 px-6">
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto signature-gradient rounded-xl p-10 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
    >
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-10" 
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
      ></div>
      <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Stop scrolling.<br/>Start searching.</h2>
      <p className="text-white/90 text-lg md:text-xl mb-12 max-w-xl mx-auto relative z-10">
        Join thousands of others redefining their local social experience in Egypt.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
        <button 
          onClick={() => onComingSoon("iOS App")}
          className="bg-surface-container-lowest text-primary px-10 py-5 rounded-full font-bold text-lg md:text-xl shadow-xl active:scale-95 transition-all hover:bg-white"
        >
          Get it on App Store
        </button>
        <button 
          onClick={() => onComingSoon("Android App")}
          className="bg-on-surface text-white px-10 py-5 rounded-full font-bold text-lg md:text-xl shadow-xl active:scale-95 transition-all hover:bg-black"
        >
          Get it on Play Store
        </button>
      </div>
    </motion.div>
  </section>
);

const Footer = ({ onComingSoon }: { onComingSoon: (t?: string) => void }) => (
  <footer className="w-full rounded-t-[2rem] md:rounded-t-[3rem] mt-20 bg-surface-container-low px-8 md:px-12 py-16">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
      <div className="text-2xl font-black text-on-surface">Sidequest</div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {["Privacy", "Terms", "Support", "Contact"].map(link => (
          <button 
            key={link} 
            onClick={() => onComingSoon(link)}
            className="text-xs md:text-sm uppercase tracking-widest text-on-surface/60 hover:text-primary transition-all font-bold"
          >
            {link}
          </button>
        ))}
      </div>
      <div className="text-on-surface/60 text-[10px] md:text-sm uppercase tracking-widest text-center md:text-right font-medium">
        © 2026 Sidequest. Built for community in Cairo & Alexandria.
      </div>
    </div>
  </footer>
);

export default function App() {
  const [comingSoonTitle, setComingSoonTitle] = useState<string | null>(null);

  const handleComingSoon = (title?: string) => {
    setComingSoonTitle(title || "Coming Soon");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setComingSoonTitle(null);
  };

  return (
    <div className="font-sans min-h-screen selection:bg-primary-fixed/30">
      <AnimatePresence mode="wait">
        {comingSoonTitle ? (
          <motion.div
            key="coming-soon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ComingSoon onBack={handleBack} title={comingSoonTitle} />
          </motion.div>
        ) : (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Nav onComingSoon={handleComingSoon} />
            <Hero onComingSoon={handleComingSoon} />
            <Features onComingSoon={handleComingSoon} />
            <BentoShowcase />
            <SafetySection />
            <Neighborhoods onComingSoon={handleComingSoon} />
            <CTA onComingSoon={handleComingSoon} />
            <Footer onComingSoon={handleComingSoon} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
