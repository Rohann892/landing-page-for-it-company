import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-32 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.03)_0%,transparent_40%),radial-gradient(circle_at_90%_80%,rgba(139,92,246,0.03)_0%,transparent_40%)]"
    >
      <div className="container grid lg:grid-cols-2 items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-slate-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Empowering the{" "}
            <span className="gradient-text">Next Generation</span> of Digital
            Innovation
          </motion.h1>
          <motion.p
            className="text-lg text-text-muted mb-10 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We deliver cutting-edge IT solutions that transform businesses and
            redefine possibilities. From AI to Cloud, we build the future today.
          </motion.p>
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button className="btn-primary">Our Solutions</button>
            <button className="btn-secondary">Learn More</button>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial from-primary/10 to-transparent z-[-1]"></div>
          <img
            src="/hero.jpeg"
            alt="Technovate Solutions Hero"
            className="w-full rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] animate-float"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
