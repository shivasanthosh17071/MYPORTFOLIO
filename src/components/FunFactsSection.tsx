import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Coffee, Globe, Gamepad2, Music, BookOpen, Rocket } from "lucide-react";

const cards = [
  {
    title: "Fueled by coffee & curiosity",
    icon: Coffee,
    large: true,
    gradient: "from-secondary to-card",
  },
  {
    title: "Working remotely since 2021",
    icon: Globe,
    large: false,
    gradient: "from-card to-secondary",
  },
  {
    title: "Gamer when not shipping features",
    icon: Gamepad2,
    large: false,
    gradient: "from-secondary to-card",
  },
  {
    title: "Currently Vibing",
    subtitle: "lo-fi beats to code to",
    icon: Music,
    large: true,
    gradient: "from-card to-secondary",
    isSpotify: true,
  },
  {
    title: "Reading: Clean Code",
    subtitle: "by Robert C. Martin",
    icon: BookOpen,
    large: false,
    gradient: "from-secondary to-card",
  },
  {
    title: "Dream: Build a SaaS product in 2025",
    icon: Rocket,
    large: false,
    gradient: "from-card to-secondary",
  },
];

const FunFactsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="09" label="Personal" title="Beyond The Code" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[140px] md:auto-rows-[180px]">
          {cards.map((card, i) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative border border-border p-6 bg-gradient-to-br ${card.gradient} overflow-hidden flex flex-col justify-between ${
                  card.large ? "sm:col-span-2" : "col-span-1"
                }`}
              >
                {/* Icon */}
                <div className="absolute top-4 left-4 text-primary opacity-80">
                  <Icon size={20} />
                </div>

                {/* Spotify animation */}
                {card.isSpotify && (
                  <div className="absolute top-4 right-4">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex gap-[2px] items-end h-4"
                    >
                      {[3, 5, 2, 4, 3].map((h, bi) => (
                        <motion.div
                          key={bi}
                          animate={{ height: [h * 3, h * 5, h * 3] }}
                          transition={{
                            duration: 0.8 + bi * 0.1,
                            repeat: Infinity,
                          }}
                          className="w-[3px] bg-primary rounded-full"
                        />
                      ))}
                    </motion.div>
                  </div>
                )}

                {/* Content */}
                <div className="mt-6">
                  <h3 className="font-display text-sm md:text-base font-bold">
                    {card.title}
                  </h3>

                  {card.subtitle && (
                    <p className="font-mono text-xs text-muted-foreground mt-1">
                      {card.subtitle}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
