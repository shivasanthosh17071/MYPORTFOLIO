import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    num: "01",
    title: "Mana Ride",
    desc: "A local vehicle booking platform that allows users to rent bikes and cars from verified local vendors. Focused on simplicity, speed, and a seamless booking experience.",
    tags: ["React + Vite", "Bootstrap"],
    url: "https://www.manaride.in/",
    category: "Vehicle Booking Platform",
  },
  {
    num: "02",
    title: "HK Self Drive Cars",
    desc: "A car rental platform enabling users to browse available vehicles, check availability, and make bookings online. Clean UI with full rental management flow.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
    url: "https://www.hkselfdrivecars.com/",
    category: "Car Rental Platform · Full Stack",
  },
  {
    num: "03",
    title: "BlackNykee Shopping",
    desc: "A modern fashion brand website with product listings, cart, and a sleek e-commerce experience for a contemporary fashion label.",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Bootstrap"],
    url: "https://blacknykee.santhoshdev.space/",
    category: "E-Commerce · Fashion",
  },
  {
    num: "04",
    title: "Echologics Techno Park",
    desc: "The official website for Echologics Techno Park, a software testing startup. Clean, professional, and conversion-focused landing page.",
    tags: ["React + Vite", "Bootstrap"],
    url: "https://www.echologicstechnopark.com/",
    category: "Corporate Website · Startup",
  },
  {
    num: "05",
    title: "Food Express",
    desc: "A full-stack food delivery application inspired by Swiggy. Features restaurant listings, cart management, order flow, and a Node.js + Express backend.",
    tags: ["React", "Node.js", "Express", "Bootstrap"],
    url: "https://swiggy.santhoshdev.space/",
    category: "Food Delivery App · Full Stack",
  },
  {
    num: "06",
    title: "SS Herbal Beauty",
    desc: "A modern website for SS Herbal Beauty, showcasing natural skincare and wellness products. Elegant UI focused on brand identity and customer trust.",
    tags: ["React + Vite", "Bootstrap"],
    url: "https://ss-herbal.vercel.app/",
    category: "Beauty & Wellness Brand",
  },
  {
    num: "07",
    title: "Keerthi Designs",
    desc: "A modern portfolio and design showcase platform built to present creative design work. Clean layout with smooth transitions and strong visual hierarchy.",
    tags: ["React + Vite", "Bootstrap"],
    url: "http://keerthi-designs-showcase.vercel.app/",
    category: "Portfolio · Design Showcase",
  },
  {
    num: "08",
    title: "Kronix Host",
    desc: "A web hosting and services platform with a modern, dark tech aesthetic. Showcases hosting plans, features, and tech-forward branding.",
    tags: ["React + Vite"],
    url: "https://kronix-host-testing.vercel.app/",
    category: "SaaS · Web Hosting",
  },
  {
    num: "09",
    title: "AllToolz",
    desc: "A free online utility platform offering PDF and image tools including merge, compress, and convert features. All tools run directly in the browser with no file uploads to any server.",
    tags: ["React + Vite"],
    url: "https://alltoolz.santhoshdev.space/",
    category: "Utility Platform · Browser Tools",
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="03 " label="Projects" title="Selected Works" />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.15 }}
          className="font-mono text-sm text-muted-foreground mb-8 -mt-8"
        >
          Live applications & client projects
        </motion.p>

        <div className="mt-4 space-y-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.num}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group border-t border-border py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:bg-secondary/30 px-4 -mx-4 transition-all duration-300 cursor-pointer block"
            >
              <span className="font-mono text-xs text-muted-foreground w-10 shrink-0">
                {project.num}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-xl md:text-2xl font-bold uppercase group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary/70 mt-1 inline-block">
                  {project.category}
                </span>
              </div>
              <p className="text-sm text-muted-foreground md:max-w-xs flex-1">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 flex-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-wider border border-border px-2 py-1 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1 shrink-0">
                Live Site{" "}
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"
                />
              </span>
            </motion.a>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
      {/* testing  */}
    </section>
  );
};

export default ProjectsSection;
