import { motion } from "motion/react";
import { ArrowLeft, Clock } from "lucide-react";

interface ComingSoonProps {
  onBack: () => void;
  title?: string;
}

export const ComingSoon = ({ onBack, title = "Coming Soon" }: ComingSoonProps) => {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-surface-container rounded-xl p-12 tonal-shadow space-y-8"
      >
        <div className="w-20 h-20 bg-primary-fixed/20 rounded-full flex items-center justify-center text-primary mx-auto">
          <Clock size={40} />
        </div>
        <h2 className="text-4xl font-black text-on-surface">{title}</h2>
        <p className="text-on-surface-variant text-lg">
          We're putting the finishing touches on this feature. It'll be ready for your next local adventure very soon!
        </p>
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all mx-auto"
        >
          <ArrowLeft size={20} /> Back to Home
        </button>
      </motion.div>
    </div>
  );
};
