import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: '🌐',
    title: 'Cloud Solutions',
    desc: 'Scalable and secure cloud infrastructure designed for high-performance applications.'
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    desc: 'Intelligent automation and predictive analytics to drive business growth.'
  },
  {
    icon: '🛡️',
    title: 'Cybersecurity',
    desc: 'Advanced protection systems to safeguard your digital assets and user data.'
  },
  {
    icon: '💻',
    title: 'Software Development',
    desc: 'Custom enterprise software built with the latest technologies and best practices.'
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    desc: 'Turn your data into actionable insights with our comprehensive analytics platform.'
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile experiences that engage your users.'
  }
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const Services = () => {
  return (
    <section id="services" className="section bg-slate-50/50">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 text-slate-900">Our <span className="gradient-text">Core Services</span></h2>
          <p className="text-text-muted max-w-2xl mx-auto">We provide comprehensive technology solutions tailored to your unique business needs.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              className="glass p-12 rounded-[24px] text-center transition-all duration-300"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ scale: 1.05, borderColor: '#3b82f6', backgroundColor: '#ffffff' }}
            >
              <div className="text-5xl mb-6 inline-block">{s.icon}</div>
              <h3 className="text-2xl mb-4 text-slate-900">{s.title}</h3>
              <p className="text-text-muted text-[0.95rem]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
