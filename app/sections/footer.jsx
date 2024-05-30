"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion.js";
import { Button } from "../components/ui/button.jsx";
import { Input } from "../components/ui/input.jsx";

const Footer = () => {
  return (
    <section>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mt-16 py-12 flex justify-center items-center mx-auto flex-col border-8 rounded-3xl border-orange-500"
      >
        <h1 className="mt-1 text-2xl font-bold uppercase">
          Stay Connected and Sip in Style!
        </h1>
        <p className="mt-2">
          Be the first to uncover the latest filtered coffee recipes and brewing
          secrets. Get exclusive insights, tips, and updates delivered straight
          to your inbox. Don't miss out on elevating your coffee experience!
        </p>
        <div className="flex flex-col w-full max-w-sm items-center space-y-2 mt-2 py-4">
          <Input type="text" placeholder="First Name" className="w-full" />
          <Input type="email" placeholder="Email" className="w-full" />
          <div className="flex justify-center w-full mt-4">
            <Button type="submit">Subscribe</Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Footer;
