import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container grid lg:grid-cols-2 items-center gap-20">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute -top-5 -left-5 p-6 rounded-2xl text-center z-10 glass bg-white/90"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.5 }}
          >
            <span className="block text-3xl font-bold text-primary">15+</span>
            <span className="text-xs text-text-muted">Years of Excellence</span>
          </motion.div>
          <img
            src="/about.webp"
            alt="About Technovate"
            className="w-full h-[500px] object-cover rounded-3xl border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl mb-6 text-slate-900">
            About <span className="gradient-text">Technovate</span>
          </h2>
          <p className="text-lg text-text-muted mb-10">
            Founded in 2009, Technovate Solutions has been at the forefront of
            digital transformation. We believe in the power of technology to
            solve the world's most complex challenges.
          </p>
          <div className="grid grid-cols-3 gap-6 mb-10">
            {[
              { num: "500+", label: "Projects Done" },
              { num: "120+", label: "IT Specialists" },
              { num: "98%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <h4 className="text-3xl text-slate-900 mb-1">{stat.num}</h4>
                <p className="text-sm text-text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read Our Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
