import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // Note: Replace these with your actual EmailJS credentials
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          setStatus({ type: "success", message: "Message sent successfully!" });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again.");
          setStatus({
            type: "error",
            message: "Something went wrong. Please try again.",
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="section bg-slate-50/50">
      <div className="container">
        <motion.div
          className="glass bg-white/80 grid lg:grid-cols-2 p-16 rounded-[32px] gap-16 shadow-xl shadow-slate-200/50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.h2
              className="text-4xl mb-6 leading-tight text-slate-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Let's Build <br />
              <span className="gradient-text">Something Great</span>
            </motion.h2>
            <p className="text-text-muted mb-10">
              Ready to start your next project? Get in touch with our experts
              today.
            </p>
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: "📍",
                  text: "DN-81 SaltLake Sector-V Kolkata, West Bengal 700091",
                },
                { icon: "📧", text: "technovate@yahoo.com" },
                { icon: "📞", text: "+91 9748071602" },
              ].map((detail, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <span className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-lg shadow-sm">
                    {detail.icon}
                  </span>
                  <p className="text-slate-700">{detail.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
              required
            />
            <select
              name="service_type"
              className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
              required
            >
              <option value="">Select Service</option>
              <option value="cloud">Cloud Solutions</option>
              <option value="ai">AI & ML</option>
              <option value="dev">Software Development</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full px-6 py-4 bg-white border border-slate-200 rounded-xl text-slate-900 outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
              required
            ></textarea>

            {status.message && (
              <p
                className={`text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}
              >
                {status.message}
              </p>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              className={`btn-primary w-full ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
              whileHover={loading ? {} : { scale: 1.02 }}
              whileTap={loading ? {} : { scale: 0.98 }}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
