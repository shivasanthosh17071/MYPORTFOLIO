import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const posts = [
  { category: "Tutorial", title: "Building a Real-Time Chat App with Socket.io & React", readTime: "8 min read", date: "Mar 15, 2024" },
  { category: "Guide", title: "JWT Authentication in Node.js — Complete Guide", readTime: "12 min read", date: "Feb 28, 2024" },
  { category: "Opinion", title: "Why I Switched from Create React App to Vite", readTime: "5 min read", date: "Jan 20, 2024" },
];

const BlogSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading number="11" label="Blog" title="Thoughts & Tutorials" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="group border border-border p-8 hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <span className="font-mono text-[10px] text-primary uppercase tracking-wider">{post.category}</span>
              <h3 className="font-display text-lg font-bold mt-3 mb-4 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>{post.readTime}</span>
                <span>{post.date}</span>
              </div>
              <div className="mt-6 flex items-center gap-2 font-mono text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Read More <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
