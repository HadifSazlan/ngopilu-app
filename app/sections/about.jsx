"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion.js";
import { TypingText } from "../../components/custom-effect/text.jsx";

const About = () => {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-[1280px] py-16 mx-auto flex justify-center items-center flex-col"
      >
        <TypingText
          title="# About"
          textStyles="text-xl md:text-2xl font-bold uppercase"
        />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="px-6 text-base md:px-0 md:text-2xl mt-2 text-center"
        >
          <span className="font-extrabold uppercase">Ngopilu.</span> Your easy
          guide to great filtered coffee. Sharing simple methods used by many to
          help you brew amazing coffee. Perfect for home brewing. Make coffee
          time a daily joy!
        </motion.p>
        <motion.p
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="px-2 text-base md:text-2xl mt-2 text-center"
        >
          Let's explore the art of coffee brewing
        </motion.p>
        <motion.img
          variants={fadeIn("up", "tween", 0.6, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="mt-4"
        />
      </motion.div>
    </section>
  );
};

export default About;
