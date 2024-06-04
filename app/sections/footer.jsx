"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion.js";
import { Button } from "../../components/ui/button.jsx";
import { Input } from "../../components/ui/input.jsx";

const Footer = () => {
  return (
    <section>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-16 px-4 md:py-12 flex justify-center items-center text-center mx-auto flex-col border-4 rounded-xl md:border-8 md:rounded-3xl border-orange-400"
      >
        <h1 className="mt-1 text-lg md:text-2xl font-bold uppercase">Stay Connected!</h1>
        <p className="mt-2 text-sm md:text-xl">
          Be the first to uncover the latest filtered coffee recipes and brewing
          secrets delivered straight to your inbox.
        </p>
        <div className="flex flex-col w-full max-w-sm items-center space-y-2 mt-2 py-2">
          <Input type="text" placeholder="First Name" className="w-full" />
          <Input type="email" placeholder="Email" className="w-full" />
          <div className="flex justify-center w-full">
            <Button type="submit">Subscribe</Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
